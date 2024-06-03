"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import dynamic from 'next/dynamic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import question1 from '../../../public/ApPracQuestions/question1.webp';
import question2 from '../../../public/ApPracQuestions/question2.webp';
import question3 from '../../../public/ApPracQuestions/question3.webp';
import question4 from '../../../public/ApPracQuestions/question4.webp';
import question5 from '../../../public/ApPracQuestions/question5.webp';
import question6 from '../../../public/ApPracQuestions/question6.webp';
import question7 from '../../../public/ApPracQuestions/question7.webp';
import question8 from '../../../public/ApPracQuestions/question8.webp';
import question9 from '../../../public/ApPracQuestions/question9.webp';



const success = "../ApPracQuestions/success.mp4";

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9];
const answers = ['b', 'e', 'a', 'a', 'd', 'a', 'c', 'a', 'a']; // Answer key

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Ap_practice = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [unansweredQuestions, setUnansweredQuestions] = useState([...questions.keys()]);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  useEffect(() => {
    loadNextQuestion();
  }, []);

  const loadNextQuestion = () => {
    if (unansweredQuestions.length === 0) {
      toast.success('Congratulations! You have completed all questions.');
      setAllQuestionsAnswered(true);
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
    if (selectedOption === correctAnswer) {
      toast.success('Congratulations! Your answer is correct.');
      setSelectedOption('');
      loadNextQuestion();
    } else {
      toast.error('That answer is incorrect. Try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="text-center center">
        {allQuestionsAnswered ? (
          <div className="flex md:mt-20">
            <ReactPlayer className="" url={success} playing={true} controls={false} />
          </div>
        ) : (
          <>
            {selectedImage && <img src={selectedImage.src} alt="Random Question" />}
            <div>
              <div>
                {['a', 'b', 'c', 'd', 'e'].map(option => (
                  <label key={option} style={{ marginRight: '10px' }}>
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    {option.toUpperCase()}
                  </label>
                ))}
              </div>
              <div>
                <button className="p-2 mt-3 text-sm text-white duration-300 md:hover:-translate-y-0.5 md:hover:bg-cyan-700 rounded-2xl bg-slate-800" onClick={handleAnswerSubmit}>Submit Answer</button>
              </div>
            </div>
            <ToastContainer theme="colored" autoClose={1500}/>
          </>
        )}
      </div>
    </div>
  );
};

export default Ap_practice;
