import Button from './Button.js'
import GoodItemInCart from './GoodItemInCart.js'

export default class GoodItem {
    name = ''
    price = 0
    counter = 1
    _cartInstance = null
  
    constructor ({ name, price}, CartInstance) {
      this.name = name
      this.price = price
      this._cartInstance = CartInstance
    }
  
    render (placeToRender) {
      if (placeToRender) {
        const block = document.createElement('div')
        block.classList.add('good-item')
        block.innerHTML = `
          <div class="img">
            <img src="https://lh3.googleusercontent.com/proxy/AoXii9d3TqeZa0UT8kzxJiiBDQ6Zq2b1ldgxStbYVmtffV9rLfEKZKaxTREE1Ke0SbWKQ-N9rTsBOIx_Eq5r1IYymsY5PCn9boVCgI4k9extSRuHHkkT" />
          </div>
          <div class="meta">
            <div class="meta__row">
              <span class="key">Товар:</span>
              <span class="value">${this.name}</span>
            </div>
            <div class="meta__row">
              <span class="key">Цена:</span>
              <span class="value">${this.price}</span>
            </div>
            <div class="btn_holder"></div>
          </div>
        `
        placeToRender.appendChild(block)
  
        const AddButton = new Button('Добавить в корзину', () => {
          this._cartInstance.add(new GoodItemInCart(this))
        })
        block.querySelector('.btn_holder').appendChild(AddButton.getTemplate())
      }
    }
  }
  