// src/voice/voiceControl.js
let recognition;
let listening = false;
let lastFireAt = 0;

export function createVoice(actions, options = {}) {
  const {
    wakeWord = null,          
    autoRestart = true,       
    debug = true,             
    debounceMs = 800,         
    onStatusChange = () => {},
    onTranscript = () => {}, 
  } = options;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.warn("SpeechRecognition not supported in this browser.");
    return null;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = false;

  // ---- Command router ----
  let dynamicCommands = getDefaultCommands(actions);

  function setCommands(newCommands) {
    dynamicCommands = newCommands;
  }

  function handleTranscript(transcriptRaw) {
    const transcript = transcriptRaw.toLowerCase().trim();
    if (debug) console.log("🎤 Heard:", transcript);
    onTranscript(transcript);

    // Wake word gate
    if (wakeWord) {
      if (!transcript.startsWith(wakeWord.toLowerCase())) return;
      // strip wake word
      transcript.replace(wakeWord.toLowerCase(), "").trim();
    }

    // Debounce
    const now = Date.now();
    if (now - lastFireAt < debounceMs) return;
    lastFireAt = now;

    // Regex based matching
    for (const cmd of dynamicCommands) {
      const match = cmd.test.exec(transcript);
      if (match) {
        cmd.run(match, transcript);
        return;
      }
    }
  }

  recognition.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript;
    handleTranscript(transcript);
  };

  recognition.onerror = (e) => {
    console.error("Speech recognition error:", e.error);
    onStatusChange("error");
    if (e.error === "not-allowed") {
      alert("Microphone permission denied. Please allow it in the browser bar.");
    }
    listening = false;
  };

  recognition.onstart = () => {
    if (debug) console.log("Voice started");
    onStatusChange("listening");
  };

  recognition.onend = () => {
    if (debug) console.log("Voice ended");
    onStatusChange("stopped");
    if (autoRestart && listening) {
      try {
        recognition.start();
      } catch (_) {}
    }
  };

  function start() {
    try {
      listening = true;
      recognition.start(); // must be triggered from a user gesture
      onStatusChange("listening");
    } catch (err) {
      console.error(err);
      onStatusChange("error");
    }
  }

  function stop() {
    listening = false;
    recognition.stop();
    onStatusChange("stopped");
  }

  function isListening() {
    return listening;
  }

  function destroy() {
    try {
      autoRestart && (listening = false);
      recognition?.stop();
    } catch (_) {}
  }

  return { start, stop, isListening, setCommands, destroy };
}

// ------------------ helpers ------------------

function getDefaultCommands(actions) {
  return [
    // go to <section>
    {
      test: /(go to|open)\s+(about|projects?|internships?|education|skills?|certifications?|achievements?|contact)/,
      run: (m) => actions.navigate(m[2]),
    },

    // single-word section hits (fallback to your old includes)
    {
      test: /\babout\b/,
      run: () => actions.navigate("about"),
    },
    {
      test: /\bprojects?\b/,
      run: () => actions.navigate("projects"),
    },
    {
      test: /\binternships?\b/,
      run: () => actions.navigate("internships"),
    },
    {
      test: /\beducation\b/,
      run: () => actions.navigate("education"),
    },
    {
      test: /\bskills?\b/,
      run: () => actions.navigate("skills"),
    },
    {
      test: /\bcertifications?\b/,
      run: () => actions.navigate("certifications"),
    },
    {
      test: /\bachievements?\b/,
      run: () => actions.navigate("achievements"),
    },
    {
      test: /\bcontact\b/,
      run: () => actions.navigate("contact"),
    },

    // utilities
    {
      test: /scroll down/,
      run: () => actions.scrollDown(),
    },
    {
      test: /scroll up/,
      run: () => actions.scrollUp(),
    },
    {
      test: /(change|toggle)\s+theme/,
      run: () => actions.toggleTheme(),
    },
    {
      test: /\bhelp\b/,
      run: () => actions.help?.(),
    },
  ];
}
