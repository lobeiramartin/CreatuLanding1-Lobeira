import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a nuestra distribuidora online!" />
    </div>
  );
}

export default App;
