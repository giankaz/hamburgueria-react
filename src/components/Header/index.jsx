import Filter from './Filter'
import './style.css'
import bk from './bk.svg'

export default function Header ({setInputValue, inputValue, list, setList, copy, setCopy}) {


    return (
        <header className="App-header">
            <div className="header">
                <img src={bk} alt="BurgerKenzie" />
                <Filter setInputValue={setInputValue}  inputValue={inputValue} list={list} setList={setList} copy={copy} setCopy={setCopy}/>
            </div>
        </header>
    )
}
