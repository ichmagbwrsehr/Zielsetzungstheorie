function checkAnswers() {
    const answers = {
        q1: "Edwin Locke und Gary Latham",
        q2: "Spannungszustand, der zielgerichtetes Handeln fördert",
        q3: "Spezifisch",
        q4: "Messbar",
        q5: "Akzeptiert",
        q6: "Realistisch",
        q7: "Terminierbar",
        q8: "hoch",
        q9: "Der High Performance Cycle",
        q10: "Unübersichtlich",
        q11: "nichts davon"
    };

    let score = 0;
    let resultHTML = "<h2>Ergebnis:</h2>";

    for (let i = 1; i <= Object.keys(answers).length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            const questionNumber = `q${i}`;

            resultHTML += `<p>Frage ${i}: `;
            if (userAnswer === answers[questionNumber]) {
                resultHTML += `<span style="color: green;">Richtig!</span></p>`;
                score++;
            } else {
                resultHTML += `<span style="color: red;">Leider falsch :(.</span> Richtige Antwort: ${answers[questionNumber]}</p>`;
            }
        } else {
            resultHTML += `<p>Frage ${i}: <span style="color: red;">Leider keine Antwort abgegeben :(</span></p>`;
        }
    }

    document.getElementById("result").innerHTML = resultHTML;

    const gifContainer = document.getElementById("gif-container");
    if (score === Object.keys(answers).length) {
        const correctGIF = document.createElement("img");
        correctGIF.src = "correct.gif";
        correctGIF.alt = "Correct GIF";
        correctGIF.style.width = "200px";
        correctGIF.style.height = "auto";
        gifContainer.innerHTML = "";
        gifContainer.appendChild(correctGIF);
    } else {
        const incorrectGIF = document.createElement("img");
        incorrectGIF.src = "incorrect.gif";
        incorrectGIF.alt = "Incorrect GIF";
        incorrectGIF.style.width = "200px";
        incorrectGIF.style.height = "auto";
        gifContainer.innerHTML = "";
        gifContainer.appendChild(incorrectGIF);
    }
}