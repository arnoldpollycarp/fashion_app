import React from 'react'
import image1 from '../assets/hero_9.png'
import image2 from '../assets/hero_6.png'
import image3 from '../assets/hero_5.png'
import image4 from '../assets/hero_5.png'
import image5 from '../assets/hero_5.png'
import Slider from 'react-slick'
import image_prod1 from '../assets/products/product_1.png'
import image_prod2 from '../assets/products/product_2.png'
import image_prod3 from '../assets/products/product_3.png'
import image_prod4 from '../assets/products/product_4.png'
import image_prod5 from '../assets/products/product_5.png'
import image_prod6 from '../assets/products/product_6.png'
import { FaStar } from "react-icons/fa";
import image_2 from '../assets/hero_2.png'
import { GrSecure, GrSwim, GrRun } from "react-icons/gr";

export default function Home() {
  // hero section list 
  const imgList = [
    {
      id: 1,
      image: image1,
      title: "women banner",
      description: "Something cool about this image",
    },
    {
      id: 2,
      image: image2,
      title: "Men banner",
      description: "Something cool about this image",
    },
    {
      id: 3,
      image: image3,
      title: "something about the banner banner",
      description: "Something cool about this image",
    }

  ]

  var settings_1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // product section 
  const ProductList = [
    {
        id: 1,
        image: image_prod1,
        rating: 5.0,
        title: "product 1",
        description: "Something dope about the product",
        price: 5.0
    },
    {
      id: 2,
      image: image_prod2,
      rating: 5.0,
      title: "product 2",
      description: "Something dope about the product",
      price: 5.0
  },
  {
    id: 3,
    image: image_prod3,
    rating: 5.0,
    title: "product 3",
    description: "Something dope about the product",
    price: 5.0
},
    {
      id: 4,
      image: image_prod4,
      rating: 5.0,
      title: "product 4",
      description: "Something dope about the product",
      price: 5.0
  },
  {
    id: 5,
    image: image_prod5,
    rating: 5.0,
    title: "product 5",
    description: "Something dope about the product",
    price: 5.0
},
{
  id: 6,
  image: image_prod6,
  rating: 5.0,
  title: "product 6",
  description: "Something dope about the product",
  price: 5.0
}

]


// subscriber section image styling 
const BannerImg = {
  backgroundImage: `url(${image_2})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  height: "100%",
  width: "100%"
}


// testimonies section details 
const testimonialData = [
  {
      id: 1,
      name: "Arnold",
      text: "I was impressed by the timely deliver or",
      image: image1
  },
  {
      id: 2,
      name: "Mose",
      text: "I was impressed by the timely deliver or",
      image: image2
  },
  {
      id: 3,
      name: "Arnold_2",
      text: "I was impressed by the timely deliver or", 
      image: image3
  },
  {
      id: 4,
      name: "Arnold_3",
      text: "I was impressed by the timely deliver or", 
      image: image4
  },
  {
      id: 5,
      name: "Arnold_4",
      text: "I was impressed by the timely deliver or", 
      image: image5
  },
]

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}; 
  return (
    <div>
      {/* hero section  */}
      <div className="overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center text-black">
      {/* background pattern */}
      <div className="h-[800px] w-[700px] rounded-3xl rotate-45 absolute -top-1/2 -z-10 right-0 bg-indigo-500">

      </div>
      {/* hero section */}
      <div className="container pb-2 sm:pb-0">
      <Slider {...settings_1}> 
      { imgList.map((item) =>(
        <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className='flex flex-col justify-center gap-4 pt-32 sm:pt-0 text-center order-2 sm:order-1 relative'>
            <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-5xl sm:mt-12 font-extrabold py-3 font-mono">
              {item.title}
            </h1>
            <p data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" className="font-mono">{item.description}</p>
            <div>
              <button className="bg-gradient-to-r from-indigo-600 to-indigo-300 hover:scale-105 duration-200 rounded-full text-white py-2 px-4">Order Now</button>
            </div>
          </div>
          {/* image section */}
          <div className='order-1 order-2'>
            <div>
              <img src={item.image} alt="" className="w-[200px] h-[300px] sm:w-[450px] sm:h-[450px] object-contain
              sm:scale-125 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      )
      ) }
      </Slider>
      </div>
    </div>


    {/* product section  */}
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p className='text-sm text-indigo-600'>Top selling products for you</p>
            <h1 className='font-extrabold text-3xl'>Products</h1>
            <p className='text-xs text-gray-400'>These are the top selling product for you</p>
        </div>
        {/* Body section */}
        <div>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>
                {/* card section */}
                {
                  ProductList.map((data) => (
                    <div
                      data-aos="fade-up" data-aos-delay={data.aosDelay}
                    
                    key={data.id} className='pb-10'>
                      <img src={data.image} alt='product image' 
                      className='h-[250px] w-[230px] object-cover rounded-md'/>
                      <div>
                       <div className='flex items-center gap-10'>
                         <h1 className='text-semibold text-sm'>{data.title}</h1>
                         <p className='text-indigo-500'>Ksh. {data.price}</p>
                       </div>
                        <p className='text-semibold text-xs text-gray-500'>{data.description}</p>
                        <div className='flex items-center gap-3'>
                          <FaStar className='text-yellow-400'/> 
                          <p>{data.rating}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
            </div>
            {/* view all button  */}
        <div className='flex justify-center'>
          <button className='bg-gradient-to-r from-indigo-600 to-indigo-300 hover:scale-105 duration-200 rounded-full text-white py-2 px-4'>
            View All Products
          </button>
        </div>
        </div>

        {/* Top roduct section  */}
        <div className='container max-w-[1240px] mx-auto '>
        {/* Header section */}
        <div className='text-left mb-24 max-w-[600px] mx-2'>
            <p className='text-sm text-indigo-600'>Top Rated products for you</p>
            <h1 className='font-extrabold text-3xl'>Best Products</h1>
            <p className='text-xs text-gray-400'>These are the top selling product for you</p>
        </div>
        {/* body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 md:gap-5 place-items-center'>
          {
            ProductList.map((item) => (
                <div data-aos='zoom-in' className='rounded-2xl bg-white hover:bg-black hover:text-white relative shadow-xl
                duration-300 group max-w-[400px] mt-10'>
                    {/* image section  */}
                    <div className='h-[100px]'>
                        <img src={item.image} alt="Top Rated image" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 
                        duration-300 drop-shadow-md'/>
                    </div>
                    {/* details section  */}
                    <div className='p-4 text-center'>
                        {/* star rating  */}
                        <div className='w-full flex gap-1 items-center justify-center'>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                            <FaStar className='text-yellow-400'/>
                        </div>
                        <h1 className='text-xl font-bold font-mono'>{item.title}</h1>
                        <p className='text-sm text-gray-500 font-mono line-clamp-2'>{item.description}</p>
                        <button className='bg-gradient-to-r from-indigo-600 to-indigo-300 hover:scale-105 duration-200 rounded-full text-white py-2 px-4'>Order Now</button>
                    </div>
                </div>
            ))
          }
        </div>
        {/* view all button  */}
        <div className='flex justify-center'>
          <button className='bg-gradient-to-r from-indigo-600 to-indigo-300 hover:scale-105 duration-200 rounded-full text-white py-2 px-4'>
            View All Products
          </button>
        </div>
      </div>

      {/* banner section  */}
      <div className='min-h-[550px] max-w-[1240px] mx-auto flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center">
            {/* image section  */}
            <div data-aos="zoom-in">
                <img src={image2} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-2xl'/>
            </div>

            {/* text details  */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    Hot sales upto 50% off
                </h1>
                <p className=' text-sm text-gray-500 tracking-wide leading-5'>
                    something about the sale offer
                </p>
                <div data-aos="fade-up" data-aos-delay="400" className=' flex items-center gap-2'>
                    <GrSecure className=' text-indigo-900 text-4xl shadow-sm p-3 rounded-full bg-indigo-300'/>
                    <p className=' text-gray-600'>we are a secure platform to deal with</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className=' flex items-center gap-2'>
                    <GrRun className='text-indigo-900 text-4xl shadow-sm p-3 rounded-full bg-indigo-300'/>
                    <p className=' text-gray-600'>we are a secure platform to deal with</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className=' flex items-center gap-2'>
                    <GrSwim className='text-indigo-900 text-4xl shadow-sm p-3 rounded-full bg-indigo-300'/>
                    <p className=' text-gray-600'>we are a secure platform to deal with</p>
                </div>
            </div>
        </div>
      </div>
    </div>

    {/* subscriber section  */}
    <div className='bg-gray-100' style={BannerImg}>
      <div className='container backdrop-blur-[2px] max-w-[1240px] mx-auto'>
      <div className='space-y-6 max-w-xl mx-auto p-2'>
        <h1 className=' text-2xl text-center sm:text-left sm:text-4xl font-semibold'>
        Be notified on our new additions
        </h1>
        <input type="text" placeholder='enter you email' className=' w-full p-3 rounded-md'/>
       </div>
      </div>
    </div>


    {/* testimonies section   */}
    <div>
        {/* head section  */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p className='text-sm text-indigo-600'>Satisfied Clients</p>
            <h1 className='font-extrabold text-3xl'>Testimonies</h1>
            <p className='text-xs text-gray-400'>Hear what our beloved clients have to say about the service</p>
        </div>
        {/* body section  */}
        <div className='max-w-[1240px] mx-auto'>
            <Slider {...settings}>
                {
                    testimonialData.map((item) => (
                       <div className='my-2'>
                            <div 
                        key={item.id}
                        className='flex flex-col gap-2 shadow-lg py-8 px-6 mx-4 rounded-md bg-indigo-200 relative'>
                            <div className=''>
                                <img src={item.image} alt="" className='rounded-full w-20 h-20'/>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm text-gray-600 font-mono'>{item.text}</p>
                                <h1 className='font-bold text-black'>{item.name}</h1>
                            </div>
                            <p className='absolute top-0 right-0 text-9xl font-serif text-gray-500'>
                                ”
                            </p>
                        </div>
                       </div>
                        
                    ))
                }
            </Slider>
        </div>
      </div>

    </div>
  )
}
