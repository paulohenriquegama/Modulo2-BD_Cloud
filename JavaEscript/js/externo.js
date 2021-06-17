function apesentarMesagem(){
    alert("Suave na \\o/ nave!!");
}

function iniciar(){
    const principal = document.getElementById('principal');
    principal.innerHTML = "Assim vai \\o/";

    const elementoPorClasse = document.getElementsByClassName("exe1");
    for (const elemento of elementoPorClasse){
        elemento.innerHTML = "Elemento  com classe"
    }


    

    botao.addEventListener("click",clickBotao);
    botao.innerHTML = "clique aqui2"

}

