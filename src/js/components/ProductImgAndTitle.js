export function ProductImgAndTitle(props) {
  return (
    <>
      <img
        className="product-img product-cart-img"
        src={props.imageUrl}
        alt={props.title}
      />
      <h2 className="product-card-title m-l-10">{props.title}</h2>
    </>
  );
}
