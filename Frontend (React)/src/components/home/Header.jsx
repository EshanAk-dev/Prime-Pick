const Header = () => {
  return (
    <header
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #6050DC, #FF5733)",
        color: "white",
        position: "relative",
      }}
    >
      <div
        className="container px-4 px-lg-5 my-5 pt-5"
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: "2",
        }}
      >
        <div className="text-white">
          <h1
            className="display-4 fw-bold"
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              fontSize: "calc(1.5rem + 1vw)",
            }}
          >
            Step Into the World of Style
          </h1>
          <p
            className="lead fw-normal text-white-75 mb-4"
            style={{
              fontSize: "calc(1rem + 0.3vw)",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            Find your perfect look with our trendsetting collection.
          </p>

          <a
            href="#shop"
            className="btn btn-light btn-lg rounded-pill px-4 py-2"
            style={{
              background: "linear-gradient(to right, #FF5733, #FF8C33)",
              border: "none",
              color: "white",
              fontWeight: "bold",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Optional Background Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
      ></div>
    </header>
  );
};

export default Header;
