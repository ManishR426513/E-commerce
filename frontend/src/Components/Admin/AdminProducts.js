import React, { useEffect, useState } from "react";
import { authAxios } from "../../config/config";
import ProductModel from "./Product/ProductModel";
import { toast } from "react-toastify";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcRating } from "react-icons/fc";

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

  console.log(products);

  return (
    <div>
      <button className="btn" onClick={() => addProduct()}>
        Add Product
      </button>

      <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products &&
          products.length > 0 &&
          products.map((item) => (
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src={`${process.env.REACT_APP_BASEURL}/${item.photos[0]}`}
                  // src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  class="h-80 w-72 object-cover rounded-t-xl"
                />
                <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">
                    {item.category}
                  </span>
                  <p class="text-lg font-bold text-black truncate block capitalize">
                    {item.name}
                  </p>
                  <div class="flex items-center justify-between">
                    <p class="text-lg font-semibold text-black cursor-auto my-3 inline-block">
                      {item.price}$
                    </p>
                    <p class="text-lg font-semibold text-black cursor-auto my-3 inline-block">
                      {item.ratings} <FcRating color="yellow"  className="inline-block"/>
                    </p>
                    <div class="text-lg font-semibold text-black cursor-auto my-3 inline-block">
                      Available {item.stock}
                    </div>
                  </div>
                </div>

                <div className="mb-2 text-center font-medium">
                  {item.description}
                </div>
              </a>
            </div>
          ))}
      </section>
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
