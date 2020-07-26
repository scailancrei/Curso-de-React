import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

const WishList = ({wishes, onWishesChange }) => (

    <ul className="wish-list">
        {wishes.map(({ text, done }, i) => ( // Si done es true pintará la clase wish-list__item--done y sino pondrá la cadena vacia
            <WishItem text={text} done={done} id={`wish${i}`} key={text} onDoneChange={(value) => {
                const updatedWishes = [...wishes];
                updatedWishes[i].done = value;
                onWishesChange(updatedWishes);
            }} />
            
        ))}

    </ul>
);

WishList.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)),
    updatedWishes: PropTypes.func,
    };

WishList.defaultProps = {
    wishes: [],
    updatedWishes: () => {},
};

export default WishList;