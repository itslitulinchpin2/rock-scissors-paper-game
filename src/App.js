import './App.css';
import Box from './component/box'
import {useState} from 'react';


//1. 박스 2개(타이틀, 사진, 경기결과값)
//2. 가위 바위 보 버튼, 
//3. 클릭시 게임이 진행된다. 클릭한 값이 박스에 보임.
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3,4의 결과를 가지고 승패를 따진다.
//6. 승패 결과에 따라 박스 테두리 색상을 변경한다.(승-초록 패-빨강 비김-검정색)

function App() {

  //가위 바위 보 각자는 객체로 관리한다.
const choice = {
  rock:{
    name:"Rock",
    img:"https://toppng.com/uploads/preview/rock-paper-scissors-png-clipart-rock-paper-scissors-11563211310xieroclgnt.png"
  },
  scissors:{
    name:"Scissors",
    img:"https://www.creativefabrica.com/wp-content/uploads/2020/02/06/1580976980/Scissors.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://www.vhv.rs/dpng/d/535-5351099_rock-paper-scissors-rock-paper-scissors-icons-png.png"
  }
}

const [userSelect,setUserSelect]=useState(null);
const [computerSelect,setComputerSelect]=useState(null);

const play = (userChoice)=>{
  console.log(userChoice)
  setUserSelect(choice[userChoice])
  let computerChoice = randomChoice();
  setComputerSelect(choice[computerChoice])
}

const randomChoice = () => {
  
  let itemArray=Object.keys(choice)
  //itemArray=[rock,scissors,paper]
  //객체들의 키값만 뽑아 배열로 만들어준다.

  //컴퓨터에서 랜덤으로 값을 가져오는 방법?
  //Math.random()
  //0~1 사이의 값을 랜덤으로 반환한다.
  //Math.floor함수는 소숫점 이하를 버리고 정수만 남긴다.
  //randomItem은 결국 배열의 인덱스로 쓸 값임. 0에서 2 사이의 랜덤 정수값.
  let randomItem = Math.floor(Math.random()*itemArray.length)
  
  let final = itemArray[randomItem]
  return final;
}

  return (
  <div>
    <div className="main">
      <Box user="You" item={userSelect}></Box>
      <Box user="Computer" item={computerSelect}></Box>
    </div>
    <div className="main">
      <button onClick={()=>play("scissors")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>
    </div>
    
    
    </div>
  );
}

export default App;
