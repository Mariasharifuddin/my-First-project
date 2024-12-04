export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-r from-purple-500 to-pink-600 min-h-screen py-16 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl font-extrabold mb-10">My Services</h2>
        <p className="text-xl sm:text-lg mb-12 sm:max-w-full max-w-2xl mx-auto">
          I offer a range of services that can help bring your ideas to life, from web development to creating
          seamless and engaging user experiences. Check out my core services below!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl text-center">
            <img
              src="/types-of-Web-development-services.jpg"
              alt="Web Development Services"
              className="w-32 h-32 mb-4 mx-auto rounded-full object-cover"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Web Development</h3>
            <p className="text-lg text-black">
              I build responsive, fast, and scalable websites using the latest technologies like Next.js, React.js, and more.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl text-center">
            <img
              src="/download (4).jpeg"
              alt="UI/UX Design"
              className="w-32 h-32 mb-4 mx-auto rounded-full object-cover"
            />
            <h3 className="text-2xl font-semibold text-white">UI/UX Design</h3>
            <p className="text-lg text-black">
              I create intuitive and visually stunning UI/UX designs that enhance user engagement and provide seamless experiences.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl text-center">
            <img
              src="/download (5).jpeg"
              alt="Digital Marketing"
              className="w-32 h-32 mb-4 mx-auto rounded-full object-cover"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">Digital Marketing</h3>
            <p className="text-lg text-black">
              I offer full-service digital marketing, including SEO, social media strategies, and content marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
