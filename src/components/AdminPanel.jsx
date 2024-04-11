import '../styles/AdminPanel.css';
import imgcamisa from '../assets/camisa-react.jpeg';

function AdminPanel() {
    return (
        <div className='body'>
            <div className='table-container'>
                <table className='table'>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>State</th>
                    <th>Edit</th>
                    <th>Delete</th>

                    <tr>
                        <td><img src={imgcamisa} /></td>
                        <td>Camina React</td>
                        <td>Camisas</td>
                        <td>Camisa negra con el logo de react Medium</td>
                        <td>15.99$</td>
                        <td>Disponible</td>
                        <td>
                            <button>
                                <img src='../assets/imagen-candado.png'/>
                            </button>
                        </td>
                        <td>
                            <button>
                                <img src='../assets/imagen-candado.png'/>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td><img src='../assets/camisa-react.jpeg' /></td>
                        <td>Camina React</td>
                        <td>Camisas</td>
                        <td>Camisa negra con el logo de react Medium</td>
                        <td>15.99$</td>
                        <td>Disponible</td>
                        <td>boton</td>
                        <td>boton</td>
                    </tr>

                    <tr>
                        <td><img src='../assets/camisa-react.jpeg' /></td>
                        <td>Camina React</td>
                        <td>Camisas</td>
                        <td>Camisa negra con el logo de react Medium</td>
                        <td>15.99$</td>
                        <td>Disponible</td>
                        <td>boton</td>
                        <td>boton</td>
                    </tr>

                    <tr>
                        <td><img src='../assets/camisa-react.jpeg' /></td>
                        <td>Camina React</td>
                        <td>Camisas</td>
                        <td>Camisa negra con el logo de react Medium</td>
                        <td>15.99$</td>
                        <td>Disponible</td>
                        <td>boton</td>
                        <td>boton</td>
                    </tr>

                    <tr>
                        <td><img src='../assets/camisa-react.jpeg' /></td>
                        <td>Camina React</td>
                        <td>Camisas</td>
                        <td>Camisa negra con el logo de react Medium</td>
                        <td>15.99$</td>
                        <td>Disponible</td>
                        <td>boton</td>
                        <td>boton</td>
                    </tr>
                </table>
            </div>
        </div>
        
    );
}

export default AdminPanel;