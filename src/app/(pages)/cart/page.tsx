'use client'
import React, { useState, useEffect } from 'react';
import { updateArr } from "@/app/products/[slug]/page"

const Cart = () => {
    const [old, update] = useState<any[]>([]);
    function updateNewData() {
        const updatedDataArray = updateArr();
        update(updatedDataArray);  
    }
    useEffect(() => {
        updateNewData();
    }, []);
    console.log(old);
    let dataArray=old.filter((item)=>{return item});
    const cartData = (item: any) => {

        return (
            <div className="cart">
                <div className="cartImg">
                    <img src={item.image} alt="" />
                </div>
                <div className="cartContent">
                    <h1>{item.name}</h1>
                    <h2>{item.category}</h2>
                    <p>{item.price}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="cartMain">
            <h1>Shopping Cart</h1>
            <div className="content">
                <div className="carts">
                    {dataArray.map(cartData)}
                </div>
                <div className="summary">

                </div>
            </div>

        </div>
    )
}
export default Cart