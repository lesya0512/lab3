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
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState(cards);

 

  useEffect(() => {
    axios.get('http://localhost:3001/schools').then((data) => {
      setSchool(data.data)
    })

    axios.get('http://localhost:3001/heroes').then((data) => {
      setCards(data.data)
      setFilteredCards(data.data)
    })
  }, [])

  return (
    <div className="App">
      <Header schools={schools} setCards={setCards} cards={cards} filteredCards={filteredCards} setFilteredCards={setFilteredCards}/>
      <hr />
      <CardList cards={filteredCards}/>
    </div>
  );
}

export default App;
