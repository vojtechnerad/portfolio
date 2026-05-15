interface SkillItemProps {
  label: string;
  level: number;
  accent: "dev" | "design";
}

function getAccentClasses(accent: SkillItemProps["accent"]) {
  if (accent === "dev") {
    return {
      bar: "bg-accent-dev",
    };
  }

  return {
    bar: "bg-accent-design",
  };
}

export default function SkillItem({ label, level, accent }: SkillItemProps) {
  const classes = getAccentClasses(accent);

  return (
    <li className="rounded-xl px-4 py-1">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-primary">{label}</span>
      </div>

      <div className="mt-3 h-2.5 overflow-hidden rounded-full border border-border/80 bg-border/80">
        <div
          className={`h-full rounded-full ${classes.bar}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </li>
  );
}