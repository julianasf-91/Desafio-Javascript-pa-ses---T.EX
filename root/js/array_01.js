// Variáveis

const arrayPaises = [
    ['OCEANIA','Pavlova: sobremesa em forma de bolo é feita com merengue, frutas, chantilly'],
    ['MÉXICO','Tacos: feito de tortilhas à base de milho e recheado com carne, tomate, queijo e alface'],
    ['ARGENTINA','Alfajores: iguaria feita com chocolate e doce leite'],
    ['FRANÇA','Escargot: feito com caracóis servidos na casca, cozidos com manteiga de alho e salsa'],
    ['CHINA','Lámen: tipo de macarrão chinês em caldo à base de ossos de porco, peixe ou frango, tudo temperado com molho tarê'],
    ['PORTUGAL','Bacalhau: geralmente vai acompanhado de batatas ou arroz, com tomates, ovos e azeitonas'],
    ['EUA','Hambúrguer: tradicional sanduíche de carne'],
    ['ESPANHA','Paella: guisado de arroz, carne e verduras, preparado numa paella (panela) sobre fogo'],
    ['ITÁLIA','Spaghetti alla carbonara: preparada com ovos, queijo parmesão, queijo pecorino romano, toucinho, pimenta preta , azeite ou manteiga'],
    ['ALEMANHA','Salsichas: faz presente em entradas, pratos principais e petiscos, seja crua, frita ou cozida'],
]

let arrayContagem = new Object {"país:"; "qtd"}


// querySelector

const btnSortear = document.querySelector('#btnMensagem')
const mensagem = document.querySelector('#boxMensagem')
const paisMesagem = document.querySelector('#paisMesagem')
const comidaMesagem = document.querySelector('#comidaMensagem')
const qtdPaisesSorteado = document.querySelector('#qtdPaisesMensagem')


// Functions

// Function que define todos os elementos do array como '0', conforme quantidade de elementos do array paises
function contagemPaises (array) {
    for (const i in array) {
        arrayContagem.país{i} = array[i][0]
    }
    return arrayContagem
}
contagemPaises(arrayPaises)


// Function anônima de evento 'onclick'

btnSortear.onclick = function () {

    let numSorte = Math.floor(Math.random()*10)
    let paisSorteado = arrayPaises[numSorte][0]
    let comidaSoteada = arrayPaises[numSorte][1]

    arrayContagem[numSorte] += 1

    mensagem.classList.add("block")
    paisMesagem.innerHTML = paisSorteado
    comidaMesagem.innerHTML = comidaSoteada
    qtdPaisesSorteado.innerHTML = `🏆 País foi sorteado ${arrayContagem[numSorte]} vezes`  
    console.log(arrayContagem)
}
