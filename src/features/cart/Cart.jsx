import { Link } from 'react-router-dom';

const fakeCart = [
  {
    burgerId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    burgerId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    burgerId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order burgers</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
