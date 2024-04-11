import mongoose from "mongoose";


const connectionDb = () => {
  try {
    mongoose.connect(`mongodb+srv://carlos:TyZqeYyHIlMgRC73@cluster0.icbz5l7.mongodb.net/Ecommerce`);
    console.log("Connection succesful");
  } catch (error) {
    console.log("Conection error: ", error.message);
  }
};

export default connectionDb;
