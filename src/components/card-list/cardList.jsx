import Card from '../card/card';
import './cardList.scss'

function CardList({cards}) {
    return <div className="card-list">
        <div className="container">
            { cards.map((card) => {
                return <Card img = {card.img}
                             name = {card.name}
                             actor = {card.actor}
                             gender = {card.gender}
                             house = {card.house}
                             wandcore = {card.wandcore}
                             alive = {card.alive} />
            }) }
        </div>
    </div>;
}

export default CardList;