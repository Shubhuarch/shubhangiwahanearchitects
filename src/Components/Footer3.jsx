const Footer3 = () => {
    return (
      <footer className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Links */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">HIPCOUCH</h1>
            <nav className="mt-4 grid grid-cols-2 gap-2 text-gray-600">
              <a href="#" className="hover:text-gray-900">Home</a>
              <a href="#" className="hover:text-gray-900">Portfolio</a>
              <a href="#" className="hover:text-gray-900">About</a>
              <a href="#" className="hover:text-gray-900">Careers</a>
              <a href="#" className="hover:text-gray-900">Services</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
              <a href="#" className="hover:text-gray-900">Instagram</a>
              <a href="#" className="hover:text-gray-900">Blog</a>
              <a href="#" className="hover:text-gray-900">Calculator</a>
            </nav>
          </div>
  
          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Sign Up For Our Newsletter</h2>
            <p className="text-gray-600 mt-2 text-sm">Receive the latest design trends, project updates, and more straight to your inbox</p>
            <div className="mt-4 flex">
              <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none" />
              <button className="bg-gray-800 text-white px-4 rounded-r-md">SIGN UP</button>
            </div>
          </div>
  
          {/* Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <img src="/images/image1.jpg" alt="Interior 1" className="rounded-lg" />
            <img src="/images/image2.jpg" alt="Interior 2" className="rounded-lg" />
            <img src="/images/image3.jpg" alt="Interior 3" className="rounded-lg" />
            <img src="/images/image4.jpg" alt="Interior 4" className="rounded-lg" />
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>&copy; <strong>HIPCOUCH</strong> 2024. All rights reserved.</p>
          <a href="#" className="underline">Privacy Policy</a>
        </div>
      </footer>
    );
  };
  
  export default Footer3;
  