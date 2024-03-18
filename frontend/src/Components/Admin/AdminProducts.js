import React, { useEffect, useState } from "react";
import { authAxios } from "../../config/config";
import ProductModel from "./Product/ProductModel";

const AdminProducts = () => {
  const [products, setproducts] = useState([]);
  const [showProductModel, setshowProductModel] = useState(false);
  const [productDetail, setproductDetail] = useState([]);
  const fetchAllproducts = async () => {
    await authAxios()
      .get("/product/get-all-products")
      .then((response) => {
        const resData = response.data;

        setproducts(resData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProduct = () => {
    setshowProductModel(true);
    if (showProductModel == true) {
      console.log("reached");
    }
  };




  useEffect(() => {
    fetchAllproducts();
  }, []);

  return (
    <div>
      <button className="btn" onClick={() => addProduct()}>
        Add Product
      </button>

      <div class="grid gap-x-8 gap-y-4 grid-cols-3">
        {products &&
          products.map((item) => (
            <>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-center">
                    {item.name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                  </h2>
                  <p>{item.description} </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{item.price}</div>
                    <div className="badge badge-outline">{item.rating}</div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      {showProductModel && (
        <ProductModel
        setproductDetail={setproductDetail}
          productDetail={productDetail}
          setshowProductModel={setshowProductModel}
        />
      )}
    </div>
  );
};

export default AdminProducts;
