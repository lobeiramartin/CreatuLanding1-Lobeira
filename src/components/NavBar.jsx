import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <header className="w-100 transparent-header py-5 shadow-sm text-center">
    <h1 className="jacquard-24-regular m-0" style={{ fontSize: '4em' }}>
        InkSumos
    </h1>
    <nav className="mt-4 d-flex justify-content-center gap-4 flex-wrap">
        <a className="nav-link" href="#">Inicio</a>
        <a className="nav-link" href="#">Productos</a>
        <a className="nav-link" href="#">Contacto</a>
        <CartWidget />
    </nav>
    </header>
  );
};

export default NavBar;


