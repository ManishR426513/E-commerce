import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const ProductModel = ({
  productDetail,
  addProduct,
  setproductDetail,
  setshowProductModel,
}) => {
  const [formData, setformData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    stock: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleclose = () => {
    setproductDetail([]);
    setshowProductModel(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
  };

  const handleUploadFile = (e) => {
    //  console.log(e.target.files)
    const files = e.target.files;

    setformData((prev) => ({
      ...prev,
      photos: [...formData?.photos, ...Array.from(files)],
    }));

   
  };

  const handleEditUpdate = () => {};

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <form
          onSubmit={productDetail?.id ? handleEditUpdate : handleSubmit}
          className="flex min-h-full justify-center p-4 text-center items-center sm:p-0"
        >
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 modal--popupservice">
              <div className="pophead flex justify-between items-center mb-[10px]">
                {productDetail?.id == "" ? (
                  <h2 className="font-semibold text-[20px]">
                    Update your Product
                  </h2>
                ) : (
                  <h2 className="font-semibold text-[20px]">Add New Product</h2>
                )}
                <div
                  className="close cursor-pointer text-[20px]"
                  onClick={handleclose}
                >
                  <IoCloseSharp />
                </div>
              </div>

              <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div class="-mx-3 md:flex mb-6">
                  <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="company"
                    >
                      Name
                    </label>
                    <input
                      class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="name"
                      required
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                      type="text"
                      placeholder=""
                    />
                    <div>
                      {/*  <span class="text-red-500 text-xs italic">
                        Please fill out this field.
                      </span>
                      */}
                    </div>
                  </div>
                  <div class="md:w-1/2 px-3">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="category"
                    >
                      Category*
                    </label>
                    <input
                      class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="category"
                      required
                      type="text"
                      name="category"
                      onChange={handleChange}
                      value={formData.category}
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="-mx-3 md:flex mb-6">
                  <div class="md:w-full px-3">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="application-link"
                    >
                      Description*
                    </label>
                    <textarea
                      class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="application-link"
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      // placeholder="http://...."
                    />
                  </div>
                </div>
                <div class="-mx-3 md:flex mb-2">
                  <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="location"
                    >
                      Price*
                    </label>
                    <div>
                      <input
                        class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                        name="price"
                        onChange={handleChange}
                        value={formData.price}
                      />
                    </div>
                  </div>
                  <div class="md:w-1/2 px-3">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="job-type"
                    >
                      Stock*
                    </label>
                    <div>
                      <input
                        class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                        id="stock"
                        name="stock"
                        onChange={handleChange}
                        value={formData.stock}
                      />
                    </div>
                  </div>
                  {/* 
                  <div class="md:w-1/2 px-3">
                    <label
                      class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      for="department"
                    >
                      Department*
                    </label>
                    <div>
                      <input
                        class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                        id="location"
                      />
                    </div>
                  </div>
                  */}
                </div>
                <div class="-mx-3 md:flex mt-2">
                  <div class="md:w-full px-3">
                    <input
                      type="file"
                      required
                      multiple
                      onChange={handleUploadFile}
                      // class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-[10px] justify-end">
              {productDetail?.id == "" ? (
                <button
                  type="submit"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"

                  // onClick={() => handleaddCategory(CategoryName)}
                >
                  Update
                </button>
              ) : (
                <button
                  type="submit"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  // onClick={() => handleaddCategory(CategoryName)}
                >
                  Add Product
                </button>
              )}

              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                // onClick={handleclose}
                // onClick={() => setshowAddCategory(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModel;
