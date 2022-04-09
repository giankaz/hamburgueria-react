
import './style.css'

export default function Card ({className, name, category, id, price, img, addCart, removeCart}) {

  function build (cartName, cartCategory, cartImg, cartPrice, cartId) {
   
    const item = {
        name: cartName,
        category: cartCategory,
        img: cartImg, 
        price: cartPrice,
        id: cartId
    }

    return item

  }



    return (
        <li key={id} className={className}>
            <figure>
            <img src={img} alt={name} className="food" />
            </figure>
            <div className="info">
                <h3>{name}</h3>
                <span>{category}</span>
                <p>R$ {price.toFixed(2).replace('.', ',')}</p>
               
                {className === 'item' ? 
                <div className="remove">
                    <button onClick={() => {
                        removeCart(id)
                    }}>Remover</button>
                </div>
                :
                 <button onClick={() => {
                   const newItem = build(name, category, img, price, id)
                   addCart(newItem)
                 }}>Adicionar</button> }
                          
            </div>
        </li>
    )
}