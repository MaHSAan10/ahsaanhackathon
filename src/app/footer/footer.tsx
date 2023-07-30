import Style from './footer.module.css';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
export default function Footer() {
    return (
        <div>
            <div className={Style.footer}>
                <div className={Style.footerLogo}>
                    <div className={Style.logo}>
                        <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.83c5fd82.png&w=384&q=75" alt="" />
                    </div>
                    <div className={Style.logoContent}>
                        Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                    </div>
                    <div className={Style.socialMediaIcons}>
                        <div className={Style.twitter}><BsTwitter className={Style.logoImg} /></div>
                        <div className={Style.fb}><FaFacebookF className={Style.logoImg} /></div>
                        <div className={Style.insta}><AiFillInstagram className={Style.logoImg} /></div>
                    </div>
                </div>
                <div className={Style.company}>
                    <h1>Company</h1>
                    <ul>
                        <li>About</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Hows it Works</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={Style.support}>
                    <h1>Support</h1>
                    <ul>
                        <li>Support Carrer</li>
                        <li>24h Service</li>
                        <li>Quick Chat</li>
                    </ul>
                </div>
                <div className={Style.contact}>
                    <h1>Contact</h1>
                    <ul>
                        <a href="https://api.whatsapp.com/send?phone=+923114048414"><li>Whatsapp</li></a>
                        <li>Support 24h</li>
                    </ul>
                </div>
            </div>
            <div className={Style.footContent}>
                <div className={Style.copyWrite}>
                    Copywrite &copy; 2022 Dine Market
                </div>
                <div className={Style.designBy}>
                    Design by. <span>Weird Design Studio</span>
                </div>
                <div className={Style.codeBy}>
                  <a href="https://github.com/MaHSAan10/ahsaanhackathon">Code by. <span>MaHSAan10</span></a>  
                </div>
            </div>
        </div>
    )
}