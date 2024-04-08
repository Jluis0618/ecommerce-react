import mongoose from "mongoose";

const host = "127.0.0.1";
const port = "27017";
const dbName = "e-commerce";

const connectionDb = () => {
  try {
    mongoose.connect(`mongodb+srv://carlospimentelandujar:jFK1L8jlMDfKjvNR@e-commerce.muroycd.mongodb.net/`);
    console.log("Connection succesful");
  } catch (error) {
    console.log("Conection error: ", error.message);
  }
};

export default connectionDb;
