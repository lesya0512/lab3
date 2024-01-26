import { useState } from 'react';
import './App.css';
import Hermiona from './assets/img/card-img1.png' 
import Malfoy from './assets/img/Rectangle371.png' 
import Potter from './assets/img/potter.jpg' 
import CardList from './components/card-list/cardList';
import Header from './components/header/header';

function App() {

  const [schools, setSchool] = useState([
    {name: "гриффиндор"},
    {name: "слизерин"},
    {name: "хаффлпафф"},
    {name: "рейвенкло"},
  ])

  const [cards, setCards] = useState([
    {img: Hermiona,
     name: "Hermione Granger", 
     actor: "Emma Watson", 
     gender: "female", 
     house: "Gryffindor", 
     wandcore: "dragon heartstring", 
     alive: true},

     {img: Malfoy,
      name: "Draco Malfoy", 
      actor: "Tom Felton", 
      gender: "male", 
      house: "Slytherin", 
      wandcore: "unicorn tail-hair", 
      alive: true}, 

      {img: Potter,
        name: "Harry Potter", 
        actor: "Daniel Radcliffe", 
        gender: "male", 
        house: "Gryffindor", 
        wandcore: "unicorn tail-hair", 
        alive: true}
    ]);

  return (
    <div className="App">
      <Header schools={schools}/>
      <hr />
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
