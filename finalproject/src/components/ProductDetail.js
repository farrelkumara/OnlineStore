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
  console.log(product);

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
      history.push("/cart");
    }
  };

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img src={image} alt={title} />
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h5 class="card-title">{price}</h5>
                <button className="btn btn-success" onClick={addToCart}>
                  Add to Cart
                </button>
                <h5>PRODUCT DETAILS</h5>
                <p class="card-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
