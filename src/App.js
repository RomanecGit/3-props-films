import './css/App.css';
import FilmList from './components/FilmList';

function App() {
    const films = [{
        name: "Трое в лодке, нищета и собаки",
        price: "750",
        img: "/img/film1.jpg",
        stars: 7, //"asd" //тут компонент не рисуется
    }, {
        name: "12 стульев",
        price: "250",
        img: "/img/film2.jpg",
        stars: 5
    }, {
        name: "Терминатор, ремикс на римейк",
        price: "400",
        img: "/img/film3.jpg",
        stars: 3
    }, ];
  return (
      <div className="container">
          <FilmList films={films}/>
      </div>
  )
}

export default App;
