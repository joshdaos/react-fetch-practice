import Axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [film, setFilm] = useState('')

  const getAnime = () => {
    Axios.get('https://ghibliapi.herokuapp.com/films').then(
      (response) => {
        console.log(response);
        setFilm(response.data.setup + '...' + response.data.id)
    });
  };


  return (
    <div className="App">
    Fetching API calls
    <button onClick={getAnime}>Get Film</button>
    {film}
    </div>
  );
}

export default App;
