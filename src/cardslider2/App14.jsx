import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App14 = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    let data=[
        {
            name:'hritik roshan',
            img:'https://picsum.photos/id/237/200/300',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime'
        },
        {
            name:'sushant kumar',
            img:'https://picsum.photos/id/238/200/300',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime '
        },
        {
            name:'Rohit Sharma',
            img:'https://picsum.photos/id/239/200/300',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime '
        },
        {
            name:'Virat kohli',
            img:'https://picsum.photos/id/240/200/300',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime '
        },
        {
            name:'Will Jacks',
            img:'https://picsum.photos/id/241/200/300',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime '
        },
        {
            name:'D. Paddikal',
            img:'https://picsum.photos/id/242/200/300',
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime'
        },
    
    ];


  return (
    <div className='w-3/4 m-auto text-white'>
        <div className='mt-20'>
        <Slider {...settings}>
           {data.map((d)=>(
            <div className='bg-white h-[450px] text-black rounded-xl'>
                <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                  <img src={d.img} alt="" className='h-44 w-44 rounded-full'/>  
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-xl font-semibold'>{d.name}</p>
                    <p className='px-10 text-center'>{d.review}</p>
                    <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>

                </div>
            </div>
           ))} 
          </Slider>
        </div>
    </div>
  )
}

export default App14