import mongoose from "mongoose";


const connectionDb = () => {
  try {
    mongoose.connect(`mongodb+srv://carlospimentelandujar:jFK1L8jlMDfKjvNR@e-commerce.muroycd.mongodb.net/`);
    console.log("Connection succesful");
  } catch (error) {
    console.log("Conection error: ", error.message);
  }
};

export default connectionDb;
