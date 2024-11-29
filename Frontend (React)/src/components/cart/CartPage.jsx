import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import api from "../../api";

const CartPage = () => {
  const cart_code = localStorage.getItem("cart_code");
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0.0);
  const tax = 4.0;

  useEffect(function () {
    api
      .get(`get_cart?cart_code=${cart_code}`)
      .then((res) => {
        console.log(res.data);
        setCartItems(res.data.items);
        setCartTotal(res.data.sum_total);
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (cartItems.length < 1) {
    return (
      <div
        className="d-flex justify-content-center align-items-start"
        style={{ minHeight: "85.5vh", paddingTop: "100px" }}
      >
        <div className="alert alert-primary" role="alert">
          You haven't added any item to your cart!
        </div>
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{ minHeight: "100vh", paddingTop: "100px" }}
    >
      <div
        className="container my-3"
        style={{ height: "80vh", overflow: "scroll" }}
      >
        <h5
          className="mb-4"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#6050DC",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "2px",
            padding: "10px 0",
            borderBottom: "3px solid #6050DC",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Shopping Cart
        </h5>

        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary cartTotal={cartTotal} tax={tax} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
