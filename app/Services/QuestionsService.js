import { questionAPI } from "./AxiosService.js";
import { Question } from "../Models/Question.js";
import { ProxyState } from "../AppState.js";

class QuestionsService {
    async getAllQuestions() {
        let res = await questionAPI.get('')
        // console.log(res.data)
        let questions = res.data.results.map(q => new Question(q))
        ProxyState.questions = questions
        console.log(questions)
    }

    guess(id, guess) {
        let found = ProxyState.questions.find(a => a.id == id)
        if (found.correct == guess) {
            window.alert('CORRECT')
        } else {
            window.alert('INCORRECT')
        }
    }
}


export const questionsService = new QuestionsService()