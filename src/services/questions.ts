import {questionType, quizType} from "./../types/getTypes"

export const getQuestions = async():Promise<quizType[]> =>{
    let fetchingData = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    let getResponse = await fetchingData.json();
    let questions:questionType[] = await getResponse.results
    return questions.map((element: questionType)=>{
        return{
            question: element.question,
            correct_answer: element.correct_answer,
            options: element.incorrect_answers.concat(element.correct_answer)
        }
        
    })
}