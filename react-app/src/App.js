import Axios from 'axios';
import './App.css';

function App() {

  const getAnime = () => {
    Axios.get('https://ghibliapi.herokuapp.com/films').then(
      (response) => {
        console.log(response);
    });
  };


  return (
    <div className="App">
    Fetching API calls
    <button onClick={getAnime}>Get Film</button>
    </div>
  );
}

export default App;
