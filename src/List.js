import AbstractList from './AbstractList.js'
import GoodItem from './GoodItem.js'

export default class List extends AbstractList {
    _cartInstance = null
    _pageCounter = 1
  
    constructor (CartInstance) {
      super()
      this._cartInstance = CartInstance
  
      this.initShowMoreBtn()
  
      let goodsPromise = this.fetchGoods()
      goodsPromise.then(() => {
        this.render()
      })
    }
  
    initShowMoreBtn () {
      const btn = document.querySelector('.showmore')
      btn.addEventListener('click', () => {
        this.fetchGoods()
          .then(() => {
            this.render()
          })
      })
    }
  
    hideShowMoreBtn () {
      const btn = document.querySelector('.showmore')
      btn.remove()
    }
  
    fetchGoods () {
      const result = fetch(`/database/page${this._pageCounter}.json`)
      return result
        .then(res => {
          return res.json()
        })
        .then(data => {
          this._pageCounter++
          this.items.push(...data.data.map(cur => {
            return new GoodItem(cur, this._cartInstance)
          }))
        })
        .catch(e => {
          this.hideShowMoreBtn()
          console.log(e)
        })
    }
  
    render () {
      const placeToRender = document.querySelector('.goods-list')
      if (placeToRender) {
        placeToRender.innerHTML = ''
        this.items.forEach(good => {
          good.render(placeToRender)
        })
      }
    }
  }
  
  