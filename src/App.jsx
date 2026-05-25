import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import './index.css';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      {/* El resto de secciones irán aquí debajo. Ejemplo: <Footer />*/
      }

    </>
  )
}

export default App
