"use client"

import React, { useState } from 'react';
import Header from '../components/header';
import { ToastContainer, toast } from 'react-toastify';
import dynamic from 'next/dynamic';

import question1 from '../../../public/ApPracQuestions/question1.webp';
import question2 from '../../../public/ApPracQuestions/question2.webp';
import question3 from '../../../public/ApPracQuestions/question3.webp';


const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const questions = [
  
];

function QuestionSetter() {
  // init video and init state of selected box
  const [imageFile, setImageFile] = useState(birdfiller);
  const [selectedImage, setSelectedImage] = useState(birdfiller);

  const switchQuestion = (newFile) => {
    setImageFile(newFile);
    setSelectedImage(newFile);
  };
};

function QuestionPicker() {
  const [num, setNum] = useState(0);
  setNum(randomNumberInRange(1, 3)) /* change second num to 10 */
  if (num === 1){

  }
};

const Ap_practice = () => {
  return (
    <div>
      <Header />

    <div>

    </div>

    </div>
  );
};

export default Ap_practice;