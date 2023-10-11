function Banner() {
  return (
    <div className="hero-banner display-flex-column justify-content-between">
      <div>
        <div className="hero-banner-heading m-t-30">Welcome to</div>
        <h1 className="hero-banner-title m-t-30"> TrendTrove</h1>
        <p className="hero-banner-text m-t-20">The trendy fashion store</p>
      </div>
      <div className="hero-banner-line"></div>
    </div>
  );
}

export function Home() {
  return (
    <div>
      <Banner />
      Hi
    </div>
  );
}
