import { useState } from "react";
import Shopping from "../navbar/Shopping";
import './BuyMenu.css';

const BuyMenu = ({ price }) => {

    const [counter, setCount] = useState(0)

    const counterIncrease  = () => {
        setCount(counter + 1)
    }
    
    const counterDecrease = () => {
        if(counter <= 0) {
            setCount(0)
        }else {
            setCount(counter -1)
        }
        
    }   

    return (
        <div className="buy-menu">
            <span className="price">${price}</span>

            <div className="wrapper-add">
                <div className="count">
                    <button onClick={counterDecrease}>-</button>
                    <span>{counter}</span>
                    <button onClick={counterIncrease}>+</button>
                </div>
                
                <button className="add-cart">
                    <Shopping />
                    <p>Adicionar ao carrinho</p>
                </button>
            </div>
        </div>
    );
}
 
export default BuyMenu;