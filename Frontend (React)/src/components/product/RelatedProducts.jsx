import HomeCard from "../home/HomeCard";

const RelatedProducts = ({ products }) => {
  return (
    <section className="py-3 bg-light">
      <div className="container px-4 px-lg-5 mt-3">
        <h4
          style={{
            textAlign: "center",
            fontSize: "1.7rem",
            fontWeight: "bold",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            marginBottom: "30px",
            textTransform: "uppercase"
          }}
        >
          Related Products
        </h4>
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
