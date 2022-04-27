import './Product.css';
import BuyMenu from './BuyMenu'
import BigImage from './BigImage';
import { useState } from 'react';



import Product1 from '../../images/image-product-1.jpg'
import Product1Thumb from '../../images/image-product-1-thumbnail.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product2Thumb from '../../images/image-product-2-thumbnail.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product3Thumb from '../../images/image-product-3-thumbnail.jpg'
import Product4 from '../../images/image-product-4.jpg'
import Product4Thumb from '../../images/image-product-4-thumbnail.jpg'



const Product = ({ produto, descricao, price }) => {

    const [bigImage, setBigImage] = useState(Product1);

    const isClassSelected = (n) => {
        ["#image1","#image2","#image3","#image4"].map((image) =>{
            return document.querySelector(image).classList.remove("selected")
        });
        if(n === 1){
            document.querySelector("#image1").classList.add("selected")
        }else if(n === 2){
            document.querySelector("#image2").classList.add("selected")
        }else if(n === 3){
            document.querySelector("#image3").classList.add("selected")
        }else if(n === 4){
            document.querySelector("#image4").classList.add("selected")
        }
    }

    const changeBigImage = (n) => {
        if(n === 1){
            setBigImage(Product1)
        }else if(n === 2){
            setBigImage(Product2)
        }else if(n === 3){
            setBigImage(Product3)
        }else if(n === 4){
            setBigImage(Product4)
        }
    }

    const scale = () =>{
        document.querySelector("#images").classList.toggle("scale");
        document.querySelector('#close').classList.toggle("hidden");
        document.querySelector('#body').classList.toggle('black')
        document.querySelector("#profile").classList.toggle("opacity")
    }

    const mouseClickOut = () => {
        document.querySelector("#close").addEventListener('click', () =>{
            document.querySelector("#images").classList.remove("scale")
            document.querySelector('#body').classList.remove('black')
            document.querySelector("#close").classList.add("hidden")
            document.querySelector("#profile").classList.remove("opacity")
        })
    }

    return (
        <div className='container' >
            <div className="images" id="images">
                <button className='hidden' id="close" onClick={mouseClickOut}>X</button>
                <div className="big-images">
                    <BigImage image={bigImage} scale={scale} />
                </div>
                <div className="small-images">
                    <img onClick={() => {changeBigImage(1); isClassSelected(1)}} src={Product1Thumb} alt="produto pequeno" id="image1" className='selected'/>
                    <img onClick={() => {changeBigImage(2); isClassSelected(2)}} src={Product2Thumb} alt="produto pequeno" id="image2"/>
                    <img onClick={() => {changeBigImage(3); isClassSelected(3)}} src={Product3Thumb} alt="produto pequeno" id="image3"/>
                    <img onClick={() => {changeBigImage(4); isClassSelected(4)}} src={Product4Thumb} alt="produto pequeno" id="image4"/>
                </div>
            </div>
            <div className="product-description">
                <h1>{produto}</h1>
                <p>{descricao}</p>
                <BuyMenu price={price}/>
            </div>
        </div>
    );
}
 
export default Product;