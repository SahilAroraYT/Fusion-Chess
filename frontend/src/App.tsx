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
    </div>
  );
}

export default App;
