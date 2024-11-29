import HomeCard from "../home/HomeCard";

const RelatedProducts = ({ products }) => {
  return (
    <section className="py-3 bg-light">
      <div className="container px-4 px-lg-5 mt-3">
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
        Related Products
      </h5>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content">
          {products.map((product) => (
            <HomeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
