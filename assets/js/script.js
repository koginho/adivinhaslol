function main() {

    let questionsArray = [];

    function factoryQuestions(question, alternatives, answer) {
        return{question, alternatives, answer};
    };

    let question_1 = factoryQuestions(`De qual personagem é a frase: "Mamãe sempre dizia, Não perca! Quanto mais escura a noite... Mais brilhante as estrelas"`,
    ["Smolder", "Aurelion Sol", "Braum", "Mundo"], "Braum");
    
    let question_2 = factoryQuestions(`De qual personagem é a frase: "Mamãe sempre dizia, Não perca! Quanto mais escura a noite... Mais brilhante as estrelas"`,
    ["Smolder", "Aurelion Sol", "Braum", "Mundo"], "Braum");

    let question_3 = factoryQuestions(`De qual personagem é a frase: "Mamãe sempre dizia, Não perca! Quanto mais escura a noite... Mais brilhante as estrelas"`,
    ["Smolder", "Aurelion Sol", "Braum", "Mundo"], "Braum");

    let question_4 = factoryQuestions(`De qual personagem é a frase: "Mamãe sempre dizia, Não perca! Quanto mais escura a noite... Mais brilhante as estrelas"`,
    ["Smolder", "Aurelion Sol", "Braum", "Mundo"], "Braum");

    let question_5 = factoryQuestions(`De qual personagem é a frase: "Mamãe sempre dizia, Não perca! Quanto mais escura a noite... Mais brilhante as estrelas"`,
    ["Smolder", "Aurelion Sol", "Braum", "Mundo"], "Braum");
    
    questionsArray.push(question_1, question_2, question_3, question_4, question_5);

    console.log(questionsArray[3])

    const questionShuffle = questionsArray => {
        for(let i = questionsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questionsArray[i], questionsArray[j]] = [questionsArray[j], questionsArray[i]]
        }
    }
}

main();