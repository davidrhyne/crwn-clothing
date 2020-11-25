import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss';
// import cartReducer from '../../redux/cart/cart.reducer';



const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            
            {   
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin' >SIGN IN</Link>
            }
            <CartIcon />

        </div>  
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)

// this was the first, check the next for deconstructing nested
// const mapStatetoProps = state => ({ 
//     currentUser: state.user.currentUser
// })


// const mapStatetoProps = ({user: {currentUser}, cart: { hidden } }) => ({ 
//     currentUser: currentUser,
//     hidden: hidden
// })

// const mapStatetoProps = (state) => ({ 
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

const mapStatetoProps = createStructuredSelector ({ 
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header);