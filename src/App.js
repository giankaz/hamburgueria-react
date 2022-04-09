import './Reset.css'
import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Main from './components/Main'



function App() {
  const [list, setList] = useState([])
  const [copy, setCopy] = useState([])
  const [inputValue, setInputValue] = useState('')



  
  return (
    <div className="App">
      <Header setInputValue={setInputValue} inputValue={inputValue} list={list} setList={setList} copy={copy} setCopy={setCopy}/>
      
      <div className="Site">
        <Main list={list} setList={setList} setCopy={setCopy}/>
      </div>
    </div>
  )
}

export default App;
