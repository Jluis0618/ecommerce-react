import '../styles/Header.css';

function Header({ value }) {
    return (
        <div className='header-container'>
            <h1>{value}</h1>
        </div>
    );
}

export default Header;