import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const iconClass =
  "flex h-9 w-9 items-center justify-center rounded-xl text-ink-faint transition-all duration-150 hover:bg-black/[0.04] hover:text-ink";

export function Dock() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-full max-w-135 -translate-x-1/2 px-6">
      <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-3 py-2 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] backdrop-blur-xl">
        <div className="flex items-center gap-0.5">
          <a
            href="https://github.com/tomheaton/"
            target="_blank"
            rel="me external noopener noreferrer"
            aria-label="GitHub"
            className={iconClass}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tomheaton7/"
            target="_blank"
            rel="me external noopener noreferrer"
            aria-label="LinkedIn"
            className={iconClass}
          >
            <FaLinkedin />
          </a>
          <a href="mailto:tom@tomheaton.dev" aria-label="Email" className={iconClass}>
            <FaEnvelope />
          </a>
        </div>
        <a
          href="mailto:tom@tomheaton.dev"
          className="flex h-9 items-center gap-1.5 rounded-xl px-4 font-medium text-[13px] text-ink-soft no-underline transition-all duration-150 hover:bg-black/[0.04] hover:text-ink"
        >
          Let's chat
        </a>
      </div>
    </div>
  );
}
