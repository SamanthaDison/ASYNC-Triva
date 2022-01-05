import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class Question {
  constructor(results) {
    this.category = results.category
    this.type = results.type
    this.difficulty = results.difficulty
    this.question = results.question
    this.correct = results.correct_answer
    this.incorrect = results.incorrect_answers
    this.id = generateId()
  }

  get Template() {
    return `<div class="col-12 mt-3">
          <div class="bg-white rounded text-center">  
          <h2>QUESTION #${this.questionNum()}</h2>
            <p>${this.question}</p>
            <div class="pb-3">
            ${this.Answers()}
            </div>
          </div>
        </div>`
  }

  Answers() {
    let answers = [this.correct, ...this.incorrect]
    let template = ''
    answers.forEach(a => template += ` <button onclick="app.questionsController.guess('${this.id}','${a}')">${a}</button>`)
    return template
  }

  questionNum() {
    let number = ProxyState.questions.findIndex(n => n.id == this.id)
    return number + 1
  }
}

