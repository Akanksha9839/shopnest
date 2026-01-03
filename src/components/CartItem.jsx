const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
