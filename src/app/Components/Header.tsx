export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">My Portfolio</h1>
        
        {/* Responsive Navigation */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a 
                href="#about" 
                className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
              >
               About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
              >
               Contact
              </a>
            </li>
          </ul>
          
          {/* Mobile View */}
          <div className="flex md:hidden justify-start ml-4 pl-9">
  <button className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110">
    ☰
  </button>
</div>


          

        </nav>
      </div>
    </header>
  );
}
