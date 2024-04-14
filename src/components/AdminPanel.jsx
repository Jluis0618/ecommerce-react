import "../styles/AdminPanel.css";
import imgcamisa from "../assets/camisa-react.jpeg";
import Tr from "./Tr";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { ProductContext, ProductProvider } from "../context/ProductContext";
function AdminPanel() {

  const { products } = useContext(ProductContext)
  console.log(products)
  return (
    <>
      <NavBar></NavBar>
      <div className="body">
        <div className="table-container">
          <table className="table">
            <th>Image</th>
            <th>Product</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>

            <Tr
              img={products.image}
              name={products.name}
              category={products.category}
              description={products.description}
              price={products.price}
            />

          </table>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
