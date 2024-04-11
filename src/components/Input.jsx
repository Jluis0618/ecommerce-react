import '../styles/Input.css';


function Input({ id, name, placeholder, img, type, alt}) {
    return (
            <div className='input'>
                {/* <div className='input-image'> */}
                <img
                    src={img}
                    alt={alt}
                     />
                <input id={id} name={name} placeholder={placeholder} type={type} />
            </div>
    );
}

export default Input;