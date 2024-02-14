import {
  ErrorResponse,
  successResponse,
  successResponseWithData,
} from "../../helpers/apiResponse.js";
import productModel from "../../models/Product/product.model.js";

export const Createproduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;

    const checkDuplicateName = await productModel.findOne({ name });

    if (checkDuplicateName) {
      return ErrorResponse(res, "Product with same name  already exists");
    }

    const product = await new productModel({
      name,
      description,
      price,
      stock,
      category,
    }).save();
    return successResponseWithData(res, "Product Created Sucessfully", product);
  } catch (error) {}
};

export const GetAllproduct = async (req, res) => {
  try {
    const allProducts = await productModel.find({}).sort({ createdAt: -1 });

    return successResponse(res, allProducts);
  } catch (error) {
    console.log(error);
    return ErrorResponse(res, "Error searching for Products: " + error.message);
  }
};

export const GetallCategory = async (req, res) => {
  try {
    //distinct is use for unique
    const allCategory = await productModel.distinct("category");
    console.log(allCategory);
    return successResponse(res, allCategory);
  } catch (error) {
    console.log(error);
    return ErrorResponse(res, "Error searching for Category: " + error.message);
  }
};
export const GetSingleproductDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findById(id);

    if (!product) {
      return ErrorResponse(res, "Product not found");
    }

    return successResponse(res, product);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const { name, price, description, stock, category } = req.body;

    const product = await productModel.findByIdAndUpdate(
      id,

      { name, price, description, stock, category },
      { new: true }
    );
    if (!product) {
      return ErrorResponse(res, "Product Not Found");
    }

    return successResponseWithData(
      res,
      "Product successfully updated",
      product
    );
  } catch (error) {
    console.log(error);
    return ErrorResponse(res, "Product not updated: " + error.message);
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return ErrorResponse(res, "Product not found");
    }

    return successResponse(res, product);
  } catch (error) {
    console.log(error);
  }
};

export const SearchProduct = async (req, res) => {};
