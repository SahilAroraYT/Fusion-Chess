import { NavLink } from "react-router-dom"

const FAQ = () => {
    return (
        <div>
            {/* Question div  */}
            <div className="container mx-auto  mt-40">
                <h1 className="font-bold text-4xl">Do You Have a question?</h1>
                <h2 className="font-semibold text-2xl my-5">We have answers (well, most of them!)</h2>
                <p className="text-xl">Below you will find answers to the most common questions you may have related to Fusion chess or chess in general. If you still can’t find the answer you’re looking for, just
                    <NavLink to="/contact" className="text-blue-800 underline">  Contact us! </NavLink></p>
            </div>

            {/* Question open and close Accordion  */}
            <div className="container mx-auto text-white">
                <div className="collapse collapse-arrow bg-[#467188] mt-20 mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">ABOUT US</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">HOW MANY KIDS ARE IN EACH CLASS?</div>
                    <div className="collapse-content">
                        <p className="text-xl">Based on our research and personal experience, we’ve found that children grasp new concepts
more effectively in small group settings, generally with 4-6 students, though this may vary. <br />
Learning in groups allows kids to learn from each other, socialize, and build friendships. <br /><br />
Our Sales Coordinator will share specific class size details after the trial session if you decide to
enroll.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">WHAT IF MY CHILD HAS NO PRIOR EXPOSURE TO CHESS?</div>
                    <div className="collapse-content">
                        <p className="text-xl">The trial class is intended to help the Coach assess your child’s skill level, learning style, and
interest. If the Coach identifies your child as a beginner, they will be placed in a suitable class
accordingly.
</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">I WANT TO ENROLL MY KID INTO FUSION CHESS ACADEMY WHERE DO I START?</div>
                    <div className="collapse-content">
                        <p className="text-xl">Please complete the enrollment form <NavLink to="/register"> <span className="underline">here</span> <br />
                        Our team will then reach out to schedule a trial class.
                        <br />
                        <br />
                        After the trial, based on the Coach’s evaluation, we’ll contact you to discuss your interest in
enrolling your child in a chess class. Your child’s instructor will be the same Coach who
conducted the trial.
<br /><br />Once you confirm the timing and other details, we’ll send an enrollment confirmation email along
with the necessary information.
</NavLink></p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">WILL MY CHILD RECEIVE A CERTIFICATE UPON COMPLETION OF A LEVEL?</div>
                    <div className="collapse-content">
                        <p className="text-xl">Yes! The Coach will conduct an assessment to evaluate your child's understanding of key
concepts before advancing them to the next level. Upon successfully passing, your child will
receive a certification from Fusion Chess Academy, which will be sent directly to your email.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">HOW DO YOU CONDUCT PRACTICE SESSIONS/TOURNAMENT?</div>
                    <div className="collapse-content">
                        <p className="text-xl">We use the secure third-party platform lichess.org to host practice sessions
                        and tournaments. <br /><br />To participate, please create an account on Lichess using your email and a password. The
instructor will then send a link for the practice session or tournament, allowing you to log in with
your credentials to join
</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">HOW DO YOU COMMUNICATE CLASS DETAILS AND UPCOMING PRACTICE/TOURNEYS?</div>
                    <div className="collapse-content">
                        <p className="text-xl">After enrollment, you’ll be added to a dedicated WhatsApp group, used exclusively for updates
                        on class matters, practice sessions, assignments, and more</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">HOW IS THE CURRICULUM STRUCTURED AND HOW LONG DOES IT TAKE FOR MY KIDS TO GET TO THE NEXT LEVEL?</div>
                    <div className="collapse-content">
                        <p className="text-xl">It really depends on each child. We don’t rush kids through levels; instead, we focus on their
passion for the game and support them in excelling at chess. However, we do provide a
tentative course timeline, which you can view <NavLink to="/pricing"><span className="underline">here</span></NavLink></p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">HOW LONG WILL MY CHILD HAVE ACCESS TO THEIR ACCOUNT AND CONTACT THE COACH FOR SUPPORT?</div>
                    <div className="collapse-content">
                        <p className="text-xl">As long as your subscription remains active, you’ll have continuous access to both the classes
and the Coach. The Coach will share the class schedule and provide details on how to reach
them with any questions</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5 mb-20">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">WHERE DO I FIND DETAILS ABOUT THE COURSES YOU OFFER?</div>
                    <div className="collapse-content">
                        <p className="text-xl">For detailed information about the course, please visit the <NavLink to="/pricing"><span className="underline">curriculum section</span></NavLink> on our website
                        <br /><br />Additional Details:
                        <br /><br />
                        - Classes are held via Google Meet.
<br />
- Two weekly sessions, each lasting 1 hour
<br />
- Includes assignments, practice sessions, and tournament opportunities.
<br />
- Upon completion, your child will receive a certificate from Fusion Chess Academy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
