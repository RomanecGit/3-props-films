import Film from "./Film";

import React from 'react';

function FilmList({films}) {
    return (
        <React.Fragment>
            {films.map((film, i) =>
                <Film key={i} name={film.name} price={film.price} img={film.img} stars={film.stars}/>
            )}
        </React.Fragment>
    )
}

export default FilmList