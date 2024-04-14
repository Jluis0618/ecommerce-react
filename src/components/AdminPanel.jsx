import "../styles/AdminPanel.css";
import imgcamisa from "../assets/camisa-react.jpeg";
import Tr from "./Tr";
import NavBar from "../components/NavBar";
function AdminPanel() {
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
              img={imgcamisa}
              name="Camisa React"
              category="Camisas"
              description="Camisaaa negra con el logo de react Medium"
              price="15.99$"
            />
            <Tr
              img={imgcamisa}
              name="Camisa React"
              category="Camisas"
              description="Camisaaa negra con el logo de react Medium"
              price="15.99$"
            />
            <Tr
              img={imgcamisa}
              name="Camisa React"
              category="Camisas"
              description="Camisaaa negra con el logo de react Medium"
              price="15.99$"
            />
            <Tr
              img={imgcamisa}
              name="Camisa React"
              category="Camisas"
              description="Camisaaa negra con el logo de react Medium"
              price="15.99$"
            />
            <Tr
              img={imgcamisa}
              name="Camisa React"
              category="Camisas"
              description="Camisaaa negra con el logo de react Medium"
              price="15.99$"
            />
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
