import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category, description } = product;
    return (
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src={image} alt={title} />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <h5 class="card-title">{category}</h5>
              <p class="card-text">{description}</p>
            </div>
            <div>
              <Link to={`/product/${id}`} className="btn btn-primary">
                Detail
              </Link>
              <button className="btn btn-success">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  console.log(products);
  return <>{renderList}</>;
};

export default ProductComponent;
