class Button{
    constructor(text, clb){
        this.text = text
        this.onClickClb = clb

    }

    getMainTemplate(){
        const btn = document.createElement('div')
        btn.classList.add('btn')

        return btn
    }

    getTemplate(){
        const btn = this.getMainTemplate()
        btn.innerHTML = this.text

        btn.addEventListener('click', () =>{
            this.onBtnClick()
        })

        return btn
    }

    onBtnClick(){
        console.log('Clicked')
        if(typeof this.onClickClb === 'function'){
            this.onClickClb()
        }
    }

    
}