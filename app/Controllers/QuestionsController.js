import { questionsService } from "../Services/QuestionsService.js";
import { ProxyState } from "../AppState.js";

function _drawQuestions() {
    let questions = ProxyState.questions
    let template = ''
    questions.forEach(q => template += q.Template)
    document.getElementById('questions').innerHTML = template
}


export class QuestionsController {
    constructor() {
        ProxyState.on('questions', _drawQuestions)

        questionsService.getAllQuestions()
    }

    guess(id, guess) {
        questionsService.guess(id, guess)

    }

}