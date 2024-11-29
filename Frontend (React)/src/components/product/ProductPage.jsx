import { useParams } from "react-router-dom";
import ProductPagePlaceHolder from "./ProductPagePlaceHolder";
import RelatedProducts from "./RelatedProducts";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../api";
import api from "../../api";
import { FaCartShopping } from "react-icons/fa6";

const ProductPage = ({setNumCartItems}) => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inCart, setInCart] = useState(false);
  const cart_code = localStorage.getItem("cart_code");

  useEffect(
    function () {
      if (product.id) {
        api
          .get(
            `product_in_cart?cart_code=${cart_code}&product_id=${product.id}`
          )
          .then((res) => {
            console.log(res.data);
            setInCart(res.data.product_in_cart);
          })

          .catch((err) => {
            console.log(err.message);
          });
      }
    },
    [cart_code, product.id]
  );

  const newItem = { cart_code: cart_code, product_id: product.id };

  function add_item() {
    api
      .post("add_item/", newItem)
      .then((res) => {
        console.log(res.data);
        setInCart(true);
        setNumCartItems(curr => curr + 1)
      })

      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(
    function () {
      setLoading(true);
      api
        .get(`product_detail/${slug}`)
        .then((res) => {
          console.log(res.data);
          setProduct(res.data);
          setSimilarProducts(res.data.similar_products);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    },
    [slug]
  );

  if (loading) {
    return <ProductPagePlaceHolder />;
  }

  return (
    <div>
      <section className="py-3">
        <div className="container px-4 px-lg-4 my-5 pt-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={`${BASE_URL}${product.image}`}
                alt="product image"
                style={{
                  width: "600px",
                  height: "400px",
                  objectFit: "contain",
                  padding: "10px",
                }}
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-3 mt-2">
                {" "}
                <span style={{ color: "#6050DC", fontWeight: "bold" }}>${product.price}</span>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex">
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={add_item}
                  disabled={inCart}
                >
                  <FaCartShopping
                    style={{ fontSize: "1.3rem", marginRight: "0.5rem" }}
                  />
                  {inCart ? "Product added to cart" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={similarProducts} />
    </div>
  );
};

export default ProductPage;
