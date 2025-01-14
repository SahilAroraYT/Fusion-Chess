import { InlineWidget } from "react-calendly";

const Register = () => {
  return (
    <div className="flex flex-col min-h-fit bg-[#0e0e0e]">
      {/* Main Content */}
      <main className="flex-grow mt-20 ">
        <InlineWidget url="https://calendly.com/fusionchess64/demo-session" />
      </main>
    
    </div>
  );
};

export default Register;
