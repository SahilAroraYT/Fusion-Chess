
const Services = () => {
  return (
    <div>
      {/* Trial Chess  */}
      <div className="hero z-10 mt-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/trial.webp"
            className="max-w-sm rounded-lg -z-50" />
          <div>
            <h1 className="text-5xl font-bold">The Trial Chess Class</h1>
            <p className="py-6">
              Our trial class is free and gives you a chance to experience Fusion Chess Academy’s teaching approach before enrolling your child. It also allows us to:
              <br /><br />
              - Understand your child’s chess learning goals.
              <br />
              - Identify your child’s unique learning style.
              <br /><br />

              During the trial session, the instructor will assess your child’s interest in the game and how they learn best. Afterward, you and the instructor can decide together if your child should continue with group or private lessons.
            </p>
            
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {/* Intermediate  */}
      <div className="hero -z-50 mt-10">
        <div className="hero-content flex-col lg:flex-row">
          
            <img
              src="/group.webp"
              className="max-w-sm rounded-lg -z-50" />
       
          
          <div>
            <h1 className="text-5xl font-bold">The Group Chess Class</h1>
            <p className="py-6">
              Our group chess classes are live, interactive sessions where the instructor introduces a chess concept and provides a practice assignment. Students get to share their understanding, apply the concept, and ask questions.
              <br /><br />
              Here are the key benefits of group classes for your child
              <br /><br />
              <strong>Interactive Learning:</strong> &nbsp; By observing how other students understand and apply concepts, your child gains a deeper understanding of chess.
              <br />
              <strong>Positive Interdependence:</strong> &nbsp; Students learn the importance of working together, attending classes on time, and completing assignments. They will see how their actions impact the group.
              <br />
              <strong>Individual Accountability:</strong> &nbsp; Even in a group setting, each student is responsible for their own work, assignments, and mastering the material.
              <br />
              <strong>Building Confidence:</strong> &nbsp; As students grow in their chess knowledge and share their moves with classmates, their self-confidence and self-esteem will increase.

              <br /><br />

              At Fusion Chess Academy, our group classes focus on two main goals: teaching chess concepts and instilling the values, principles, and mindset of a professional chess player that are useful in everyday life.
            </p>
            
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {/* Private  */}
      <div className="hero -z-50 my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/private.webp"
            className="max-w-sm rounded-lg -z-50" />
          <div>
            <h1 className="text-5xl font-bold">The Private Chess Class</h1>
            <p className="py-6">
              The private class offers one-on-one instruction tailored to your child’s needs. In each session, the instructor introduces a chess concept and provides a related practice assignment. The student is encouraged to share their understanding, apply the concept, and ask questions for clarification.
            </p>
        
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-5 gap-5 flex flex-col md:flex-row items-center justify-evenly bg-[#4C5F72]">
        <p className="text-4xl text-white">GET STARTED TODAY!</p>
        <button className="btn bg-[#2D4766] rounded-xl text-white text-xl px-10 cursor-pointer">
          Register for a Free Trial
        </button>
      </div>
    </div>
  )
}

export default Services
