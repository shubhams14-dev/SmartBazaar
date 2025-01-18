import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div id="shop" className="py-10">
      <div className="text-center mt-12 mb-6">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of high-quality products. From everyday essentials to unique finds, we've got something for everyone.
          </p>
        </div>
      <div  className=" max-w-screen-xl mx-auto flex justify-center flex-wrap lg:grid grid-cols-4 gap-10 py-10 ">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
