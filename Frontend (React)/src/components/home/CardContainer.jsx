import HomeCard from "./HomeCard";

const CardContainer = ({ products }) => {
  return (
    <section className="py-5" id="shop">
      <h5
        className="mb-4"
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#4a3fb1",
          textAlign: "center",
          textTransform: "uppercase",
          padding: "10px 0",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
        }}
      >
        New Products
      </h5>

      <div className="container px-4 px-lg-5 mt-5">
        <div className="row justify-content-center">
          {products.map((product) => (
            <HomeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
