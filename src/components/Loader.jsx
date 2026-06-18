function Loader() {
  return (
    <div className="skeleton-grid">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="skeleton-card"
        >
          <div className="skeleton-image"></div>

          <div className="skeleton-line"></div>

          <div className="skeleton-line short"></div>

          <div className="skeleton-btn"></div>
        </div>
      ))}
    </div>
  );
}

export default Loader;