import {useState} from 'react';
import Stars from './Stars';

function Film({name, price, img, stars}) {
    const [count, setCount] = useState(stars);
    return (
        <div className="film">
            <img src={img} />
            <h2 className="filmName">{name}</h2>
            <div className="buyBlock">
                <button>КУПИТЬ {price} руб.</button>
                <Stars count={count} />
            </div>
        </div>
    )
}

export default Film;