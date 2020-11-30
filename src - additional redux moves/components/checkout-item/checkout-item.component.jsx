import React from 'react';

import { connect } from 'react-redux';

import { ClearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss';

// when destructing like this, we lose access to the cartItem itself
// const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }}) => (
//     <div className='checkout-item'>
//         <div className='image-container'>
//             <img src={imageUrl} alt='item' />
//         </div>
//         <span className='name'>{name}</span>
//         <span className='quantity'>{quantity}</span>
//         <span className='price'>{price}</span>
//         <div className='remove-button'>&#10005;</div>

//     </div>
// )

// to get around this, import as itself and destructure separately
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div>            
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>            
            </span>
            <span className='price'>{price}</span>
            <div 
                className='remove-button'
                onClick={() => clearItem(cartItem)}
            >
            &#10005;
            </div>
        </div>
    )
};

// dispatch is an update to state
const mapStatetoProps = dispatch => ({ 
    clearItem: item => dispatch(ClearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)), 
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapStatetoProps)(CheckoutItem);