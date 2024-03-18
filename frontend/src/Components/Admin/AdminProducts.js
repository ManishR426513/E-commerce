import React, { useEffect, useState } from "react";
import { authAxios } from "../../config/config";
import ProductModel from "./Product/ProductModel";
import { toast } from "react-toastify";

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

  const addProduct = async (data) => {
    console.log("d", data);
    setshowProductModel(true);
    if (showProductModel == true) {
      const formData = new FormData();
      data?.photos?.forEach((file) => {
        formData.append("photos", file);
      });
    
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("stock", data.stock);

      await authAxios()
        .post(`/product/create-product`, formData)
        .then((response) => {
          const resData = response.data;
          toast.success(resData.message);
          fetchAllproducts();
          //setproductDetail([])
          setshowProductModel(false);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
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
               
               <button >Edit Product</button>
               <button>Delete </button>

              </div>
            </>
          ))}
      </div>
      {showProductModel && (
        <ProductModel
          addProduct={addProduct}
          setproductDetail={setproductDetail}
          productDetail={productDetail}
          setshowProductModel={setshowProductModel}
        />
      )}
    </div>
  );
};

export default AdminProducts;
