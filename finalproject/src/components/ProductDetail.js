import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const history = useHistory();
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
<<<<<<< Updated upstream
=======
  // console.log(product);
>>>>>>> Stashed changes

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  const addToCart = () => {
    if (localStorage.getItem("login") === "false") {
      history.push("/login");
    } else {
<<<<<<< Updated upstream
      // history.push("/cart");
      let size = document.getElementById("size").value;
      let qty = document.getElementById("qty").value;
      if (size === "Select Size" || qty < 1 || qty === "e") {
        alert("Please Check Your Size or Quantity");
=======
      let qty = document.getElementById("qty").value;
      if (qty < 1 || qty === "e") {
        alert("Please Check Your Quantity");
>>>>>>> Stashed changes
      } else {
        if (localStorage.cart === undefined) {
          localStorage.cart = JSON.stringify([
            {
<<<<<<< Updated upstream
              id: productId,
              product: product,
              size: size,
              qty: qty,
=======
              id: +productId,
              product: product,
              qty: +qty,
>>>>>>> Stashed changes
            },
          ]);
          console.log(JSON.parse(localStorage.cart));
        } else {
          // localStorage.cart = {};
          let currentCart = JSON.parse(localStorage.cart);
<<<<<<< Updated upstream

          currentCart.push({
            id: productId,
            product: product,
            size: size,
            qty: qty,
          });
          // console.log(currentCart);
          localStorage.cart = JSON.stringify(currentCart);
          console.log(JSON.parse(localStorage.cart));
        }
      }
=======
          let itemCheck = currentCart.findIndex((x) => x.id == productId);
          if (itemCheck === -1) {
            currentCart.push({
              id: +productId,
              product: product,
              qty: +qty,
            });

            localStorage.cart = JSON.stringify(currentCart);
          } else {
            currentCart[itemCheck].qty =
              currentCart[itemCheck].qty + Number(qty);
            localStorage.cart = JSON.stringify(currentCart);
          }
        }
      }
      // history.push("/cart");
>>>>>>> Stashed changes
    }
  };

  return (
    <div className="p-5">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
<<<<<<< Updated upstream
        <div className="p-5">
=======
        <div>
>>>>>>> Stashed changes
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto d-none d-lg-block">
              {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg> */}
              <img
                src={image}
                alt={title}
                className="bd-placeholder-img"
                width="300"
              />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                Home / {category}
              </strong>
<<<<<<< Updated upstream
              <h3 className="mb-2">{title}</h3>
              <div className="mb-3 text-muted">${price}</div>
              <select id="size" className="form-select w-50 mb-3" required>
                <option selected disabled>
                  Select Size
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
=======
              <h3 class="mb-2">{title}</h3>
              <div class="mb-5 text-muted">${price}</div>
>>>>>>> Stashed changes
              <div className="d-flex mb-3">
                <input
                  id="qty"
                  className="form-control w-25 me-3"
                  type="number"
                  defaultValue="1"
                  required
                />
                <button className="btn btn-success btn-lg" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
<<<<<<< Updated upstream
              <h3>Product Detail</h3>
=======
              <h3>Detail</h3>
>>>>>>> Stashed changes
              <p class="card-text mb-auto">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
