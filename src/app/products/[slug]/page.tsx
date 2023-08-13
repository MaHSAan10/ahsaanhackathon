'use client'
import products from "@/app/utils/mock";
import Style from "./details.module.css";
import { BiCart } from 'react-icons/bi';
import { use, useState } from "react";


let cartProducts: any = [];
function productData(data: any) {
    slug: data.slug
}
export async function generateStaticParams() {
    return products.map(productData)
}
type productDetails = {
    params: {
        slug: string
    }
}
let arr: any = [];


export default function Details({ params }: productDetails) {
    const data: any = products.find((value) => {
        return value.slug == params.slug
    })
    const [initial, after] = useState(cartProducts)
    
    function updateData() {
        cartProducts.push(data);
        after(cartProducts)
        arr=initial;
        updateArr()
        alert("Added Successfully");
    }

    let price = data.price;
    let [oldPrice, updatePrice] = useState(price);
    const increasePrice = () => {
        updatePrice(oldPrice + price);
    }
    const decreasePrice = () => {
        updatePrice(oldPrice - price)
        if (oldPrice <= price) updatePrice(price)
    }
    let [num, update] = useState(1);
    const increaseQuantity = () => {
        update(num + 1);
    }
    const decreaseQuantity = () => {
        update(num - 1);
        if (num <= 1) update(num = 1);
    }
    return (
        <div className={Style.details_Main}>
            <div className={Style.productNameMobile}>{data.name}</div>
            <div className={Style.productTypeMobile}>{data.cloth_Type}</div>
            <div className={Style.detailsImages}>

                <div className={Style.shortImage}>
                    <img src={data.image} alt="" width={120} height={120} />
                </div>
                <div className={Style.bigImage}>
                    <img src={data.image} alt="" width={550} height={520} />
                </div>
            </div>

            <div className={Style.order}>
                <div className={Style.productName}>{data.name}</div>
                <div className={Style.productType}>{data.cloth_Type}</div>
                <div className={Style.selectSize}>
                    <h1>Select Size</h1>
                    <div className={Style.sizeButtons}>
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                </div>
                <div className={Style.selectQuantity}>
                    <h2>Quantity</h2>
                    <button onClick={() => { decreaseQuantity(), decreasePrice() }}><p>-</p></button>
                    <p>{num}</p>
                    <button onClick={() => { increaseQuantity(), increasePrice() }}><p>+</p></button>
                </div>
                <div className={Style.totalPrice}>
                    <h3>Total: </h3>
                    <p className={Style.price}>${oldPrice}.00</p>
                </div>
                <div onClick={() => { updateData() }} className={Style.cartButton}>
                    <BiCart className={Style.CartLogo} />
                    <p>Add to Cart</p>
                </div>
            </div>
        </div>
    )
}
export function updateArr() {
    return arr;
}


