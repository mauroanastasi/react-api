import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {
  const [actresses, setActresses] = useState([]);

  // creo la funzione che conterrà la chiamata ajax
  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => console.log(response.data));
  }
  useEffect(fetchActresses, []);

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="img actress" />
        <div className="card-body">
          <h5 className="card-title">Nome</h5>
          <p className="card-text">
            Biografia
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Nazionalità</li>
          <li className="list-group-item">Anno di nascita </li>
          <li className="list-group-item">riconoscimenti</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </>
  )
}

export default App
