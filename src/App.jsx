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

    </>
  )
}

export default App
