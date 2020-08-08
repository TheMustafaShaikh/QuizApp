export type questionType = {
    category: string,
    type: string,
    diffcuilty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export type quizType = {
    question: string,
    correct_answer: string,
    options: string[] 
}