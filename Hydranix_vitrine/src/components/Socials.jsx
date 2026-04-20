import { FaXTwitter, FaTwitch } from "react-icons/fa6";
import { HiChartBar } from "react-icons/hi2";

export default function Socials() {
  return (
    <section className="socials">
      <div className="socials-container">

        <a
          href="https://x.com/HYDRANIX_T"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <FaXTwitter />
          <span>Twitter</span>
        </a>

        <a
          href="https://www.twitch.tv/hydranixfn"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <FaTwitch />
          <span>Twitch</span>
        </a>

        <a
          href="https://fortnitetracker.com/profile/all/Rz%20Hydranix/events"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <HiChartBar />
          <span>Tracker</span>
        </a>

      </div>
    </section>
  );
}