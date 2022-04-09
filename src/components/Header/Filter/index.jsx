import './style.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Filter ({setInputValue, inputValue, list, setList, copy}) {

    const [nothing, setNothing] = useState(false)
    
    useEffect(() => {
        async function get () {
        const response = await axios.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
       
        const newArr = response.data.filter((value) => {
            if (value.name.toLowerCase().includes(inputValue.toLowerCase())) {
                return value
            } else if (value.category.toLowerCase().includes(inputValue.toLowerCase())) {
                return value
            } 
        })
        if (newArr.length > 0) {
            setList(newArr)
        } else {
            setNothing(true)
            setTimeout(() => setNothing(false), 2000)
        }
        }
        get()
    }, [inputValue])


    return (
        <form onSubmit={(event) => { 
            event.preventDefault()
        }} className="searchForm">
            <input type="text" className="searchBar" placeholder="Digitar Pesquisa" onChange={(event) => {
                setInputValue(event.target.value)  
                if (event.target.value === '') {
                    setList(copy)
                }
                }}/>
            <button>Pesquisar</button>
            {nothing && <p className="popUp">Nenhum item encontrado! <div className="seta"></div></p>}
        </form>
    )
 
    }