'use client'
import { use, useState } from "react";
import Style from './navbar.module.css';
import { BiCart } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from "next/link";


export default function Navbar() {
    const [now, update] = useState('now');
    const before = (
        <header className={Style.navbar}>
            <nav>
                <Link href={''}><img className={Style.mainlogo} src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83c5fd82.png&w=384&q=75" alt="" /></Link>
                <ul className={Style.navitems}>
                    <Link legacyBehavior href={'/female'}><a href="#">Female</a></Link>
                    <Link legacyBehavior href={'/male'}><a href="#">Male</a></Link>
                    <Link legacyBehavior href={'/kids'}><a href="#">Kids</a></Link>
                    <Link legacyBehavior href={'/allProducts'}><a href="#">All Products</a></Link>
                </ul>
                <div className={Style.input}>
                    <AiOutlineSearch className={Style.search}/>
                    <input className={Style.navinput} type="text" placeholder="What you looking for" />
                </div>

                <div className={Style.cartlogo}><BiCart className={Style.cart} /></div>
                <button className={Style.ham} onClick={() => update(now === 'now' ? 'mobile' : 'now')}>
                    <GiHamburgerMenu className={Style.hambutton} />
                </button>
            </nav>
        </header>
    );

    const after = (
        <div className={Style.mobile}>
            <div className={Style.mobilenav}>
                <Link href={''}><img className={Style.mainlogo} src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83c5fd82.png&w=384&q=75" alt="" /></Link>
                <button className={Style.ham} onClick={() => update(now === 'now' ? 'mobile' : 'now')}>
                    <RxCross2 className={Style.hambutton} />
                </button>
            </div>
            <div className={Style.cartlogomobile}><BiCart className={Style.cart} /></div>
            <ul>
                <Link legacyBehavior href={'/female'}><a href="#" onClick={() => update('now')}>Female</a></Link>
                <Link legacyBehavior href={'/male'}> <a href="#" onClick={() => update('now')}>Male</a></Link>
                <Link legacyBehavior href={'/kids'}><a href="#" onClick={() => update('now')}>Kids</a></Link>
                <Link legacyBehavior href={'/allProducts'}><a href="#" onClick={() => update('now')}>All Products</a></Link>
            </ul>
        </div>
    );
    return (
        <div>
            {now === 'now' ? before : after}
        </div>
    )
}