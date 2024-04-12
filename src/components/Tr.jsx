import '../styles/Tr.css';

function Tr({img, name, category, description, price, state}) {
    return (
      <tr>
          <td><img src={img} className='td-imagen'/></td>
          <td>{name}</td>
          <td>{category}</td>
          <td>{description}</td>
          <td>{price}</td>
          <td>{state}</td>
          <td>
              <button className='boton-edit'>
                  <ion-icon name="create-outline"></ion-icon>
              </button>
          </td>
          <td>
              <button className='boton-delete'>
                  <ion-icon name="trash-outline"></ion-icon>
              </button>
          </td>
      </tr>
    );
}

export default Tr;