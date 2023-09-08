import React, { useEffect } from "react";
import { useCart } from "react-use-cart";
import styles from "./Cart.module.css";
import { toast } from "react-toastify";
import Plamen from "../Plamen/Plamen";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, updateItemQuantity, cartTotal, setItems } =
    useCart();

  const location = useNavigate();

  const chechkUser = () => {
    if (localStorage.getItem("NewUser") || localStorage.getItem("Admin")) {
      setItems([]);
    } else {
      toast.error("create an account");
      location("/register");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {items.length === 0 ? (
        <section
          className={styles.theme}
          style={{ paddingTop: "200px", height: "62vh" }}
        >
          <h1>Your cart is empyt</h1>
        </section>
      ) : (
        <section className={styles.theme}>
          <div className={styles.cartsec}>
            <div className="container mt-5">
              <table className="table">
                <thead>
                  <tr>
                    {/* <th scope="col">Id</th> */}
                    <th scope="col"> Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Catageory</th>
                    <th scope="col">Price</th>
                    <th scope="col"> Quantity</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => {
                    return (
                      <>
                        <tr className={styles.cartsize}>
                          {/* <th scope="row">{item.id}</th> */}
                          <td>
                            <img
                              src={item.image}
                              alt=""
                              style={{ width: "150px" }}
                            />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.catageory}</td>
                          <td>{item.price * item.quantity} €</td>
                          <td>
                            <button
                              className={styles.btn}
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            {item.quantity}
                            <button
                              className={styles.btn}
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                removeItem(item.id);
                                toast.error("Product removed from cart");
                              }}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                <div className={styles.bynow}>
                  <h1>Cart Total : {cartTotal} €</h1>
                  <button className="btn btn-success" onClick={chechkUser}>
                    Buy Now
                  </button>
                </div>
              </table>
            </div>
          </div>
          <Plamen />
          
        </section>
      )}
    </>
  );
};

export default Cart;
