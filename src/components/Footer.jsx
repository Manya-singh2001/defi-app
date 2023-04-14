import React from 'react'
import {
  FaAmazonPay,
  FaTwitter,
  FaApplePay,
  FaBitcoin,
  FaGooglePay,
  FaTelegram,
  FaStripe,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5'>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Products</h3>
                <ul>
                    <li className='cursor-pointer hover:text-blue-500'>App</li>
                    <li className='cursor-pointer hover:text-blue-500'>Analytics</li>
                    <li className='cursor-pointer hover:text-blue-500'>Token List</li>
                    <li className='cursor-pointer hover:text-blue-500'>Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Developers</h3>
                <ul>
                    <li className='cursor-pointer hover:text-blue-500'>App</li>
                    <li className='cursor-pointer hover:text-blue-500'>Analytics</li>
                    <li className='cursor-pointer hover:text-blue-500'>Token List</li>
                    <li className='cursor-pointer hover:text-blue-500'>Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Governance</h3>
                <ul>
                    <li className='cursor-pointer hover:text-blue-500'>App</li>
                    <li className='cursor-pointer hover:text-blue-500'>Analytics</li>
                    <li className='cursor-pointer hover:text-blue-500'>Token List</li>
                    <li className='cursor-pointer hover:text-blue-500'>Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Community</h3>
                <ul>
                    <li className='cursor-pointer hover:text-blue-500'>App</li>
                    <li className='cursor-pointer hover:text-blue-500'>Analytics</li>
                    <li className='cursor-pointer hover:text-blue-500'>Token List</li>
                    <li className='cursor-pointer hover:text-blue-500'>Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>About</h3>
                <ul>
                    <li className='cursor-pointer hover:text-blue-500'>App</li>
                    <li className='cursor-pointer hover:text-blue-500'>Analytics</li>
                    <li className='cursor-pointer hover:text-blue-500'>Token List</li>
                    <li className='cursor-pointer hover:text-blue-500'>Defi</li>
                </ul>
            </div>
            <div className='flex justify-between mt-8 sm:w-[300px] pt-4 text-2xl'>
            <FaStripe className='cursor-pointer hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaGooglePay className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaTwitter className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaTelegram className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaAmazonPay className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaApplePay className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
            <FaBitcoin className='cursor-pointer  hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300' />
        </div>
        </div>
    </div>
  )
}

export default Footer