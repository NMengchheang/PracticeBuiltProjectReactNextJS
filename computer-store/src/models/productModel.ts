// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a product item using TypeScript interfaces
export interface Product {
    productName: string;
    description: string;
    price: string;
    category: string;
    color: string;
    screenSize: string;
    publicId: string
}

// Merging productTodo interface with mongoose's Document interface to create 
// a new interface that represents a product document in MongoDB
export interface ProductDocument extends Product, Document {
    createdAt: Date;
    updatedAt: Date;
}

// Defining a mongoose schema for the product document, specifying the types 
// and constraints
const prodcutSchema = new mongoose.Schema<ProductDocument>(
    {
        productName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        color: { 
            type: String
        },
        screenSize: { 
            type: String 
        },
        publicId: {
            type: String
        }   // Add this field if needed
    },
    {
      // Automatically add 'createdAt' and 'updatedAt' fields to the document
      timestamps: true,
    }
);

// Creating a mongoose model for the product document
const Product: Model<ProductDocument> =
  mongoose.models?.Product || mongoose.model("Product", prodcutSchema);

export default Product;