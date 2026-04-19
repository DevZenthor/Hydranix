import Background from "./components/Background";

export default function App() {
  return (
    <>
      <Background />

      <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
        <img
          src="https://via.placeholder.com/140"
          alt="profile"
          className="rounded-circle mb-4 border border-danger border-3"
          width="140"
          height="140"
        />

        <h1 className="fw-bold display-4">PseudoPlayer</h1>

        <p className="mb-1 text-secondary">Managed by ManagerName</p>
        <p className="mb-4 text-secondary">Team: TeamName</p>

        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <a href="#" className="btn btn-danger px-4">
            Twitch
          </a>

          <a href="#" className="btn btn-light px-4">
            Twitter
          </a>

          <a href="#" className="btn btn-outline-danger px-4">
            Tracker
          </a>
        </div>
      </div>
    </>
  );
}