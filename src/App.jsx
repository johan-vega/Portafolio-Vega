import Navbar from './components/Navbar/Navbar';
import './App.css';
import './index.css';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      {/* El resto de secciones irán aquí debajo. Ejemplo: <Footer />*/
      }

    </>
  )
}

export default App
