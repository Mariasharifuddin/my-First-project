export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white flex flex-col"
    >
      <div className="max-w-7xl mx-auto flex-grow">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center mb-10">My Projects</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl text-center">
            <h3 className="text-black text-2xl font-bold mb-4">My todo App</h3>
            <p className="mb-4">
             
  A simple and intuitive Todo app built using HTML, CSS, and TypeScript. This app allows users to manage tasks by adding, editing, and removing them, all while maintaining a clean and responsive design.
            </p>
            <a
              href="https://github.com/Mariasharifuddin/TODOAPP.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center mb-2"
            >
              GitHub Repo
            </a>
            <a
              href="https://todo-app-project-nine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-center"
            >
              Live Demo
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl text-center">
            <h3 className="text-black text-2xl font-bold mb-4">Recipe Finder</h3>
            <p className="mb-4">
             
  A Recipe Finder app built with HTML, CSS, and JavaScript (using APIs to fetch data). This app allows users to search for recipes based on ingredients or dish names. It pulls data from a public API, providing detailed instructions, ingredients lists, and nutrition information to help users create delicious meals with ease.
            </p>
            <a
              href="https://github.com/Mariasharifuddin/recipes-finders.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center mb-2"
            >
              GitHub Repo
            </a>
            <a
              href="https://recipes-finders.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-center"
            >
              Live Demo
            </a>
          </div>
          {/* Project 2 */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl text-center">
            <h3 className="text-black text-2xl font-bold mb-4">Future Education is here</h3>
            <p className="mb-4">
            "Future Education is Here" is an innovative platform that brings modern learning to your fingertips. With virtual classrooms, interactive tools, and on-demand content, it makes education more accessible and engaging for everyone, empowering students to learn at their own pace.
            
            </p>
            <a
              href="https://github.com/Mariasharifuddin/Education-website.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center mb-2"
            >
              GitHub Repo
            </a>
            <a
              href="https://education-website-nine-alpha.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-center"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center">
        <p className="text-lg">
          Visit my{" "}
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-yellow-400 hover:text-yellow-500"
          >
            GitHub
          </a>{" "}
          to explore more of my work, or check out my live projects hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-yellow-400 hover:text-yellow-500"
          >
            Vercel
          </a>
          !
        </p>
      </div>
    </section>
  );
}
