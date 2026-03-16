import { useEffect, useState } from "react";

function App() {

  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  // Détecte le scroll pour effet démon
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>

      {/* NAVBAR DEMON */}
      <nav className={`navbar ${scrolled ? "demon" : ""}`}>

        <div className="logo">Hydranix</div>

        <ul>
          <li onClick={() => scrollTo("home")}>Home</li>
          <li onClick={() => scrollTo("reseaux")}>Réseaux</li>
          <li onClick={() => scrollTo("carriere")}>Carrière</li>
        </ul>

      </nav>

      {/* SECTIONS */}

      <section id="home" className="section home">
        <h1>Home</h1>
      </section>

      <section id="reseaux" className="section reseaux">
        <h1>Réseaux</h1>
      </section>

      <section id="carriere" className="section carriere">
        <h1>Carrière</h1>
      </section>

    </div>
  );
}

export default App;