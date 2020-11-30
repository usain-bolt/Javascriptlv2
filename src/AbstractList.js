export default class AbstractList {
  items = []

  constructor (item = []) {
    this.item = []
  }

  add (item) {
    const findedItem = this.items.find((fitem) => {
      return fitem.name === item.name
    })

    const addedPromise = new Promise(resolve => {
      if (findedItem) {
        findedItem.counter++
      } else {
        this.items.push(item)
      }
      resolve()
    })

    addedPromise.then(this.render.bind(this))
  }

  remove () {
    // todo
  }

  render () {
    this.items.forEach(good => {
      good.render()
    })
  }
}

