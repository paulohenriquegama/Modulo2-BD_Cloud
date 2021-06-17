const pessoa = {
    nome: 'Godofredo',
    sobrenome: 'Ô Lindo',
    idade: 55,
    
    doido: false,

    imagemSerio:"https://cdn.pixabay.com/photo/2020/12/27/20/24/emoji-5865207_960_720.png",
    imagemDoido: 'https://pa1.narvii.com/6976/c2415ad0c98543ead937ba84c76e4c9604dba245r1-480-270_hq.gif',
}
let texto = "";

const elementoNome = document.getElementById('nome');
elementoNome.innerHTML = pessoa.nome;

const elementoSobrenome = document.getElementById('sobreNome');
elementoSobrenome.innerHTML =pessoa.sobrenome;

const elementoIdade = document.getElementById('idade');
elementoIdade.innerHTML = pessoa.idade;


function atualizarHumor(){
    const elementoImagem = document.getElementById('imagem');
    const elementoTexto = document.getElementById('frase');
    
  
    if (pessoa.doido) {
        elementoImagem.src = pessoa.imagemDoido;
        elementoTexto.innerText = pessoa.nome + "está DOIDO";

    } else {
        elementoImagem.src = pessoa.imagemSerio;
        elementoTexto.innerText = pessoa.nome + 'está SÉRIO'
    }
}

atualizarHumor();

function humorDiferente(){
    
    pessoa.doido = !pessoa.doido;
    atualizarHumor();

}

const botaoAlterarHumor = document.getElementById('mudarHumor')
botaoAlterarHumor.addEventListener('click', humorDiferente )