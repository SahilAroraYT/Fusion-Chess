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
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">WHAT IF MY CHILD HAS NO PRIOR EXPOSURE TO CHESS?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">I WANT TO ENROLL MY KID INTO FUSION CHESS ACADEMY; WHERE DO I START?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">WILL MY CHILD RECEIVE A CERTIFICATE UPON COMPLETION OF A LEVEL?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">HOW DO YOU CONDUCT PRACTICE SESSIONS/TOURNAMENT?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">HOW DO YOU COMMUNICATE CLASS DETAILS AND UPCOMING PRACTICE/TOURNEYS?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">HOW IS THE CURRICULUM STRUCTURED AND HOW LONG DOES IT TAKE FOR MY KIDS TO GET TO THE NEXT LEVEL?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">HOW LONG WILL MY CHILD HAVE ACCESS TO THEIR ACCOUNT AND CONTACT THE COACH FOR SUPPORT?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#467188] mt-5 mb-20">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">WHERE DO I FIND DETAILS ABOUT THE COURSES YOU OFFER?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
