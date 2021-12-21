import "./productCard.css";

export default function ProductCard(props) {
  const { image, title, price, category } = props.product

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-details">
        <p>{title}</p>
        <p>$ {price}</p>
        <p className="product-details-sub">{category}</p>
      </div>
    </div>
  );
}