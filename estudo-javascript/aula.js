const tela = document.querySelector("#tela")
const visor = document.querySelector("#visor")
const txt_qtde = document.querySelector("#txt_qtde")
const btn_add = document.querySelector("#btn_add")
const btn_remover = document.querySelector("#btn_remover") 

let larguraTela = tela.offsetWidth
let alturaTela = tela.offsetHeight

let bolas = []
let numBolas = 0

class Bola{
  constructor(arrayBolas, tela){
    this.tam = Math.floor(Math.random()*15) + 10
    this.r = Math.floor(Math.random()*255)+10
    this.g = Math.floor(Math.random()*255)+10
    this.b = Math.floor(Math.random()*255)+10

    this.px = Math.floor(Math.random()*(larguraTela-this.tam))
    this.py = Math.floor(Math.random()*(alturaTela-this.tam))

    this.velx = Math.floor(Math.random()*2) + 0.5
    this.vely = Math.floor(Math.random()*2) + 0.5
    this.dirx = (Math.random()*10) > 5?1:-1
    this.diry = (Math.random()*10) > 5?1:-1

    this.tela = tela
    this.arraybolas = arrayBolas 
    this.id = Date.now()+"_"+Math.floor(Math.random()*1000000000000000)
    this.desenhar()
    this.controle = setInterval(this.controlar,10)
    this.eu = document.querySelector("#" + this.id)
  }

  desenhar=()=>{

  }
  remover=()=>{

  }
  minhaPos=()=>{

  }
  controlar=()=>{

  }
}

window.addEventListener("resize", () => {
  larguraTela = tela.offsetWidth
  alturaTela = tela.offsetHeight
})

btn_add.addEventListener("click", () => {
  const qtde = txt_qtde.value 
  for(let i = 0; i < qtde; i++){

  }
})

btn_remover.addEventListener("click", () => {
  bolas.map((b) => {
    //remover bolas
  })
})