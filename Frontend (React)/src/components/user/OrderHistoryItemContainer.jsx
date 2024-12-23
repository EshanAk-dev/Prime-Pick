import OrderHistoryItem from "./OrderHistoryItem";

const OrderHistoryItemContainer = () => {
  return (
    <div
      className="row"
      style={{
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <div className="col-md-12">
        <div
          className="card"
          style={{ width: "100%", maxHeight: "320px", overflow: "auto" }}
        >
          <div
            className="card-header"
            style={{
              backgroundColor: "#6050DC",
              color: "white",
              position: "sticky",
              top: "0",
              zIndex: "1",
              textAlign: "center",
            }}
          >
            <h5>Order History</h5>
          </div>

          <OrderHistoryItem />
          <OrderHistoryItem />
          <OrderHistoryItem />
          <OrderHistoryItem />
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryItemContainer;
