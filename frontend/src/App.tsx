function App() {
  return (
    <div>
      {/* bg image - hidden on screens smaller than md (768px) */}
      <div className="hidden md:block -mt-20 pt-0 w-full h-auto">
        <img src="/bg.webp" alt="background image" className="w-full h-auto object-cover" />
      </div>

      {/* Flex container for image and text with margin-top to avoid navbar overlap */}
      {/* About Section */}
      <div className="flex w-full flex-col lg:flex-row justify-center items-start mt-16 lg:mt-0 -z-50"> {/* Adjust mt value based on your navbar height */}
        {/* First card (image) */}
        <div className="card rounded-box h-[515px] w-full lg:w-[750px] flex-grow flex items-center justify-center mb-6 lg:mb-0 -z-50">
          <img src="/temp.png" alt="" className="w-[80%] h-[80%]" />
        </div>

        {/* Second card (text) */}
        <div className="card rounded-box h-auto w-full lg:w-[750px] flex-grow flex flex-col items-start p-8 -z-50">
          <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
          <p className="text-2xl leading-relaxed">
            Fusion Chess is dedicated to providing a fun and safe space for learning chess, especially for kids. Our experienced coaches are passionate about helping players improve, and we use creative methods to make lessons engaging and effective. Join our supportive community and take your chess skills to the next level!
          </p>
          <button className="btn bg-[#2D4766] rounded-xl text-white text-xl mt-10 px-8 cursor-pointer">Register Today</button>

        </div>
      </div>
      {/* Benefits of chess section */}
      <div className="flex w-full flex-col lg:flex-row justify-center items-start mt-16 lg:mt-0 -z-50"> {/* Adjust mt value based on your navbar height */}

        {/* First card (text) */}
        <div className="card rounded-box h-auto w-full lg:w-[750px] flex-grow flex flex-col items-start p-8 -z-50">
          <h1 className="text-4xl font-bold mb-4">BENEFITS OF CHESS</h1>
          <p className="text-2xl leading-relaxed">
            Help your child develop strong listening skills. Strengthen their critical thinking as they learn to assess, combine, and apply knowledge through weekly assignments. Teach them how mindset and values impact their performance. Chess tournaments and competitions also build your child’s confidence, encourage creative problem-solving, teach them how to handle winning and losing with grace, and show them that actions have consequences.
          </p>

        </div>

        {/* Second card (image) */}
        <div className="card rounded-box h-[515px] w-full lg:w-[750px] flex-grow flex items-center justify-center mb-6 lg:mb-0 -z-50">
          <img src="/cartoon-chess.webp" alt="" className="w-[80%] h-[80%]" />
        </div>


      </div>

      {/* Get started today division */}
      <div className="w-full h-auto p-5 gap-5 flex flex-col md:flex-row items-center justify-evenly bg-[#4C5F72]">
        <p className="text-4xl text-white">GET STARTED TODAY!</p>
        <button className="btn bg-[#2D4766] rounded-xl text-white text-xl px-10 cursor-pointer">
          Register for a Free Trial
        </button>
      </div>

      {/* Newsletter section */}
      <section className="flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">
          Subscribe to our email newsletter!!!
        </h2>
        <p className="text-center mb-8 text-gray-600">
          Subscribe to our exciting monthly newsletter to stay updated on
          tournaments, streaming events, and new video releases. You can
          unsubscribe anytime—we aim to keep things relevant and enjoyable, not
          overwhelming!
        </p>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="first-name" className="text-sm font-semibold">
                Name *
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                className="md:mt-7 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="mt-4 px-6 py-3 bg-[#4C5F72] text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>


    </div>
  );
}

export default App;
