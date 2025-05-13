import axios from 'axios'
import { useState } from 'react'


function App() {
  const [actresses, setActresses] = useState([]);

  // creo la funzione che conterrà la chiamata ajax
  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => console.log(response.data));
  }

  return (
    <>
      <button className="btn btn-primary" onClick={fetchActresses}>stampa a console</button>
    </>
  )
}

export default App
