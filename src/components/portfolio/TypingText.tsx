import { useEffect, useState } from "react";

export function TypingText({
  words,
  className = "",
  speed = 80,
  pause = 1400,
}: {
  words: string[];
  className?: string;
  speed?: number;
  pause?: number;
}) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const t = setTimeout(
      () => {
        if (done) setDeleting(true);
        else if (cleared) {
          setDeleting(false);
          setI((v) => v + 1);
        } else {
          setText(
            deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
          );
        }
      },
      done ? pause : deleting ? speed / 1.8 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] -translate-y-[-0.05em] animate-pulse bg-current align-middle" />
    </span>
  );
}
