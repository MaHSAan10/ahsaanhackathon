'use client'
import { use, useState } from "react";
import Style from './navbar.module.css';
import { BiCart } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from "next/link";


export default function Navbar() {
    const [now, update] = useState('before');
    const before = (
        <header className={Style.navbar}>
            <nav>
                <Link href={'#'}><img className={Style.mainlogo} src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83c5fd82.png&w=384&q=75" alt="" /></Link>
                <ul className={Style.navitems}>
                    <Link href={'/female'}> <li>Female</li> </Link>
                    <Link href={'/male'}> <li>Male</li></Link>
                    <Link href={'/kids'}> <li>Kids</li> </Link>
                    <Link href={'/allProducts'}> <li>All Products</li> </Link>
                </ul>
                <div className={Style.input}>
                    <AiOutlineSearch className={Style.search} />
                    <input className={Style.navinput} type="text" placeholder="What you looking for" />
                </div>

                <div className={Style.cartlogo}><BiCart className={Style.cart} /></div>
                <button className={Style.ham} onClick={() => update(now === 'before' ? 'after' : 'before')}>
                    <GiHamburgerMenu className={Style.hambutton} />
                </button>
            </nav>
        </header>
    );

    const after = (
        <div className={Style.mobile}>
            <div className={Style.mobilenav}>
                <Link href={'#'}><img onClick={() => update('before')} className={Style.mainlogo} src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83c5fd82.png&w=384&q=75" alt="" /></Link>
                <button className={Style.ham} onClick={() => update(now === 'after' ? 'before' : 'after')}>
                    <RxCross2 className={Style.hambutton} />
                </button>
            </div>
            <div className={Style.cartlogomobile}><BiCart className={Style.cart} /></div>
            <ul>
                <Link href={'/female'}><li onClick={() => update('before')}>Female</li></Link>
                <Link href={'/male'}> <li onClick={() => update('before')}>Male</li></Link>
                <Link href={'/kids'}><li onClick={() => update('before')}>Kids</li></Link>
                <Link href={'/allProducts'}><li onClick={() => update('before')}>All Products</li></Link>
            </ul>
        </div>
    );
    return (
        <div>
            {now === 'before' ? before : after}
        </div>
    )
}