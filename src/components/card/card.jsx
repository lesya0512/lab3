import './card.scss'

function Card({img, name, actor, gender, school, wandcore, alive}) {
    return <div className="card">
        <div className="image">
            <img src={img} alt="" />
        </div>
        <div className="info">
            <p className="name">Name: {name}</p>
            <p className="actor">Actor: {actor}</p>
            <p className="gender">Gender: {gender}</p>
            <p className="house">House : {school}</p>
            <p className="wandcore">Wandcore: {wandcore}</p>
            <p className="alive">Alive: {alive ? 'yes' : 'no'}</p>
        </div>
    </div>;
}

export default Card;