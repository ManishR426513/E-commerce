import React, { useEffect, useState } from "react";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";
import { authAxios } from "../config/config";

const Home = () => {
  const [products, setproducts] = useState([]);

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

  const addTocart=async(item)=>{

    

  }

  const addTowishlist=()=>{
    
  }

  useEffect(() => {
    fetchAllproducts();
  }, []);

  return (
    <div class="flex items-center bg-indigo-100 min-h-screen">
      <div class="container ml-auto mr-auto flex flex-wrap items-start">
        <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
          <h1 class="text-3xl lg:text-4xl text-gray-700 font-extrabold"></h1>
        </div>

        {products &&
          products.map((item) => (
            <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
              <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure class="mb-2">
                  <img
                    //  src={item.images[0] || item.images[1]}
                    alt=""
                    class="h-64 ml-auto mr-auto"
                  />
                </figure>
                <div class="rounded-lg p-4 bg-gray-600 flex flex-col">
                  <div>
                    <h5 class="text-white text-2xl font-bold leading-none">
                      {item?.name}
                    </h5>
                    <span class="text-xs text-gray-400 leading-none">
                      {item.description.substring(0, 45)}
                    </span>
                  </div>
                  <div class="flex items-center">
                    <div class="text-lg text-white font-light">
                      ${item.price}
                    </div>
                    <div class="text-lg text-white font-light  ml-10">
                      {item.ratings}{" "}
                    </div>

                    <div class="text-lg text-white font-light  ml-1">
                      <StarIcon height={20} width={20} color="#faaf00" />
                    </div>

                    <button
                      href="javascript:;"
                      class="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                      // onClick={()=>handlecart(item)}
                    >
                      <ShoppingCartIcon
                         
                        
                        width="24"
                        height="24"
                        className="ml-2 mt-2"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
