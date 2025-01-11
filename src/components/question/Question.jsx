import styles from"./Question.module.css";
import{TiTickOutline}from"react-icons/ti";

export const Question=({index,data,selectedAnswer,correctAnswer,onAnswerSelected})=>{
  const{question,choices}=data;
  return(
    <div key={index} className={styles.questionDiv}>
      <p className={styles.question}>
        {index+1}. {question}
      </p>
      <ul className={styles.options}>
        {choices.map((option,idx)=>{
          const isCorrect=option===correctAnswer;
          const isSelected=selectedAnswer===option;
          let optionClass=styles.option;
          let icon=null;
          if(isSelected){
            if(isCorrect){
              optionClass=styles.correctOption;
              icon=<TiTickOutline style={{fontSize:"20px",color:"green"}} />;
            }else{
              optionClass=styles.incorrectOption;
            }
          }else if(isCorrect){
            optionClass=styles.correctOption;
            icon=<TiTickOutline style={{fontSize:"20px",color:"green"}} />;
          }
          return(
            <li
              key={idx}
              className={optionClass}
              onClick={()=>onAnswerSelected(index,option)}
            >
              {option}&nbsp;
              {icon}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
