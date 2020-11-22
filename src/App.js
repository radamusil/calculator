import React, { useState} from 'react';
import './App.css';

function App() {

    const [number, setNumber] = useState(1);
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(null);


    return (
        <div className="calc">
            <div className="display">
                <input value={

                    result !== null ?
                        result
                        : (number === 1 ? firstNumber : secondNumber)

                } type="number" disabled/>
            </div>
            <div className="buttons">
                <div className="left">
                    <button
                        onClick={() => {
                            let newArgument = 0;
                            
                            if (number === 1) {
                                newArgument = firstNumber * 10;
                                setFirstNumber(newArgument);
                            } else {
                                newArgument = secondNumber * 10;
                                setSecondNumber(newArgument);
                            }
                        }}
                    >
                        0
                    </button>
                    <button
                        className="clear"
                        onClick={() => {
                            setNumber(1);
                            setFirstNumber(0);
                            setSecondNumber(0);
                            setOperator('');
                            setResult(null);
                        }}
                    >
                        C
                    </button>
                    <button
                        onClick={()=>{

                            if (operator === '+'){
                                let newArgument = (firstNumber + secondNumber)
                                setResult(newArgument);
                            } else if (operator === '-'){
                                let newArgument = (firstNumber - secondNumber)
                                setResult(newArgument);
                            } else if (operator === '*'){
                                let newArgument = (firstNumber * secondNumber)
                                setResult(newArgument);
                            } else if (operator === '/'){
                                let newArgument = (firstNumber / secondNumber)
                                setResult(newArgument);
                            }

                            
                            setSecondNumber(0);
                            setNumber(1);
                            setOperator('');
                            setFirstNumber(result);
                            console.log(number, firstNumber, secondNumber, operator,result);
                        }}
                        className="equal"
                    >
                        =
                    </button>
                    {
                        ( new Array( 9 ).fill( null ) ).map( ( a, i ) => {
                            const num = i + 1;

                            return (
                                <button
                                    key={num}
                                    onClick={() => {
                                        //console.log(number);
                                        let newArgument = 0;
                                        if (number === 1) {
                                            newArgument = firstNumber * 10 + num;
                                            setFirstNumber(newArgument);
                                        } else {
                                            newArgument = secondNumber * 10 + num;
                                            setSecondNumber(newArgument);
                                        }
                                        console.log(number, firstNumber, secondNumber, operator);
                                        
                                    }}
                                >
                                    {num}
                                </button>
                            )
                        } )
                    }
                </div>
                <div className="actions">
                    <button
                        onClick={() => {
                            setOperator("/");
                            setNumber(2);
                            if (result !== null) {
                                setFirstNumber(result);
                            }
                            setResult(null);
                            console.log(number, firstNumber, secondNumber, operator);
                        }}
                    >&divide;</button>

                    <button
                    onClick={() => {
                        setOperator("*");
                        setNumber(2);
                        if (result !== null) {
                            setFirstNumber(result);
                        }
                        setResult(null);
                        console.log(number, firstNumber, secondNumber, operator);
                    }}
                    >&times;</button>

                    <button
                    onClick={() => {
                        setOperator("-");
                        setNumber(2);
                        if (result !== null) {
                            setFirstNumber(result);
                        }
                        setResult(null);
                        console.log(number, firstNumber, secondNumber, operator);
                    }}
                    >-</button>

                    <button
                    onClick={() => {
                        setOperator("+");
                        setNumber(2);
                        if (result !== null) {
                            setFirstNumber(result);
                        }
                        setResult(null);
                        console.log(number, firstNumber, secondNumber, operator, result);
                    }}
                    >+</button>
                </div>
            </div>
        </div>
    );

}

export default App;
