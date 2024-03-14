import React from "react";
import { useRef, useState } from "react";
import './Quiz.css'
import { data } from "../../assets/data";

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [questions, setQuestions] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [reslt, setResult] = useState(false);

    let opcion1 = useRef(null);
    let opcion2 = useRef(null);
    let opcion3 = useRef(null);
    


    let opcion_array = [opcion1, opcion2, opcion3];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (questions.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                opcion_array[questions.ans - 1].current.classList.add("correct");
            }

        }


    }
    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;

            }
            setIndex(++index);
            setQuestions(data[index]);
            setLock(false);
            opcion_array.map((Option) => {
                Option.current.classList.remove("wrong");
                Option.current.classList.remove("correct");
                return null;


            })
        }

    }
    const reset = () => {
        setIndex(0);
        setQuestions(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }
    return (
        <div className='container'>
            <h1>QUIZ APP</h1>
            <hr />
            {reslt ? <></> : <>
            
                <h2>{index + 1}. {questions.question}</h2>
                <ul>
                    <li ref={opcion1} onClick={(e) => { checkAns(e, 1) }}>{questions.opcion1}</li>
                    <li ref={opcion2} onClick={(e) => { checkAns(e, 2) }}>{questions.opcion2}</li>
                    <li ref={opcion3} onClick={(e) => { checkAns(e, 3) }}>{questions.opcion3}</li>
                    
                </ul>
                <button onClick={next}>NEXT</button>
                <div className="index">{index + 1} of {data.length} questions</div>
            </>}
            {reslt ? <>
                <h2>You Scored{score} out of{data.length}</h2>
                <button onClick={reset}>Reset</button>
            </> : <></>}

        </div>

    )
}

export default Quiz