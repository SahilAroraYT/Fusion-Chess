import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#0e0e0e]">

      {/* Kapil header */}
      <div className="hero mt-20">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold text-[#60a9d7]">FUSION CHESS ACADEMY</h1>
            <p className="py-6 text-3xl text-white">
              Chess made simple!!!
            </p>
          </div>
          <div>
            <img
              src="/kapil.png"
              className="max-w-sm " />
            <span className="text-[#60a9d7] text-2xl font-semibold ml-32">Kapil Sarangi</span>
          </div>
          <span className="text-white">~Bridging gap between <br /> beginners and masters</span>

        </div>
      </div>

      {/* Our Goal  */}
    <div
  className="hero mt-10 mx-auto"
  style={{
    backgroundImage: "url(/goal.png)",
    maxWidth: "80%",
  }}
>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    {/* Flexbox Layout for Columns */}
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
      {/* Column 1: h1 */}
      <div>
        <img src="/fusion-blue.png" alt="Fusion Chess" className="w-40" />
      </div>
      <div>
      <h1 className="text-5xl font-bold text-[#60a9d7]">Our Goal</h1>
      </div>
      
      {/* Column 2: p */}
      <div>
      <p className="py-6 text-2xl text-white">
      Fusion Chess is dedicated to providing a fun and safe space  <br /> 
      for learning chess, especially for kids. Our <br /> 
      experienced coaches are passionate about helping <br />
       players improve, and we use creative methods to make <br />
       lessons engaging and effective. Join our supportive <br />
        community and take your chess skills to the next level!
            </p>
      </div>
    </div>
  </div>
</div>

      {/* Sahil header  */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold text-[#d1007e]">Why choose <br /> Fusion Chess Academy?</h1>
            
          </div>
          <div>
            <img
              src="/sahil.png"
              className="max-w-sm " />
            <span className="text-[#d1007e] text-2xl font-semibold ml-32">Sahil Arora</span>
          </div>
          <span className="text-white">~Chess made simple <br /> (Beginners Sensei)</span>

        </div>
      </div>

{/* Grid of Features  */}
<div className="bg-[#0e0e0e] py-16">
      <div className="flex flex-wrap justify-center px-8 md:px-16">
        {[
          "Expert coaches",
          "Comprehensive Curriculum",
          "Interactive Learning Environment",
          "Focus on Growth",
          "Community and Tournaments",
        ].map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-48 w-48 border border-white bg-gradient-to-b from-[#d1007e] to-black text-white text-center text-2xl font-semibold shadow-lg"
          >
            {feature}
          </div>
        ))}
      </div>
    </div>

    {/* Pink logo of Dusion Chess  */}
    <div>
      <img src="/fusion-pink.png" alt="Fusion Chess" className="mx-auto" />
    </div>

    {/* Benefits of Chess  */}
    <div
  className="hero mt-10 mx-auto"
  style={{
    backgroundImage: "url(/trial.png)",
    maxWidth: "80%",
  }}
>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    {/* Flexbox Layout for Columns */}
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
      {/* Column 1: h1 */}
      <div>
      <h1 className="text-5xl font-bold text-[#60a9d7]">Benefits of Chess for kids</h1>
      </div>
      
      {/* Column 2: p */}
      <div>
      <p className="py-6 text-xl text-white">
      <span className="text-[#60a9d7] font-bold">Develop Listening Skills:</span> Chess helps children improve their ability to focus and listen carefully, a key skill for learning and personal growth.
<br /><br />
<span className="text-[#60a9d7] font-bold">Boost Critical Thinking:</span> Weekly assignments teach children how to analyze situations, combine knowledge, and apply it effectively to solve problems.
<br /><br />
<span className="text-[#60a9d7] font-bold">Build Growth Mindset:</span> Chess instills the importance of having the right mindset and values, showing how they directly influence performance and success.
<br /><br />
<span className="text-[#60a9d7] font-bold">Encourage Confidence Through Tournaments:</span> Participating in tournaments builds self-confidence, teaches resilience, and helps children handle both victories and defeats with grace.
<br /><br />
<span className="text-[#60a9d7] font-bold">Foster Creative Problem-Solving:</span> Chess encourages children to think creatively and understand that every decision they make has meaningful consequences.
            </p>
      </div>
    </div>
  </div>
</div>

    

   


      {/* Get started today division */}
      <div className="w-full h-auto p-5 gap-5 flex flex-col md:flex-row items-center justify-evenly bg-black mt-20">
        <p className="text-4xl text-white">GET STARTED TODAY!</p>
        <NavLink to="/register">  <button className="btn bg-[#2D4766] rounded-xl text-white text-xl px-10 cursor-pointer">
          Register for a Free Trial
        </button> </NavLink>
      </div>

      {/* Newsletter section */}
      <section className="flex flex-col items-center justify-center p-6 bg-[#0e0e0e]">
        <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4">
            Subscribe to our email newsletter!!! ( Feature Coming Soon )
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
