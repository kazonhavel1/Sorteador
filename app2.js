let quantidade_numeros = document.getElementById("quantidade");
let numero_inicial = document.getElementById("de");
let numero_final = document.getElementById("ate");
let numeros = [];
let botao_sorteio = document.getElementById("btn-sortear");
let botao_reiniciar = document.getElementById("btn-reiniciar");
let texto = document.getElementById("txt_resultado");

//let max = numero_final.value;
//let min = parseInt(numero_inicial.value);

function sortear(){
    
    let quantidade_array = parseInt(numeros.length);
    // se a quantidade de numeros pedidos for maior que o range de inicio e fim, troque o texto para a informação a seguir
    if (parseInt(quantidade_numeros.value) > (parseInt(numero_inicial.value) + parseInt(numero_final.value))){
        texto.innerText = "O número mínimo e máximo não atende a quantidade de números solicitados.";
    }
    else{
        try{
            // enquanto a quantidade de números em minha lista for menor que o valor solicitado pelo usuário
            while (quantidade_array < parseInt(quantidade_numeros.value)){
                sorteaNumero(parseInt(numero_inicial.value),parseInt(numero_final.value)); //sorteie um novo número
                quantidade_array = numeros.length; //atualize a quantidade da lista
                
                if(quantidade_array == parseInt(quantidade_numeros.value)){
                    break;
                    } // se a quantidade de itens atingiu a quantidade solicitada, pare
                }

            texto.innerText = `Números sorteados:  ${numeros.toString()}`; //alterando o texto com um ToString dos números sorteados
            inativarBotao(botao_sorteio.id); 
            ativarBotao(botao_reiniciar.id);

            }
        catch (ex)
        {
            alert(`erro ao efetuar o sorteio: ${ex.message}`);
        }
            
            

       
        
    };

}


function reiniciar(){

    numeros = []; //limpa a lista
    texto.innerText = "Bem vindo ao gerador de sorteios!"; //reseta os atributos
    inativarBotao(botao_reiniciar.id);
    ativarBotao(botao_sorteio.id);

}

// passe o ID do botão para a função e ela o inativará, alterando a classe e seu atributo "disabled"
function inativarBotao(id){ 

    elemento = document.getElementById(id);
    elemento.disabled = true;
    elemento.classList.remove("container__botao");
    elemento.classList.add("container__botao-desabilitado");

}


// passe o ID do botão para a função e ela o ativará, alterando a classe e seu atributo "disabled"
function ativarBotao(id){

    elemento = document.getElementById(id);
    elemento.disabled = false;
    elemento.classList.remove("container__botao-desabilitado");
    elemento.classList.add("container__botao");
    
}

function sorteaNumero(min,max){
    let numero = Math.floor(Math.random() * (max - min + 1)) + 1; //busque um número aleatório que comece pelo menor número e finalize no maior
    
    do{
        numero = Math.floor(Math.random() * (max - min + 1)) + min; // procure um novo numero
    } while (numeros.includes(numero) && min != max); //enquanto n número que encontrar anteriormente não exista na minha lista
    

    numeros.push(numero); //adicione o número a lista

}