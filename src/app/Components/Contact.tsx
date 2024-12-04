export default function Contact() {
    return (
      <section id="contact" className="h-screen py-16 px-4 bg-gradient-to-r from-green-500 via-teal-600 to-blue-500 text-white">
        <div className="max-w-lg mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-center mb-8">Contact Me</h2>
  
          {/* Contact Form */}
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg text-gray-800 max-w-xs mx-auto">
            <form action="#" method="post" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-gray-800"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-gray-800"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-gray-800"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          </div>
          </section>     
      
    );
  }
  