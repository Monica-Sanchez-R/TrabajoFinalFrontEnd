import React from 'react'
import './valoracionPeliculas.css'

const valoracionPeliculas = () => {

  /*   const [nombrePelicula, setNombrePelicula] = useState('')
    const obtenerNombrePelicula = () => {
      fetch para obtener el nombre de la pelicula
    } */

  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className="container">
          <h1 className="mb-5">Valoración de Película</h1>
          <div className="row mt-4">
            <div className="col-md-6">
              <h3 className="mb-2">Detalle de la Película</h3>
              <p className="mt-1"><strong>Título:</strong> Ejemplo Película 1</p>
              <p><strong>Descripción:</strong> Descripción de la película 1</p>
              <p><strong>Año:</strong> 2022</p>
            </div>

            <div className="col-md-6">
              <h3 className="text-center mb-2">Pelicula: { } </h3>
              <form>
                <div className="container">
                  <div className="row">
                    <div className="col-6 form-group">
                      <label htmlFor="rating">Puntuación (0-5)</label>
                      <select className="form-control mt-1" id="rating" name="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="col-6 d-flex align-items-end justify-content-center">
                      <button type="submit" className="btn btn-primary">Enviar Valoración</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default valoracionPeliculas