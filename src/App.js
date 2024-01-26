import { useEffect, useState } from 'react';
import './App.css';
import Hermiona from './assets/img/card-img1.png' 
import Malfoy from './assets/img/Rectangle371.png' 
import Potter from './assets/img/potter.jpg' 
import CardList from './components/card-list/cardList';
import Header from './components/header/header';
import axios from 'axios';

function App() {

  const [schools, setSchool] = useState([
  ])

  const [cards, setCards] = useState([
  ]);

  useEffect(() => {
    axios.get('http://localhost:3001/schools').then((data) => {
      setSchool(data.data)
    })

    axios.get('http://localhost:3001/heroes').then((data) => {
      setCards(data.data)
    })
  }, [])

  return (
    <div className="App">
      <Header schools={schools}/>
      <hr />
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
