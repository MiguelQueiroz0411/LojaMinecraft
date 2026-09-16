// ARRAY DE IMAGENS
let imagens=[
    "./src/assets/capa_minecraft.avif",
    "./src/assets/floresta_minecraft.jpg",
    "./src/assets/lago_minecraft.webp",
    "./src/assets/castelo_minecraft.jpg",
    "./src/assets/paisagem_minecraft.webp"
]

//POSIÇÃO QUE VAI INICIAR AS IMAGENS
let index=0;
//TEMPO PARA MUDAR IMAGEM
let tempo=3000; //3 segundos

//FUNÇÃO DO SLIDESHOW
function SlideShow() {
    // DOM - PEGA O ID E PASSA O CAMINHO DAS IMAGENS
    document.getElementById("imgBanner").src=imagens[index];
    // INCREMENTO DAS IMAGENS
    index++;
    // ESTRUTURA CONDICIONAL IF(SE A POSIÇÃO FOR IGUAL A IMAGEM)
    if(index == imagens.length){
        // INICIA NA POSIÇÃO 0( OU SEJA, SEMPRE VOLTA O 0)
        index = 0;
    }

    // MÉTODO SETIMEOUT PARA EXECUTAR A FUNÇÃO (CALLBACK) E
    // CHAMAR O TEMPO
    setTimeout("SlideShow()", tempo);
}
//EXECUTAR A FUNÇÃO
SlideShow()

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open");
})