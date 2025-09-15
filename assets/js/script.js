main();

function main() { // Função principal.

    let questionsArray = []; // Declarando o array para receber as perguntas.
    let questionsAnwered = []; // Declarando o array para receber as perguntas recebidas

    const questionText = document.querySelector(".questionP");
    const questionAnswer_1 = document.querySelector(".alternative_1");
    const questionAnswer_2 = document.querySelector(".alternative_2");
    const questionAnswer_3 = document.querySelector(".alternative_3");
    const questionAnswer_4 = document.querySelector(".alternative_4");

    function factoryQuestions(question, alternatives, answer) { // Factory para facilitar a implementação de novas perguntas.
        return{question, alternatives, answer};
    };

    // Definindo as perguntas.
    let question_1 = factoryQuestions(`De qual personagem é a frase: "Mamãe sempre dizia, Não perca! Quanto mais escura a noite... Mais brilhante as estrelas"`,
    ["Smolder", "Aurelion Sol", "Braum", "Mundo"], "Braum");
    
    let question_2 = factoryQuestions(`Qual personagem tem a habilidade com nome de "Égide Impetuosa"`,
    ["Leona", "Nautilus", "Fiora", "Pantheon"], "Pantheon");

    let question_3 = factoryQuestions(`Qual personagem tem a habilidade com nome de "Indestrutível"`,
    ["Gnar", "Mordekaiser", "Pantheon", "Ambessa"], "Mordekaiser");

    let question_4 = factoryQuestions(`De qual personagem é a frase: "A tecnologia e eu temos um... relacionamento complicado."`,
    ["Smolder", "Heimerdinger", "Camille", "Ekko"], "Camille");

    let question_5 = factoryQuestions(`De qual personagem é a frase: "Pelo poder das estrelas."`,
    ["Bardo", "Aurelion Sol", "Soraka", "Mundo"], "Soraka");
    
    questionsArray.push(question_1, question_2, question_3, question_4, question_5); // Colocando o objeto de perguntas dentro do array.

    // Função Fisher-Yates para embaralhar o array.
    const questionShuffle = questionsArray => {
        for(let i = questionsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questionsArray[i], questionsArray[j]] = [questionsArray[j], questionsArray[i]]
        }
    }

    questionShuffle(questionsArray); // Chamando a função para embaralhar o array.

    // Função para verificar quantas perguntas restam.
    const questionsLeft = () => {
        console.log(`Restam ${questionsArray.length} perguntas.`)
        if (questionsArray.length < 0) {
            alert("Acabaram as perguntas :(");
        }
    }

    // Enviando as perguntas para o HTML.
    document.getElementById("questionButton").addEventListener("click", () => {
        console.log("Iniciando...")
        questionsLeft()
        questionText.innerHTML = `${questionsArray[1].question}.<br>`
        questionAnswer_1.innerHTML = `${questionsArray[1].alternatives[0]}.`
        questionAnswer_2.innerHTML = `${questionsArray[1].alternatives[1]}.`
        questionAnswer_3.innerHTML = `${questionsArray[1].alternatives[2]}.`
        questionAnswer_4.innerHTML = `${questionsArray[1].alternatives[3]}.`
    });

    // Submmit da resposta.
    document.getElementById("questionSubmit").addEventListener("click", () => {
        questionsAnwered = questionsArray.shift(0)
        console.log("Question answered...")
    });
}