import AbstractList from './AbstractList.js'
import Button from './Button.js'
import Cart from './Cart.js'
import Form from './Form.js'
import GoodItem from './GoodItem.js'
import GoodItemInCart from './GoodItemInCart.js'
import List from './List.js'
import './css/style.css'

const CartInstance = new Cart()
const ListInstance = new List(CartInstance)
const FormBottom = new Form() 