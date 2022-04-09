import {useState, useEffect} from 'react'
import './style.css'
import Card from './Card'
import Cart from './Cart'
import axios from 'axios'
export default function Main ({list, setList, setCopy}) {

    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0)
    const [onCart, setOnCart] = useState(false)

    useEffect(() => {
        async function get () {
        const response = await axios.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
        setList(response.data)
        setCopy(response.data)
        }
        get()
    }, [])

     function addCart (item) {
        let check = false
        cartList.forEach((value) => {
            if (value.id === item.id) {
                check = true
            }
        })
        if (check) {
            setOnCart(true)
        } else  {
            setCartList([...cartList, item])
            setTotal(total + item.price)
            
        }
    } 

    function removeCart (id) {
  
      const newList = cartList.filter((value) => {
            if (value.id !== id) {
                return value
             } else {
                 setTotal(total - value.price)
             }
        })
        setCartList(newList)

    }


    return (
        <main>
          <ul className="container">
            {list && list.map((item) => {
                const {name, id, category, price, img} = item
                return <Card className="card" img={img} name={name} id={id} category={category} price={price} addCart={addCart} setTotal={setTotal}/> 
            })}
          </ul>
            {cartList.length > 0 ? 
            <Cart cartList={cartList} setCartList={setCartList} removeCart={removeCart} setTotal={setTotal} total={total} empty={false}/>
            : 
            <Cart cartList={cartList} setCartList={setCartList} removeCart={removeCart} setTotal={setTotal} total={total} empty={true}/>

        }
            {onCart && <div className='modal'><div className='modalDiv'>Item já se encontra no carrinho! <button className='close' onClick={() => setOnCart(false)}>x</button></div></div>}
        </main>
    )

}