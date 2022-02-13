export function Stat({ title, value, Icon }) {
  return (
    <div className="stat">
      <div className="stat-figure text-secondary">
        <Icon className="text-3xl md:text-5xl" />
      </div>
      <div className="stat-title pr-5">{title}</div>
      <div className="stat-value pr-5 text-3xl md:text-4xl">{value}</div>
    </div>
  );
}
