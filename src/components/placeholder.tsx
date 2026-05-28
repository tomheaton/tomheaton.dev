export function Placeholder({ domain }: { domain: string }) {
  return (
    <div
      className="flex aspect-video w-full flex-col items-center justify-center gap-2.5 text-ink-soft"
      style={{
        background:
          "radial-gradient(120% 120% at 30% 20%, rgba(102,177,147,0.16), transparent 60%), linear-gradient(135deg, #f5f5f7, #ececec)",
      }}
    >
      <span className="font-mono text-[11px] tracking-[0.04em]">{domain}</span>
    </div>
  );
}
