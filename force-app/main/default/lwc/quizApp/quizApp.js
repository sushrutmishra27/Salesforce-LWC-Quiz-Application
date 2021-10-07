import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={}
    correctAnswers = 0
    isSubmitted = false
    myQuestions = [
        {
            id:"Question1",
            question:"Which one of these is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of these is invalid in LWC folder",
            answers:{
                a:"svg",
                b:"apex",
                c:"js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which of these is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}` 
    }

    changeHandler(event) {
        console.log("name", event.target.value)
        console.log("value", event.target.value)
        const {name, value} = event.target
        this.selected={...this.selected, [name]:value}
    }

    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        console.log(this.correctAnswers)
    }

    resetHandler() {
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted = false
    }
}