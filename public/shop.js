class AbstractList{
    items = []

    constructor( item = []){
        this.item = []
    }

    add(item){
        const findedItem = this.items.find((fitem) => {
            return fitem.name === item.name
        })


        const newPromise = new Promise(resolve => {
            if (findedItem) {
                findedItem.counter++
            }
            else {
                this.items.push(item)
            }
            resolve()
        })
        newPromise.then(() => this.render())    
    }

    remove(){
        //
    }

    render(){
        this.items.forEach(good => {
            good.render()
        })
    }

}

class List extends AbstractList{
    _cartInstance = null
    _pageCounter = 1
    constructor(CartInstance){
        super()
        this._cartInstance = CartInstance
        this.initShowMoreBtn()
        let goodsPromise = this.fetchGoods()
        goodsPromise.then(() => {
            this.render()
        })
    }

    initShowMoreBtn(){
        const btn = document.querySelector('.showmore')
        if(btn){
            btn.addEventListener('click', ()=> {
                this.fetchGoods()
                .then(() => {
                    this.render()
                })
            })
        }
    }

    hideMoreShowBtn(){
        const btn = document.querySelector('.showmore')
        btn.remove()
    }

    fetchGoods(){
        const result = fetch(`http://localhost:3000/database/database${this._pageCounter}.json`)
        console.log(result)
        return result 
            .then(res => {
                this._pageCounter++ 
                return res.json() // Парсит json файл в обычные объект
            })
            .then(data => {
                console.log(data)
                this.items.push(...data.data.map(cur => {
                    return new GoodItem(cur, this._cartInstance)
                }))
            })
            .catch(err => {
                this.hideMoreShowBtn()
                console.log('Проверьте сеть', err)
            })
    }

    render(){
        const placeToRender = document.querySelector('.good-list')
        if (placeToRender){
            placeToRender.innerHTML = ''
            this.items.forEach(good => {
                good.render(placeToRender)
            })
        }
    }
    
}

class Card extends AbstractList{
    _cartInstance = null
    constructor(СartInstance){
        super()
        this._cartInstance = СartInstance
        this.init()
    }

    init(){
        const block = document.createElement('div')
        block.classList.add('cart')

        const list = document.createElement('div')
        list.classList.add('cart_list')
        block.appendChild(list)

        const ButtonInstance = new Button('Корзина', () =>{
            list.classList.toggle('shown')
        })
        block.appendChild(ButtonInstance.getTemplate())

        const placeToRender = document.querySelector('header')
        if(placeToRender){
            placeToRender.appendChild(block)
        }
    }

    render(){
        const placeToRender = document.querySelector('.cart_list')
        if (placeToRender) {
            placeToRender.innerHTML = ''
            if (this.items.length){
                this.items.forEach(good => {
                    good.render(placeToRender)
                })
            }
            else {
                placeToRender.innerHTML = 'Нет товаров в корзине!'
            }
        }
    }
}

class GoodItem{

    name = ''
    price = 0
    counter = 1
    _cartInstance = null //Локальное свойство карзины

    constructor({name, price}, СartInstance ){ // деструктуризация
        this.name = name
        this.price = price
        this._cartInstance = СartInstance
    }

    render(placeToRender){
        if(placeToRender){
            const block = document.createElement('div')
            block.classList.add('good-item')
            block.innerHTML = `
            <div class="img">
                <img src ="#"></img>
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
                <div class="button_holder"></div>
            </div>
            `
            placeToRender.appendChild(block)

            const addBtn = new Button('Добавить в корзину', () =>{
                this._cartInstance.add(new GoodItemInCard(this))
            })
            console.log(addBtn)
            block.querySelector('.button_holder').appendChild(addBtn.getTemplate())
        }
    }
}

class GoodItemInCard extends GoodItem {
    constructor(props){ // деструктуризация
        super(props)
    }

    render(){
        const placeToRender = document.querySelector('.cart_list')
        if(placeToRender){
            const block = document.createElement('div')
            block.innerHTML = `${this.name} = ${this.price} x ${this.counter}`
            placeToRender.appendChild(block)
        }
    }
}

class Form{
    constructor(){
        renderForm()
        renderBtn()
        btnAction()
    }
    renderForm(){
        const placeToHolder = document.querySelector('.footer')
        if(footer){
            const form = document.createElement('form')
            placeToHolder.appendChild(form)
            const labelName = document.createElement('span')
            form.appendChild(labelName)
            const name = document.createElement('input')
            name.type = 'text'
            form.appendChild(name)
        }
    }
    renderBtn(){
        const placeToHolder = document.querySelector('form')
        if (placeToHolder){
            const button = document.createElement('button')
            button.type = 'submit'
            button.classList.add('btn-submit')
            button.innerText = 'Отправить'
            placeToHolder.appendChild(button)
        }
    }
    btnAction(){
        const btn = document.querySelector('.btn-submit')
        if(btn){
            btn.addEventListener('submit', (event) =>{
                event.preventDefault()
                checkName()
                checkPhone()
                checkMail()
            })
        }
    }
    checkName(){
        const name = document.querySelector('input')
        const reName = /^[A-ZА-Я]{1,1}[a-zа-я]{0,}$/g
        if(reName.test(name.value)){
            console.log('Имя соотвествует шаблону')
            return true
        }
        else console.log('Имя не соотвествует шаблону')
        return false
    }

}


const CartInstance = new Card()
const ListInstance = new List(CartInstance)
const FormBottom = new Form()