import Link from "next/link";
import {FaBell, FaUserCircle} from 'react-icons/fa';

const Header = () => {
  return (
    <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
        <div className='flex items-center w-full md:2/3'>
            <Link href= "/" className="font-black text-[#8B4513] text-4xl">
                CeylonX Hotels
            </Link>
        </div>

        <ul className='flex item-center justify-between w-full md:w-1/3 mt-4'>
            <li className="hover:-translate-y-2 duration-500 transition-all"> 
                <Link href='/'>Home</Link>
            </li>
            <li className="hover:-translate-y-2 duration-500 transition-all"> 
                <Link href='/'>Hotels</Link>
            </li>
            <button className="bg-[#6b4f4f] text-white rounded h-12 px-6 mt-4 md:mt-0 transition duration-300 ease-in-out hover:bg-[#5a3e3e]">
                Sign In
            </button>
            {/* <li className="ml-2">
                    <FaBell className="cursor-pointer"/>
                </li> 
            <li className="flex items-center">
                <Link href='/'>
                    <FaUserCircle className="curser-pointer"/>                   
                </Link>
            </li> */}
            
        </ul>
    </header>
  )
}

export default Header