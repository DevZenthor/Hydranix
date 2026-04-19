import hydranix from "../assets/hydranix.jpg";
import rz from "../assets/RZ.jpg";
import zenthor from "../assets/ZENTHOR.jpg";

export default function Hero() {
  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white">
      
      {/* Photo profil */}
      <img
        src={hydranix}
        alt="Hydranix"
        className="hero-profile mb-4"
      />

      {/* Pseudo */}
      <h1 className="hero-title">Hydranix</h1>

      {/* Team + Manager sur la même ligne */}
      <div className="hero-infos">
        <a
          href="https://x.com/RealityZoned"
          target="_blank"
          rel="noreferrer"
          className="hero-link"
        >
          <img src={rz} alt="Reality Zoned" />
          <span>Reality Zoned</span>
        </a>

        <a
          href="https://x.com/zenthor1480"
          target="_blank"
          rel="noreferrer"
          className="hero-link"
        >
          <img src={zenthor} alt="Zenthor" />
          <span>Zenthor</span>
        </a>
      </div>

    </section>
  );
}