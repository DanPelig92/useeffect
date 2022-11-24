import Button from "./Button"
import {useState} from "react"
import {useEffect} from "react"

function App() {



const[content, setContent] = useState("");
useEffect(()=>{console.log("stringa")},[content])
const str = ['Utenti', 'Tweet', 'Commenti']

function show(stringhe){
  setContent(stringhe)
  console.log('aggiornato')
}

console.log('Componente caricata...')

  return (
    <div>
      <Button azione={() =>show(str[0])} nome="Utenti"/>
      <Button azione={() =>show(str[1])} nome="Tweet"/>
      <Button azione={() =>show(str[2])} nome="Commenti"/>
      <div>{content}</div>
    </div>
  );
}

export default App;
