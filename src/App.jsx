import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {
  const [actresses, setActresses] = useState([]);

  // creo la funzione che conterrà la chiamata ajax
  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => setActresses(response.data));
  }
  useEffect(fetchActresses, []);

  return (
    <>
      <div className="container-fluid">

        <div className='d-flex flex-wrap'>
          {actresses.map((actress) => {
            return (
              <div key={actress.id} className="card m-2" style={{ width: '18rem' }}>
                <img src={actress.image} className="card-img-top" alt="img actress" />
                <div className="card-body">
                  <h5 className="card-title">{actress.name}</h5>
                  <p className="card-text">
                    {actress.biography}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{actress.nationality}</li>
                  <li className="list-group-item">{actress.birth_year}</li>
                  <li className="list-group-item">{actress.awards}</li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default App
