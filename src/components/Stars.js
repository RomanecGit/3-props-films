import Star from './Star';
import PropTypes from 'prop-types';

function Stars({count}){
    const maxStars = 5; //максимальное колво звезд у фильма

    //Если рейтинг меньше 1 или больше 5, или вообще не число, то компонент не должен иметь
    // какого-либо представления в DOM.
    //проверяю дополнительно, так как даже если валидация prop-types не прошла, компонент все равно
    //отрисуется
    if (!count || count>maxStars || typeof (count) !== "number" )
         return;

    let arrStars = [];
    for (let i = 0; i < count; i++) {
        arrStars.push(<Star key={i}/>);
    }
    return(
        <ul className="card-body-stars u-clearfix">
            {arrStars.map((item) =>
                item
            )}
        </ul>
    );
}

Stars.propTypes = {
    count: PropTypes.number,

    //так тоже работает
    //count: PropTypes.oneOf([1,2,3,4,5])

    //так нет смысла делать, такую же проверку придется делать в компоненте
    // count: function(props, propName, componentName) {
    //     if (!props[propName] || props[propName]>5 || typeof (props[propName]) !== "number") {
    //         return new Error(
    //             'Invalid prop `' + propName + '` supplied to' +
    //             ' `' + componentName + '`. It must be in 1-5 interval. Validation failed.'
    //         );
    //     }
    // }
}

Stars.defaultProps = {
    count: 0
}

export default Stars;