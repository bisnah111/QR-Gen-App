import { useEffect, useState } from 'react'; 
import './App.css'; 

function App() { 
  
const [temp, setTemp] = useState(""); 
const [word, setWord] = useState(""); 
const [qrCode, setQrCode] = useState(""); 

//QR generate API
useEffect(() => { 
	setQrCode 
(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=200x200`); 
}, [word]); 

//Generate button
function handleClick() { 
	setWord(temp); 
} 

return ( 
	<div className = "App" > 
	<h1>Text to QR Convertor</h1> 
  
	<div className = "input-box" > 
		<div className = "gen" > 
		<input type = "text" onChange={ 
			(e) => {setTemp(e.target.value)}} 
			placeholder = "Enter text to convert" /> 
		</div>
	</div> 

  <div className = "button" >
    <button
			onClick = {handleClick} > 
			Generate 
		</button> 
  </div>

	<div className = "output-box" >  
    <a href = {qrCode} rel = "noreferrer" >
        <img src = {qrCode} alt = "" ></img>
      </a>
	</div> 

	</div> 
); 
} 

export default App;