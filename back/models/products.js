import mongoose from "mongoose";
import mongoosePagination from 'mongoose-paginate-v2'
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

// productSchema.methods.setImgUrl = function setImgUrl (filename) {
//   this.imgUrl = 'https:localhost:3000/public' + filename
// }
productSchema.plugin(mongoosePagination)

const Product = mongoose.model("Product", productSchema);

export default Product;
