import React from 'react';
import LogoIcon from '../assets/logo.png';
import { RxTriangleRight } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";

    const BgNav ={       backgroundImage:"linear-gradient(to left, rgba(255, 255, 0, 0.571), #F5E4D5 , #6FFF70)",};
    const NavLinks=[
        {id:1,name:"Home",link:"#"},
        {id:2,name:"About",link:"#"},
        {id:3,name:"Contact",link:"#"},
    ];
    const DropLinks = [
        {id:1,dropName:"Link1",link:"#"},
        {id:2,dropName:"Link2",link:"#"},
        {id:3,dropName:"Link3",link:"#"},

    ]
    
    function ShowLinks(){
        const Category = document.getElementById('catg') ;
        Category.style.background = 'red';
    }
   
    


export const Navbar = () => {

  return (
    <>
    <div style={BgNav} className='shadow-sm shadow-black z-10'>
        <div  className='container mx-auto flex justify-around 2xl:justify-between items-center py-2'>
        <div>
            <a href="#" className='font-rubik font-bold flex lg:w-full lg:text-3xl max-sm:text-xl md:w-1/6 md:text-xl text-nowrap '>&lt; Begin <img src={LogoIcon} className='max-sm:w-8 md:w-5 lg:w-10' alt="" />Front &gt;</a>
        </div>
        <div className='lg:w-[50%] md:w-[70%] '>
            {/* links */}
            <ul  className='flex text-xs lg:text-xl max-lg:items-center 2xl:text-2xl justify-between font-hachi md:text-[17px]'>
              {
                NavLinks.map(({id,name,link})=>(
                    <li key={id} className='hover:scale-110 duration-200 max-sm:hidden' ><a href={link}>{name}</a></li>

                )
                )
              } 
              <li className='group'>
                <a id='catg' className='flex duration-200 max-lg:items-center max-sm:hidden' href="#">Category <RxTriangleRight className='lg:text-4xl md:text-2xl group-hover:rotate-0 rotate-90 duration-300'/> </a>

                {/* drop data section  */}
                <div className='absolute group-hover:block hidden duration-300 bg-white w-40'>
                    <ul>
                        {
                            DropLinks.map(({id,dropName,link})=>(
                                <li  className='my-2 p-[2px] hover:text-white text-center hover:bg-secondary  sm:hover:scale-105 2xl:hover:scale-110 duration-200' key={id}><a href={link}>{dropName}</a></li>
                            ))
                        }
                        <li></li>
                    </ul>
                </div>

                </li> 
               <li>
                <button className='2xl:text-2xl sm:text-[15px] lg:text-xl  rounded-md font-normal text-white p-1 font-light flex items-center bg-secondary  hover:scale-110 duration-200'><MdAccountCircle className='text-3xl'/>My Account</button>            
            </li> 
            </ul>
            
        </div>
        
            <button onClick={ShowLinks} className='hidden max-sm:block'><VscMenu className='text-3xl'/></button>
       
        
    </div>  
    </div>
  
    </>
  )
}
