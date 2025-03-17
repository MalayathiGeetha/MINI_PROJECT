import React from 'react'
import { FaMapPin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-8 bg-neutral-200/60 dark:bg-neutral-900/70">
      <div className="grid grid-cols-8 gap-1">

        <div className="space-y-5 col-span-4">
          <Link to="/" className='text-xl text-neutral-800 dark:text-neutral-200 font-bold'>
          <img src={Logo} alt="logo" className="w-20 h-auto object-contain rounded-full" />

          </Link>
          <p className="text-base font-normal pr-10">
          Train Ticket Reservation System is your go-to solution for a seamless and convenient train travel experience. Whether you're commuting for work or planning a vacation, our platform offers an effortless way to book, modify, or cancel tickets anytime, anywhere. With real-time seat availability, instant e-ticket generation, and secure payment options, you can plan your journey with confidence. We cover major routes and cities, ensuring a wide range of travel options to suit your needs.</p>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">About Us</h1>
          <ul className="space-y-2 text-base font-normal">
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>About Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Contact Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Privacy Policy</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h1 className="text-lg font-medium">Services</h1>
          <ul className="space-y-2 t text-base font-normal">
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Safety Guarantee</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>FAQ & Support</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Enough Facilities</Link>
            </li>
          </ul>
        </div>

        <div className="container mx-auto px-4 text-center w-full col-span-2">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">Have questions, need help with your booking, or want to share feedback? We’re here to help!</p>

            <div className="mb-6">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:support@trainticketsystem.com" className="text-blue-400 hover:underline">support@trainticketsystem.com</a></p>
            <p className="mb-2"><strong>Phone:</strong> <a href="tel:1800123456" className="text-blue-400 hover:underline">1800-123-456</a></p>
            <p className="mb-2"><strong>Office Address:</strong> 123 Railways Avenue, City, Country, 123456</p>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
                <a href="https://facebook.com/trainticketsystem" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl">
                <FaFacebookF />
                </a>
                <a href="https://twitter.com/trainticketsystem" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl">
                <FaTwitter />
                </a>
                <a href="https://instagram.com/trainticketsystem" target="_blank" rel="noreferrer" className="text-pink-500 hover:text-pink-400 text-2xl">
                <FaInstagram />
                </a>
                <a href="https://linkedin.com/company/trainticketsystem" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-500 text-2xl">
                <FaLinkedinIn />
                </a>
            </div>
        </div>
        

      </div>
      <div>           
            <p className="mt-6 text-gray-500 text-sm text-center">© 2025 Train Ticket Reservation System. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;