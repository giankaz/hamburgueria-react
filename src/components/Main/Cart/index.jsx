import {useState, useEffect} from 'react'
import './style.css'
import Card from '../Card'

export default function Cart ({cartList, setCartList, removeCart, total, setTotal, empty}) {


    return (
        <section className="cart">
            <div className="cartName">
                <h2>Carrinho de Compras</h2>
            </div>
            {empty === false ? 
            <>
            <ul>
                {cartList.map((item) => {
                    const {name, id, category, price, img} = item
                    return <Card className="item" img={img} name={name} id={id} category={category} price={price} removeCart={removeCart}/>
                })}
            </ul>
                      <div className="footer">
                      <div className="result">
                          <h4>Total:</h4>
                          <p>R$ <span className="total">{total.toFixed(2)}</span></p>
                      </div>
                      <button onClick={() => {
                          setCartList([])
                          setTotal(0)
                          }}>Remover Todos</button>
                  </div>
          </>
            :
            
            <div className="empty">
                <h3>Sua Sacola está vazia</h3>
                <p>Adicione items</p>
            </div>
        

        }
  
            
        </section>
    )

}