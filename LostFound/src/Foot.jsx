import React from 'react'

export default function Foot() {
  return (
    <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-6">
    <div className="flex flex-wrap justify-between items-center mb-6">
      {/* <div></div> */}
      <hr />
      <div className="flex flex-col justify-center w-full md:flex-row space-y-4 md:space-y-0 md:space-x-[400px]">
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold text-lg">About Us</h4>
          <a href="#" className="text-gray-400 hover:text-gray-200">Company</a>
          <a href="#" className="text-gray-400 hover:text-gray-200">Careers</a>
          <a href="#" className="text-gray-400 hover:text-gray-200">Blog</a>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="font-bold text-lg">Support</h4>
          <a href="#" className="text-gray-400 hover:text-gray-200">Help Center</a>
          <a href="#" className="text-gray-400 hover:text-gray-200">Contact Us</a>
          <a href="#" className="text-gray-400 hover:text-gray-200">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-gray-200">Terms of Service</a>
        </div>
      </div>

      <div className="flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>

    <div className="flex justify-between items-center border-t border-gray-700 pt-6">
      <p className="text-sm text-gray-400">&copy; 2024 My Company. All rights reserved.</p>
      <a href="#top" className="text-gray-400 hover:text-gray-200 text-sm">Back to top</a>
    </div>
  </div>
</footer>

  )
}
