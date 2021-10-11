import Axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [film, setFilm] = useState([])

  const getAnime = () => {
    Axios.get('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49').then(
      (response) => {
        console.log(response);
        setFilm(response.data.title + '...' + response.data.description)
    });
  };

  useEffect(() => getAnime, [])

  return (
    <div className="App">
    Fetching API calls
    <button onClick={getAnime}>Get Film</button>
    {film}
    </div>
  );
}

export default App;
