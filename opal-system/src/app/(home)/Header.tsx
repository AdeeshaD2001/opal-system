import Link from "next/link";
import {FaUserCircle} from 'react-icons/fa';
//import {MdDarkMode} from 'react-icons/md';

const Header = () => {
  return (
    <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
        <div className='flex items-center w-full md:2/3'>
            <Link href= "/" className="font-black text-[#8B4513] text-4xl">
                Hotels
            </Link>
            <ul className="flex items-center ml-5">
                
                {/* <li className="ml-2">
                    <MdDarkMode className="cursor-pointer"/>
                </li> */}
            </ul>
        </div>

        <ul className='flex item-center justify-between w-full md:w-1/3 mt-4'>
            <li className="hover:-translate-y-2 duration-500 transition-all"> 
                <Link href='/'>Home</Link>
            </li>
            <li className="hover:-translate-y-2 duration-500 transition-all"> 
                <Link href='/'>Rooms</Link>
            </li>
            <li className="hover:-translate-y-2 duration-500 transition-all"> 
                <Link href='/'>Contact</Link>
            </li>
            <li className="flex items-center">
                <Link href='/'>
                    <FaUserCircle className="curser-pointer"/>                   
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header