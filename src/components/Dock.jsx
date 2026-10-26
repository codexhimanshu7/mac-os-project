
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() =>
          setWindowsState((state) => ({ ...state, github: true }))
        }
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="GitHub" />
      </div>

      <div
        onClick={() =>
          setWindowsState((state) => ({ ...state, note: true }))
        }
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="Notes" />
      </div>

      <div
        onClick={() =>
          setWindowsState((state) => ({ ...state, resume: true }))
        }
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="Resume" />
      </div>

      {/* Google Calendar */}
      <a
        href="https://calendar.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon calender"
        aria-label="Google Calendar"
      >
        <img src="/doc-icons/calender.svg" alt="Calendar" />
      </a>

      <div
        onClick={() =>
          setWindowsState((state) => ({ ...state, spotify: true }))
        }
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="Spotify" />
      </div>

      {/* Gmail */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshukumar1531b@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="icon mail"
        aria-label="Gmail"
      >
        <img src="/doc-icons/mail.svg" alt="Mail" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shibham-a4a963313/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon link"
        aria-label="LinkedIn"
      >
        <img src="/doc-icons/link.svg" alt="LinkedIn" />
      </a>

      <div
        onClick={() =>
          setWindowsState((state) => ({ ...state, cli: true }))
        }
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="Terminal" />
      </div>
    </footer>
  );
};

export default Dock;




