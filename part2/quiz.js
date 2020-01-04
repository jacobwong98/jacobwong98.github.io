var asyncRequest;

function markQuiz(form) {
    document.getElementById('quizSubmit').disabled = true;
    document.getElementById('quizStart').disabled = false;
    var correctAnswerNum = 0;
    var quizXML = asyncRequest.responseXML;
    var quizQuestion = quizXML.getElementsByTagName('question');

    for (var i = 0; i < quizQuestion.length; i++) {
        var index = i + 1
        var selectedAnswer = form.querySelectorAll('input[name="q' + index + '"]:checked')[0];
        var correctAnswerXML = quizQuestion[i].querySelectorAll('answer[correct]')[0].getAttribute('letter');
        var correctAnswerForm = form.querySelectorAll('input[name=q' + index + '][value=' + correctAnswerXML + ']')[0]

        if (selectedAnswer == undefined) { // No answer chosen
            correctAnswerForm.nextSibling.classList.add('correct');

            var e = document.createElement('span');
            e.setAttribute('class', 'incorrect');
            e.innerHTML = ' No Answer was chosen';
            correctAnswerForm.nextSibling.append(e);
        }
        else if (selectedAnswer.value == correctAnswerXML) { // Correct answer
            selectedAnswer.nextSibling.classList.add('correct');
            correctAnswerNum++
        }
        else { // Incorrect Answer
            correctAnswerForm.nextSibling.classList.add('correct');
            selectedAnswer.nextSibling.classList.add('incorrect');
        }
    }

    var element = getScore(correctAnswerNum, quizQuestion.length);
    form.append(element);
}

function getScore(correct, total) {
    var p = document.createElement('p');
    var percent = ((correct / total) * 100).toFixed(2);
    if (percent >= 50) {
        p.style.color = 'green';
    }
    else {
        p.style.color = 'red';
    }

    p.style.fontSize = '25px';
    p.innerHTML = 'You scored ' + correct + '/' + total + '. Your mark is ' + percent + '%';

    return p;
}

function loadQuiz(quiz) {
    var xmlFile = quiz.value + ".xml";
    //console.log(xmlFile);

    try {
        asyncRequest = new XMLHttpRequest();
        asyncRequest.addEventListener("readystatechange", getXML, false);
        asyncRequest.open("GET", xmlFile, true);
        asyncRequest.send(null);
    }
    catch (exception) {
        alert('Unable to load quiz');
    }

    quiz.disabled = true;

}


function getXML() {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 && asyncRequest.responseXML) {
        var quizXML = asyncRequest.responseXML;
        var quizForm = document.getElementById('quizForm');
        var quizQuestion = quizXML.getElementsByTagName('question');
        
        var innerForm = ""
        for (i = 0; i < quizQuestion.length; i++) {
            var index = i + 1;
            // Add Questions text
            var questionText = quizQuestion[i].firstElementChild.innerHTML;
            innerForm += "<p>Q" + index + ": " + questionText + "</p>";

            // Add Answers
            var answers = quizQuestion[i].getElementsByTagName('answer');
            for (j = 0; j < answers.length; j++) {
                var answer = answers[j];

                innerForm += '<input name="q' + index + '" type="radio" value="'
                    + answer.attributes["letter"].value + '" />'; // Add radio button

                // Add Answer Text
                innerForm += '<span>' + answer.innerHTML + '</span><br/>'
            }// End of Answers for loop

        } // End of Questions for loop

        innerForm += '<button type="submit" value="Submit" id="quizSubmit">Submit</button';
        quizForm.innerHTML = innerForm;
    }
}

// document.querySelector('input[name="q1"]:checked').nextSibling.classList.add('incorrect')
//asyncRequest.responseXML.getElementsByTagName('question')[0].querySelectorAll('answer[correct]')[0].getAttribute('letter')
//document.querySelectorAll('input[name="q1"][value=b]')[0].nextSibling
//asyncRequest.responseXML.getElementsByTagName("baseurl").item(0).attributes["ans"].value