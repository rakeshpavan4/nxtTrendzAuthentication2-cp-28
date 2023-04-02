// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
        <h1>hello</h1>
      </div>
    </>
  )
}

export default Cart
