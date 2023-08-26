import React from 'react'
import { useState, useEffect } from 'react';

const ListadoPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Función para obtener las películas desde la base de datos
  const obtenerPeliculasDesdeDB = async () => {
    try {
      const response = await fetch('http://localhost:8090/api/v1/peliculas/listar');
      const data = await response.json();
      setPeliculas(data); // Actualiza el estado con los datos de películas
    } catch (error) {
      console.error('Error al obtener las películas:', error);
    }
  };

  useEffect(() => {
    obtenerPeliculasDesdeDB(); // Llama a la función al montar el componente
    handleSearch();
  }, [searchTerm]);

  const handleSearch = () => {
    const results = peliculas.filter(pelicula =>
      pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Listado de Películas</h1>

        {/* Búsqueda por nombre de película */}
        <div className="row mt-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="searchInput"
              placeholder="Buscar película por nombre"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary" id="searchButton" onClick={handleSearch}>
              Buscar
            </button>
          </div>
        </div>

        {/* Listado de películas */}
        <div className="row mt-4">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Pelicula</th>
                  <th className="text-center">Genero</th>
                  <th className="text-center">Lanzamiento</th>
                  <th className="text-center">Promedio Calificación</th>
                  <th className="text-center">Accion</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map(pelicula => (
                  <tr key={pelicula.titulo}>
                    <td className="align-middle">{pelicula.titulo}</td>
                    <td className="align-middle text-center">{pelicula.genero.nombre_genero}</td>
                    <td className="align-middle text-center">{pelicula.anio_lanzamiento}</td>
                    <td className="align-middle text-center">{pelicula.promedio}</td>
                    <td className="text-center">
                      <a href="valoracion.html" className="btn btn-secondary">
                        Calificar
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListadoPeliculas