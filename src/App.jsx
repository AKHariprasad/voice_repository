import { useState, useMemo } from "react";
import { createVoice } from "./voice/voiceControl";

// sections
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  const [listening, setListening] = useState(false);

  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const navigate = (section) => {
    const id = section.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else speak(`Sorry, I couldn't find ${section}`);
  };

  // voice setup only once
  const voice = useMemo(
    () =>
      createVoice({
        navigate,
        scrollDown: () => window.scrollBy({ top: 600, behavior: "smooth" }),
        scrollUp: () => window.scrollBy({ top: -600, behavior: "smooth" }),
        toggleTheme: () =>
          document.documentElement.classList.toggle("dark"),
        help: () =>
          speak(
            "Say: go to about, go to skills, go to projects, scroll down, scroll up, change theme."
          ),
      }),
    []
  );

  const startListening = () => {
    if (!voice) {
      alert("SpeechRecognition is not supported in your browser.");
      return;
    }
    voice.start();
    setListening(true);
  };

  const stopListening = () => {
    voice.stop();
    setListening(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />

      {/* 🎙️ Voice Control Button */}
      <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        {!listening ? (
          <button
            onClick={startListening}
            style={{
              padding: "10px 16px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            🎙️ Start Voice
          </button>
        ) : (
          <button
            onClick={stopListening}
            style={{
              padding: "10px 16px",
              background: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            🛑 Stop Voice
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
