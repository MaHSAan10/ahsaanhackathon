import Image from 'next/image'
import products from './utils/mock';
import { BiCart } from 'react-icons/bi';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      {/* Home Main */}
      <div className="home">
        <div className="homeMain">
          <div className="mainContent">
            <div className="mainSaleButton">
              <p>Sale 70%</p>
            </div>
            <div className="mainHeading">
              An Industrail Take on Streetwear
            </div>
            <div className="mainPara">
              Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </div>
            <div className="startShoppingButton">
              <Link href={'/allProducts'}>
                <div className="startShoppingLogo">
                  <BiCart className='shoppingLogo' />
                </div>
                <p>Start Shoping</p>
              </Link>
            </div>
            <div className="brandsImages">
              <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.66abddd4.png&w=256&q=75" alt="" />
              <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero2.247cd605.png&w=256&q=75" alt="" />
              <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero3.6076521d.png&w=256&q=75" alt="" />
              <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero4.0489f1fc.png&w=256&q=75" alt="" />
            </div>
          </div>
          <div className="mainImage">
            <div className="mainImageBG">
            </div>
            <div className='image'>
              <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.a3d3ccd9.png&w=1920&q=75" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Promotions */}
      <div className="promotions">
        <h1>promotions</h1>
        <div className="promotionHeading">
          Our Promotions Events
        </div>
        <div className="promotionImages">
          <div className="flatImages">
            <div className='summerFlat'>
              <div className="summerFlatContent">
                <h2>get up to 60%</h2>
                <p>For the summer season</p>
              </div>
              <div className="summerFlatImage">
                <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromotion1.6f776995.png&w=640&q=75" alt="" />
              </div>
            </div>
            <div className='promoCode'>
              <h3>GET 30% Off</h3>
              <p>USE PROMO CODE</p>
              <a href="#">DINEWEEKENDSALE</a>
            </div>
          </div>
          <div className="discountImages">
            <div className="sweatShirt">
              <p>Flex Sweatshirt <br /> $100.00 <span>$75.00</span></p>
              <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromotion2.b5f201ac.png&w=640&q=75" alt="" />
            </div>
            <div className="buttonBomber">
              <p>Flex Push Button Bomber <br /> $225.00 <span>$190.00</span></p>
              <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromotion3.798fa92b.png&w=640&q=75" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Main Product */}
      <div className="mainProduct">
        <h1>products</h1>
        <div className="mainProdHeading">check what we have</div>
        <div className="mainProdImages">
          <div className="prodImg" id='img1'><img src="https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fa6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png%3Fw%3D400&w=1200&q=75" alt="" />
            <p>Brushed Raglan Sweatshirt <br /> $195</p>
          </div>
          <div className="prodImg" id='img2'><img src="https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fffc858fc182553bee2aaff34fe728bf07d15f2b5-278x296.png%3Fw%3D400&w=1200&q=75" alt="" />
            <p>Cameryn Sash Tie Dress <br /> $545</p>
          </div>
          <div className="prodImg" id='img3'><img src="https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fbf4d73c91b7c7c2875fbfbb8e1a9c8113c82e90a-370x394.png%3Fw%3D400&w=1200&q=75" alt="" />
            <p>Flex Sweatshirt <br /> $175</p>
          </div>
        </div>
        <div className="prodQuote">
          <p>Unique and Authentic Vintage Designer Jewellery</p>
        </div>
        <div className="prodQuality">
          <div className="prodQualityContent">
            <div className="prodQualityContentHeading">
              <h2>Different from others</h2>
            </div>

            <div className="qualitiesGrid">
              <div className="qualities">
                <h1>Using Good Quality Materials</h1>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div className="qualities">
                <h1>100% Handmade Products</h1>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div className="qualities">
                <h1>Modern Fashion Design</h1>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div className="qualities">
                <h1>Discount for Bulk Orders</h1>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="prodQualityImage">
            <div className="qualityImage">
              <img src="https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.1118a2f3.png&w=750&q=75" alt="" />
            </div>
            <div className="qualityImageContent">
              <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
              <Link href={'/allProducts'}>
                <div className="qualityImageButton">
                  See All Product
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* NewsLetter */}
      <div className="newsLetter">
        <div className="newsLetterBgHeading">
          <h2>Newsletter</h2>
        </div>
        <div className='newsLetterContent'><h1>Subscribe Our Newsletter</h1>
          <p>Get the latest information and promo offers directly</p>
          <div className="newsLetterInput">
            <input type="text" placeholder='Email' />
            <a href="#">Get Started</a>
          </div>
        </div>

      </div>
    </div>
  )
}
