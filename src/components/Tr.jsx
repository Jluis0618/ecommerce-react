
import '../styles/Tr.css';


function Tr({img, name, category, description, price, handleDelete, handleUpdate }) {
    return (
      <tr>
          <td><img src={img} className='td-imagen'/></td>
          <td>{name}</td>
          <td>{category}</td>
          <td>{description}</td>
          <td>${price}</td>
          <td>
              <button className='boton-edit' onClick={handleUpdate}>
                  <ion-icon name="create-outline"></ion-icon>
              </button>
          </td>
          <td>
              <button className='boton-delete' onClick={handleDelete}>
                  <ion-icon name="trash-outline"></ion-icon>
              </button>
          </td>
      </tr>
    );
}

export default Tr;