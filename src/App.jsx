import './App.css'
import ListadoPeliculas from './Components/ListadoPeliculas/ListadoPeliculas';
import ValoracionPeliculas from './Components/ValoracionPeliculas/ValoracionPeliculas'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListadoPeliculas />} />
        <Route path="/listadoPeliculas" element={<ValoracionPeliculas />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
