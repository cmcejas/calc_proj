"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import dynamic from 'next/dynamic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import question1 from '../../../public/ApPracQuestions/question1.webp';
import question2 from '../../../public/ApPracQuestions/question2.webp';
import question3 from '../../../public/ApPracQuestions/question3.webp';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const questions = [question1, question2, question3];
const answers = ['b', 'd', 'a']; // Answer key

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Ap_practice = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [answer, setAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [unansweredQuestions, setUnansweredQuestions] = useState([...questions.keys()]);

  useEffect(() => {
    loadNextQuestion();
  }, []);

  const loadNextQuestion = () => {
    if (unansweredQuestions.length === 0) {
      toast.success('Congratulations! You have completed all questions.');
      return;
    }

    const randomIndex = getRandomNumberInRange(0, unansweredQuestions.length - 1);
    const questionIndex = unansweredQuestions[randomIndex];
    
    setSelectedImage(questions[questionIndex]);
    setCorrectAnswer(answers[questionIndex]);

    const remainingQuestions = unansweredQuestions.filter((_, index) => index !== randomIndex);
    setUnansweredQuestions(remainingQuestions);
  };

  const handleAnswerSubmit = () => {
    if (answer.toLowerCase() === correctAnswer) {
      toast.success('Congratulations! Your answer is correct.');
      setAnswer('');
      loadNextQuestion();
    } else {
      toast.error('Sorry, that is incorrect. Try again.');
    }
  };

  return (
    <div>
      <Header />
      <div>
        {selectedImage && <img src={selectedImage.src} alt="Random Question" />}
        <div>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer"
          />
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Ap_practice;