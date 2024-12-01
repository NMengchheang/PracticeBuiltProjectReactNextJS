// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a computer item using TypeScript interfaces
export interface Computer {
    productName: string;
    brand: string;
    categoryComputer: string;
    price: string;
    stock: string;
    screenSize: string;
    processor: string;
    ram: string;
    storage: string;
    graphicCard: string;
    operationSystem: string;
    battery: string;
    description: string;
    publicId: string;
    signature: string;
    version: string;
}

// New PartialComputer type for updates
export type PartialComputer = Partial<Computer>;

// Merging productTodo interface with mongoose's Document interface to create 
// a new interface that represents a product document in MongoDB
export interface ComputerDocument extends Computer, Document {
    _id: string; // Define _id as a string
    createdAt: Date;
    updatedAt: Date;
}

// Defining a mongoose schema for the product document, specifying the types 
// and constraints
const prodcutSchema = new mongoose.Schema<ComputerDocument>(
    {
        productName: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        categoryComputer: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        stock: {
            type: String,
            required: true,
        },
        screenSize: {
            type: String,
            required: true,
        },
        processor: {
            type: String,
            required: true,
        },
        ram: {
            type: String,
            required: true,
        },
        storage: {
            type: String,
            required: true,
        },
        graphicCard: {
            type: String,
            required: true,
        },
        operationSystem: {
            type: String,
            required: true,
        },
        battery: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        publicId: {
            type: String,
            required: true,
        },
        signature: {
            type: String,
            required: true,
        },
        version: {
            type: String,
            required: true,
        }   // Add this field if needed
    },
    {
      // Automatically add 'createdAt' and 'updatedAt' fields to the document
      timestamps: true,
    }
);

// Creating a mongoose model for the computer document
const Computer: Model<ComputerDocument> =
  mongoose.models?.Computer || mongoose.model("Computer", prodcutSchema);

export default Computer;