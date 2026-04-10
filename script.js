//CONIGURAÇOES
const valorDiaria = 50  //Valor cobrado por dia
const kmParaTroca = 1000  //troca óleo a cada 1000 km
//DADOS DA DUAS MOTOS
let motos = [
    {nome:"Factor 150",disponivel:true,km:0,ultimaTroca:0},
    {nome:"Fazer 150",disponivel:true,km:0,ultimaTroca:0}
]

//MOSTRAR AS MOTOS NA TELA
function mostrarMotos(){
    const div = documento.getElementByld("listaMotos")
    div.innerHTML =""
motos.forEach((moto, indice) =>{
    let status = moto.disponivel?
    '<span class = "disponivel"></span>'
    :'<span class = "alugada"></span>'

    div.innerHTML+=`
    <div class="moto">
        <h4>Moto ${indice + 1}: ${moto.nome} </h4>
        <p>Status:${statua}</p>
        <p>KM Total:${moto.km} </p>
    </div>
    `
})
}
//FUNÇÃO DE ALUGAR
function alugar(){
    const i = parseInt(document.getElementByld("numMoto").vale)
const kmRodados = parseInt(document.getElementById("km").vale)
if(!motos[i].disponivel){}
}
