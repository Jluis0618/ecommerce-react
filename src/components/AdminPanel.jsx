import "../styles/AdminPanel.css";
import Tr from "./Tr";
import NavBar from "../components/NavBar";
import { useContext, useState } from "react";
import { ProductContext, ProductProvider } from "../context/ProductContext";
import Modal from "react-modal";
import { uploadFile } from "../../back/firebase/config";
import Swal from "sweetalert2";
function AdminPanel() {
  const {
    products,
    removeProductFromAdminPanel,
    nextPage,
    prevPage,
    setProducts,
  } = useContext(ProductContext);

  const [ModalState, setModalState] = useState(false);
  const [ModalStateUpdate, setModalStateUpdate] = useState(false);

  const [file, setFile] = useState(null);
  const [fileUpdate, setFileUpdate] = useState(null);

  const [productToUpdate, setProductToUpdate] = useState(null);

  const [newProductData, setNewProductData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: file,
  });

  const [newProductDataUpdate, setNewProductDataUpdate] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: fileUpdate,
  });

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const imgURL = await uploadFile(file);
      setNewProductData({ ...newProductData, image: imgURL });
      console.log(setNewProductData);
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductData),
      });
      if (response.ok) {
        setModalState(false);
        Swal.fire({
            title: "Agregado correctamente",
            text: "El producto ha sido agregado correctamente",
            icon: "success",
            confirmButtonText: "Ok",
          })
      } else {
        console.error("Error al agregar el producto");
      }
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  const handleDelete = (productId) => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado!",
            text: "El producto ha sido eliminado del carrito",
            icon: "success"
          });
          removeProductFromAdminPanel(productId);
    setProducts(products.filter((product) => product._id !== productId));
        }
      });
    
  };

  // const handleUpdate = (productId) => {
  //   updateProduct(productId);
  // };

  const setIdUrl = (id, product) => {
    setModalStateUpdate(true);
    const url = new URL(window.location.href);
    url.searchParams.set("id", id);
    window.history.pushState({}, "", url);

    setProductToUpdate(product);
  };

  const updateProduct = async (e, productId) => {
    e.preventDefault();
    try {
      const newImgURL = await uploadFile(fileUpdate);
      console.log(newImgURL);
      setNewProductDataUpdate({ ...newProductDataUpdate, image: newImgURL });

      const updatedProduct = { ...newProductDataUpdate, image: newImgURL };

      const response = await fetch(
        `http://localhost:3000/api/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );
      if (response.ok) {
        setModalStateUpdate(false);
        setProducts(
          products.map((product) =>
            product._id === productId ? updatedProduct : product
          )
        );
      } else {
        console.error("Error al actualizar producto");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    nextPage();
  };
  const handlePrevPage = () => {
    prevPage();
  };

  const handleChange = (e) => {
    setNewProductData({ ...newProductData, [e.target.name]: e.target.value });
  };

  const handleChangeUpdate = (e) => {
    setNewProductDataUpdate({
      ...newProductDataUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const urlParams = new URLSearchParams(window.location.search);
  const idParams = urlParams.get("id");

  const rol = localStorage.getItem("rol");

  if(rol == "admin"){
    return (
        <>
          <NavBar></NavBar>
          <div className="body-admin-panel">
            <div className="button-container">
              <button
                className="new-product-button"
                onClick={() => setModalState(true)}
              >
                Añadir Producto
              </button>
            </div>
            <div className="table-container">
              <table className="table">
                <thead>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </thead>
                {products.map((product) => {
                  return (
                    <tr key={product._id}>
                      <td>
                        <img src={product.image} className="td-imagen" />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.description}</td>
                      <td>${product.price}</td>
                      <td>
                        <button
                          className="boton-edit"
                          onClick={() => setIdUrl(product._id, product)}
                        >
                          <ion-icon name="create-outline"></ion-icon>
                        </button>
                      </td>
                      <td>
                        <button
                          className="boton-delete"
                          onClick={() => handleDelete(product._id)}
                        >
                          <ion-icon name="trash-outline"></ion-icon>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="container-pagination-butttons">
              <button
                type="button"
                className="pagination-button"
                onClick={() => handlePrevPage()}
              >
                Anterior
              </button>
              <button
                type="button"
                className="pagination-button"
                onClick={() => handleNextPage()}
              >
                Siguiente
              </button>
            </div>
          </div>
          <Modal
            isOpen={ModalState}
            contentLabel="Agregar Producto"
            onRequestClose={() => setModalState(false)}
            ariaHideApp={false}
            className="custom-modal modal-add-product"
            overlayClassName="custom-overlay"
          >
            <form className="add-products-modal">
              <div className="content-input-img">
                <div className="inputs-modal">
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="name"
                    placeholder="Nombre"
                    required
                  />
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="description"
                    placeholder="Descripcion"
                    required
                  />
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="price"
                    placeholder="Precio"
                    required
                  />
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="category"
                    placeholder="Categoria"
                    required
                  />
                  <input
                    type="file"
                    id="file-img-input"
                    name="image"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                  />
                </div>
                {/* <div className="upload-image">
                {file && (
                  <div className="img-uploaded">
                    <img src={URL.createObjectURL(file) || "https://picsum.photos/700/400?random"} alt="imagen" />
                  </div>
                )}
               
              </div> */}
              </div>
            </form>
            <button
              className="new-product-button-modal"
              onClick={(e) => addProduct(e)}
            >
              Agregar Producto
            </button>
          </Modal>
    
          {/* Modal para actualizar el producto */}
    
        {
            productToUpdate && (
                 <Modal
            isOpen={ModalStateUpdate}
            contentLabel="Agregar Producto"
            onRequestClose={() => setModalStateUpdate(false)}
            ariaHideApp={false}
            className="custom-modal"
            overlayClassName="custom-overlay"
          >
            <form className="add-products-modal">
              <div className="content-input-img">
                <div className="inputs-modal">
                  <input
                    type="text"
                    onChange={(e) => handleChangeUpdate(e)}
                    name="name"
                    placeholder={productToUpdate.name || ""}
                    required
                  />
                  <input
                    type="text"
                    onChange={(e) => handleChangeUpdate(e)}
                    name="description"
                    placeholder={productToUpdate.description || ""}
                    required
                  />
                  <input
                    type="text"
                    onChange={(e) => handleChangeUpdate(e)}
                    name="price"
                    placeholder={productToUpdate.price|| ""}
                    required
                  />
                  <input
                    type="text"
                    onChange={(e) => handleChangeUpdate(e)}
                    name="category"
                    placeholder={productToUpdate.category ||  ""}
                    required
                  />
                  <input
                    type="file"
                    id="file-img-input"
                    name="image"
                    onChange={(e) => setFileUpdate(e.target.files[0])}
                    required
                  />
                </div>
                {/* <div className="upload-image">
                {fileUpdate && (
                  <div className="img-uploaded">
                    <img src={URL.createObjectURL(file) || "https://picsum.photos/700/400?random"} alt="imagen" />
                  </div>
                )}
               
              </div> */}
              </div>
            </form>
            <button
              className="new-product-button-modal"
              onClick={(e) => updateProduct(e, idParams)}
            >
              Actualizar Producto
            </button>
          </Modal>
            )
        }
        </>
      );
  }
    else{
        window.location.href = '/'
    }
}

export default AdminPanel;
