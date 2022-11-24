import Button from "./Button"
import {useState} from "react"
import {useEffect} from "react"

function App() {

const [content, setContent] = useState('users');
const [data, setData]=useState([])
const str = ['users', 'posts', 'photos']

useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/'+content)
.then((response) => response.json())
.then((json) => setData(json));},[content])

function show(stringhe){
  setContent(stringhe)
  console.log('aggiornato')
}

console.log('Componente caricata...')

  return (
    <div>
      <Button azione={() =>show(str[0])} nome="users"/>
      <Button azione={() =>show(str[1])} nome="posts"/>
      <Button azione={() =>show(str[2])} nome="photos"/>
      <div>{content}</div>
      <pre>{data.map((elemento)=><pre>{JSON.stringify(elemento)}</pre>)}</pre>
    </div>
  );
}

export default App;
