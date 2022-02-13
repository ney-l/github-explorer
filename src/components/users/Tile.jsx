export function Tile({ title, value, externalLink }) {
  if (!value) return null;

  return (
    <div className="stat">
      <div className="stat-title text-md">{title}</div>
      <div className="stat-value text-lg">
        {externalLink ? (
          <a href={externalLink} target="_blank" rel="noreferrer">
            {value}
          </a>
        ) : (
          value
        )}
      </div>
    </div>
  );
}
