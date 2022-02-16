export function ProfileImage({ name, avatarUrl }) {
  return (
    <div className="custom-card-image mb-6 md:mb-0">
      <div className="rounded-lg shadow-xl card image-full">
        <figure>
          <img src={avatarUrl} alt="User Profile" />
        </figure>
        <div className="card-body justify-end">
          <h2 className="card-title mb-0">{name}</h2>
        </div>
      </div>
    </div>
  );
}
