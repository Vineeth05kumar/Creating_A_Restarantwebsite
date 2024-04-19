import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {

  const cartitem = (
    <ul>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onDontShow={props.onDontShow}>
      {cartitem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.43</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onDontShow} >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
