var containerElemento = document.querySelector('.container')

var posts = [
{
    url:'https://nosbastidores.com.br/wp-content/uploads/2021/02/critica_clube_da_luta_bastidores.jpg',
    titulo: 'Clube da Luta',
    genero: 'Drama/Suspense',
     sinopse:'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.'
},
{
    url:'https://ovicio.com.br/wp-content/uploads/2020/08/20200802-filme-a-origem.jpg',
    titulo: 'A Origem',
    genero: 'Ação/Ficção científica',
    sinopse:'Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.'
},
{
    url:'https://i0.wp.com/movies.mxdwn.com/wp-content/uploads/2014/10/9a887d75fed2ffb7b641dbf85b3bffd9.png',
    titulo: 'O Poderoso Chefão',
    genero: 'Crime/Drama',
    sinopse:'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.'
},
{
    url:'https://wallpaperaccess.com/full/300505.jpg',
    titulo: 'Interestelar',
    genero: 'Ficção científica/Aventura',
    sinopse:'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.'
},
{
    url:'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2019/04/a-chegada-saiba-como-utilizar-o-filme-no-vestibular.png',
    titulo: 'A Chegada',
    genero: 'Ficção científica/Thriller',
    sinopse:'Naves alienígenas chegaram às principais cidades do mundo. Com a intenção de se comunicar com os visitantes, uma linguista e um militar são chamados para decifrar as estranhas mensagens dos visitantes.'
},
]

   for(let post of posts) {
    containerElemento.innerHTML += `
        <div class="cards">
            <img src="${post.url}">
            <h2>${post.titulo}</h2>
            <h5>${post.genero}</h5>
            <p>${post.sinopse}</p>
        </div>
    `
}


var urlInputElemento = document.querySelector('#url')
var tituloInputElemento = document.querySelector('#titulo')
var generoInputElemento = document.querySelector('#genero')
var sinopseInputElemento = document.querySelector('#sinopse')

var novaPostagemElemento = document.querySelector('#novaPostagemElemento')


novaPostagemElemento.addEventListener('click', (event) => {

    event.preventDefault()

    let postagem = {
        url: urlInputElemento.value.trim(),
        titulo: tituloInputElemento.value.trim(),
        genero: generoInputElemento.value.trim(),
        sinopse: sinopseInputElemento.value.trim()
    }

    containerElemento.innerHTML += `
    <div class = "cards">
          <img src="${postagem.url}">
          <h2>${postagem.titulo}</h2>
          <h5>${postagem.genero}</h5>
          <p>${postagem.sinopse}</p>
          </div>
    `
    
    posts.push(postagem)

    urlInputElemento.value = '',
    tituloInputElemento.value = '',
    generoInputElemento.value = '',
    sinopseInputElemento.value = ''

}) 

novaPostagemElemento.addEventListener('click', event =>{
    alert('Novo filme adicionado com sucesso!')
})
