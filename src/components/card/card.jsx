import './card.scss'
import Hermiona from './../../assets/img/card-imgg.png' 

function Card() {
    return <div className="card">
        <div className="image">
            <img src={Hermiona} alt="" />
        </div>
        <div className="info">
            <p className="name">Hermione Granger</p>
            <p className="actor">Actor: Emma Watson</p>
            <p className="gender">Gender: female</p>
            <p className="house">House: Gryffindor</p>
            <p className="wandcore">Wand core: dragon heartstring</p>
            <p className="alive">Alive: yes </p>

        </div>
    </div>;
}

export default Card;