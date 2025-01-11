import{useState}from"react";
import styles from"./ReviewScreen.module.css";
import appStyles from"../../App.module.css";
import {quizData}from"../../utils/quizData";
import {InfoToolTip}from"../../components/toolTip/InfoToolTip";
import {Question}from"../../components/question/Question";
import cx from"classnames";

export const ReviewScreen=({setIsRetake})=>{
  const {questions}=quizData;

  const [userAnswers,setUserAnswers]=useState(()=>{

    return questions.map(()=>null);
  });

  const handleAnswerSelection=(questionIndex,selectedAnswer)=>{
    const updatedAnswers=[...userAnswers];
    updatedAnswers[questionIndex]=selectedAnswer;
    setUserAnswers(updatedAnswers);
  };

  return(
    <div className={cx(appStyles.fadeInRight,styles.reviewScreenWrapper)}>
      <div className={styles.reviewScreen}>
     
        <div className={styles.columnContainer}>
          {questions.map((data,index)=>(
            <div className={styles.column} key={index}>
              <Question
                index={index}
                data={data}
                selectedAnswer={userAnswers[index]} 
                correctAnswer={data.correctAnswer} 
                onAnswerSelected={handleAnswerSelection} 
              />
            </div>
          ))}
        </div>

        <div className={styles.btnDiv}>
          <InfoToolTip
            text="Click me to retake the quiz!"
            component={
              <button
                onClick={()=>{
                  setIsRetake(true);
                }}
                className={styles.retakeBtn}
              >
                Retake Quiz
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
};
