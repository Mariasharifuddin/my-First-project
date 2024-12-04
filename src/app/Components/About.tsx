export default function About() {
  return (
    <section id="about" className="h-screen py-16 px-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left">
        {/* Left Side - Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold mb-6">ABOUT ME</h2>
          <p className="text-lg mb-6">
            Hi! I'm a passionate web developer learning and growing in the world of coding. I specialize in building modern websites using technologies like
            <span className="font-semibold text-yellow-400"> Next.js </span> and
            <span className="font-semibold text-yellow-400"> React.js</span>.
            I believe in writing clean and efficient code, solving problems, and making web experiences faster and more accessible.
          </p>

          {/* Skills Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">ⓢⓚⓘⓛⓛⓢ</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Skill items */}
              <div className="flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">
                <h4 className="font-medium text-lg">HTML</h4>
              </div>
              <div className="flex justify-center items-center bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">
                <h4 className="font-medium text-lg">CSS</h4>
              </div>
              <div className="flex justify-center items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">
                <h4 className="font-medium text-lg">JavaScript</h4>
              </div>
              <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">
                <h4 className="font-medium text-lg">TypeScript</h4>
              </div>
              <div className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">
                <h4 className="font-medium text-lg">Next.js</h4>
              </div>
              <div className="flex justify-center items-center bg-gradient-to-r from-teal-400 to-teal-600 text-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl">
                <h4 className="font-medium text-lg">React.js</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
            src="/WhatsApp Image 2024-11-30 at 23.10.39_3275c5a3.jpg"
            alt="Your Image"
            className="rounded-full w-40 h-40 object-cover mx-auto md:w-48 md:h-48 lg:w-64 lg:h-64"
            style={{ objectPosition: 'top' }} // Move image towards top
          />
        </div>
      </div>
    </section>
  );
}
