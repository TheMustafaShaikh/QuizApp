import React,{useState,useEffect} from 'react'
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import "./../App.css"
import {getQuestions} from "./../services/questions"

export default function Quiz(){

   
    let [Questions,setQuestions]  = useState<string[]>([])
    let [correctAns,setCorrectAns] = useState<string[]>([])
    let [options,setOptions] = useState<string[][]>([[""]])
    let [score,setScore] = useState<number>(0)
    let [count,setCount] = useState<number>(0)
    let [userAns,setUserAns] = useState<string>("")


    const result = ():void =>{
        console.log(userAns)
       if(userAns === correctAns[count]){
           setScore(score+1)
       }
        setCount(count+1)
    }

    useEffect(()=>{ 
    
    const fetchingQuestions = async() => {
        let questions = await getQuestions()
        let arr: string[]= [];
        let ans: string[] = [];
        let option: string[][] = [];
        questions.forEach((el)=>{
            arr.push(el.question)
            ans.push(el.correct_answer)
            option.push(el.options)
            
        })
        setQuestions(arr)
        setCorrectAns(ans)
        setOptions(option)
        
    }
    fetchingQuestions()
    },[])
  
    return (
        <div>

            {count !== 5? (
                <Container fixed>
                <h1>Quiz App</h1>           
                <div className="main-quiz-body">
                    <Typography variant="h4">
                    Q{count+1}.{Questions[count]}
                    </Typography>
                    {
                        options[count].map((el:string)=>{return(
                        <label key={el}>    
                         <input type="radio" name="option" value={el} onChange={(e)=> setUserAns(e.target.value)}/>
                         {el}
                        </label>
                        )})
                    }
                <br/>         
                <button className="btn" onClick={result}>Next</button>
                </div>

            </Container>
            ):(
                <h1>Quiz Ended <br/>
                Total Score: {score}/5</h1>
               
            )}
            
        </div>
    )
}
