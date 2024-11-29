import { BASE_URL } from "../../api";

const CartItem = ({item}) => {
  return (
    <div
      className="cart-item d-flex align-items-center mb-3 p-3"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={`${BASE_URL}${item.product.image}`}
        alt="Product"
        className="img-fluid"
        style={{
          width: "85px",
          height: "85px",
          objectFit: "cover",
          borderRadius: "8px",
          border: "2px solid #f0f0f0",
        }}
      />
      <div className="ms-3 flex-grow-1">
        <h5
          className="mb-1"
          style={{ fontSize: "1rem", fontWeight: "600", color: "#333" }}
        >
          {item.product.name}
        </h5>
        <p
          className="mb-0"
          style={{
            color: "#888",
            fontSize: "0.9rem",
            fontWeight: "500",
            padding: "2px 8px",
            backgroundColor: "#f8f8f8",
            borderRadius: "5px",
            display: "inline-block",
          }}
        >
          {`$${item.product.price}`}
        </p>
      </div>
      <div className="d-flex align-items-center">
        <input
          type="number"
          className="form-control me-3"
          defaultValue="1"
          style={{
            width: "70px",
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <button
          className="btn btn-primary btn-sm"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.85rem",
            padding: "5px 10px",
            marginRight: "10px",
          }}
        >
          <i className="bi bi-arrow-repeat" style={{ fontSize: "1rem" }}></i>{" "}
          Update Quantity
        </button>

        <button
          className="btn btn-danger btn-sm"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.85rem",
            padding: "5px 10px",
          }}
        >
          <i className="bi bi-trash" style={{ fontSize: "1rem" }}></i> Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
