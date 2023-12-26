import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './WordSpellingGame.css'

const WordSpellingGame = () => {
  const [randomWord, setRandomWord] = useState('');
  const [userInput, setUserInput] = useState(Array(randomWord.length).fill(''));
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRefs = useRef([]);
  let isCorrectLetter= false;

  const fetchRandomWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
      const data = await response.json();
      const word = data[0].toUpperCase(); // Convert to uppercase for consistency
      setRandomWord(word);
      setUserInput(Array(word.length).fill('')); // Reset user input when a new word is fetched
      setIsCorrect(false);
    } catch (error) {
      console.log('Error fetching random word:', error);
    }
  };

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const handleInputChange = (index, value) => {
    const newInput = [...userInput];
    newInput[index] = value.toUpperCase();
     // Convert user input to uppercase for consistency
     if(value.toUpperCase()===randomWord[index])
       isCorrectLetter= !isCorrectLetter 


    setUserInput(newInput);
    
    // Check if user input matches the correct spelling
    setIsCorrect(newInput.join('') === randomWord);
  };

  const focusNextInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };


  return (
    <div className='Word-Game'>
      <h1>Word to Guess: {randomWord}</h1>
      <button onClick={fetchRandomWord}>New Word</button>
      <p>Spell the word:</p>
      <div className="word-input">
        {randomWord.split('').map((letter, index) => {
          return (
          <input 
            className={isCorrectLetter ? 'green' : 'black'}
            key={index}
            type="text"
            maxLength="1"
            value={userInput[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            ref={(ref) => (inputRefs.current[index] = ref)}
            onInput={() => focusNextInput(index) }
            
          />
          
          )
          })}
      </div>
      {isCorrect && <p className="correct">Congratulations! You've spelled the word!</p>}
    </div>
    
  )
}

export default WordSpellingGame