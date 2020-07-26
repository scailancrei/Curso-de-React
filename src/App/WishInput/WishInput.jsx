import React, { useState } from 'react';
import PropTypes from 'prop-types';


const WishInput = ({ onNewWish }) => {
    const [newWishText, setNewWishText] = useState('');
    return (
        <fieldset className="wish-input">
            <legend className="wish-input__legend">New wish</legend>
            <input className="wish-input_field"
                placeholder="Introduce tu deseo aqui"
                value={newWishText}
                onChange={e => setNewWishText(e.target.value)}
                onKeyUp={ e => {
                    if (e.key === 'Enter' && newWishText.length) {
                        onNewWish({ done: false, text: newWishText});
                        setNewWishText('');
                    }
                }}
            />
        </fieldset>
    );
};

//Funcion de añadir en la lista

WishInput.propTypes = {
    onNewWish: PropTypes.func,
};

//Callback por defecto
WishInput.defaultProps = {
    onNewWish: () => { },
};







export default WishInput;