export function rating(rating) {
  const fullStar = (
    <img src="/icons/full-star.png" alt="full star" className="m-5" />
  );
  const halfStar = (
    <img src="/icons/half-star.png" alt="half star" className="m-5" />
  );
  const emptyStar = (
    <img src="/icons/empty-star.png" alt="empty star" className="m-5" />
  );

  if (rating === 5) {
    return (
      <>
        {fullStar}
        {fullStar}
        {fullStar}
        {fullStar}
        {fullStar}
      </>
    );
  }
  if (rating > 4 && rating < 5) {
    return (
      <>
        {fullStar}
        {fullStar}
        {fullStar}
        {fullStar}
        {halfStar}
      </>
    );
  }
  if (rating === 4) {
    return (
      <>
        {fullStar}
        {fullStar}
        {fullStar}
        {fullStar}
        {emptyStar}
      </>
    );
  }
  if (rating === 3) {
    return (
      <>
        {fullStar}
        {fullStar}
        {fullStar}
        {emptyStar}
        {emptyStar}
      </>
    );
  }
  if (rating === 2) {
    return (
      <>
        {fullStar}
        {fullStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
      </>
    );
  }
  if (rating === 0) {
    return (
      <>
        {emptyStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
      </>
    );
  }
}
