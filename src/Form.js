export default class Form{
    constructor(){
        this.renderForm()
        this.renderBtn()
        this.btnAction()
    }
    renderForm(){
        const placeToHolder = document.querySelector('.footer')
        if(placeToHolder){
            const form = document.createElement('form')
            placeToHolder.appendChild(form)
            const labelName = document.createElement('span')
            labelName.innerText = 'Имя'
            form.appendChild(labelName)
            const name = document.createElement('input')
            name.classList.add('input-name')
            name.type = 'text'
            form.appendChild(name)

            const labelPhone = document.createElement('span')
            labelPhone.innerText = 'Мобильный телефон'
            form.appendChild(labelPhone)
            const phone = document.createElement('input')
            phone.classList.add('input-phone')
            phone.type = 'text'
            form.appendChild(phone)

            const labelMail = document.createElement('span')
            labelMail.innerText = 'Email'
            form.appendChild(labelMail)
            const mail = document.createElement('input')
            mail.classList.add('input-mail')
            mail.type = 'email'
            form.appendChild(mail)
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
            btn.addEventListener('submit', event =>{
                event.preventDefault()
                console.log('Сообщение после отлова')
                validation()
            })
        }
    }
    validation(){
        const name = document.querySelector('.input-name')
        const reName = /^[A-ZА-Я]{1,1}[a-zа-я]{0,}$/g
        if(!reName.test(name.value)){
            console.log('Имя не соотвествует шаблону')
            name.style.border = '2px solid red'
            return false
        }

        const phone = document.querySelector('.input-phone')
        const rePhone = /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/g
        if(!rePhone.test(phone.value)){
            console.log('Телефон не соотвествует шаблону')
            phone.style.border = '2px solid red'
            return false
        }

        const mail = document.querySelector('.input-mail')
        const reMail = /\w{1,}(\@mail\.ru)$/g
        if(!reMail.test(mail.value)){
            console.log('E-mail не соотвествует шаблону')
            mail.style.border = '2px solid red'
            return false
        }

        return true
    }

}