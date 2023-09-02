const questions = [
      {
    'ques':"What does HTML stand for?",
    'A':"Hyper Text Markup Language",
    'B':"High Technology Modern Language",
    'C':"Home Tool Markup Language",
    'D':"Hyperlink and Text Markup Language",
    'correct':"A",
      },
      {
        'ques':"Which CSS property is used to control the spacing between elements?",
        'A':"margin",
        'B':"padding",
        'C':"border",
        'D':"spacing",
        'correct':"B",
      },
      {
        'ques':"In JavaScript, which of the following functions is used to add a new element to the end of an array?",
        'A':"push()",
        'B':"append()",
        'C':"add()",
        'D':"insert()",
        'correct':"A",
      },
      {
        'ques':"What is the purpose of the viewport meta tag in HTML?",
        'A':"To specify the author of the webpage",
        'B':"To define the character encoding of the document",
        'C':"To control the layout and scaling of the webpage on different devices",
        'D':"To add a background image to the webpage",
        'correct':"C",
        
      },
      {
        'ques':"Which of the following is NOT a valid way to declare a variable in JavaScript?",
        'A':"var x = 5",
        'B':"let y = 10",
        'C':"const z = 15",
        'D':"variable w = 20",
        'correct':"D",
      }
]
let index =0;
const quesbox=document.getElementById("quesbox")
const optionInput=document.querySelectorAll('.options')
let total=questions.length;
let right=0;
let wrong =0;
const loadQues = () => {
  if(index === total){
    return endQuiz()
  }
  reset()
    const data = questions[index];
    console.log(data)
    quesbox.innerText = `${index+1}) ${data.ques}`;
    optionInput[0].nextElementSibling.innerText=data.A;
    optionInput[1].nextElementSibling.innerText=data.B;
    optionInput[2].nextElementSibling.innerText=data.C;
    optionInput[3].nextElementSibling.innerText=data.D;

}


const submitQuiz = ()=>{
  const data = questions[index];
   const ans=getAns()
   if(ans == data.correct){
    right++;
   }
   else{
    wrong++;
   }
   index++;
   loadQues();
   return ;
}

const getAns = () =>{
  let answer;
  optionInput.forEach(
    (input)=>{
      if(input.checked){
        answer = input.value
      }      
    }
  )
  return answer;
}
const reset = () => {
  optionInput.forEach(
    (input)=> {
      input.checked = false;
    }
  )
}
const endQuiz=()=>{
  document.getElementById("box").innerHTML=`
  <div style="text-align:center", "background-color:#a5b1c2">
  <h3>Thank You for playing</h3>
  <h2>You answered <span style="color:#26de81">${right} / ${total}</span> questions correctly.</h2>
  </div>`
}
loadQues();