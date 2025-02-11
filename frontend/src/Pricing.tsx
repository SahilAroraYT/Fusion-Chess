import { NavLink } from "react-router-dom";

interface Plan {
  title: string;
  subtitle: string;
  image: string;
  objectives: string[];
  schedule: string;
  groupSize: string;
  pricing: string;
}

const plans: Plan[] = [
  {
    title: "Beginner",
    subtitle: "Learn to play",
    image: "/beginner.webp", // replace with actual image
    objectives: [
      "Understanding the game, basic strategies and concepts in a fun way.",
      "Develop confidence to play matches."
    ],
    schedule: "Weekly 2 sessions of 60 mins duration each",
    groupSize: "4-6 students",
    pricing: "Rs. 800 per month",
  },
  {
    title: "Intermediate",
    subtitle: "Play like a pro",
    image: "/intermediate.webp", // replace with actual image
    objectives: [
      "Develop confidence to play competitive chess tournaments.",
      "Road to International Chess Federation (FIDE) rating."
    ],
    schedule: "Weekly 2 sessions of 60 mins duration each",
    groupSize: "4-6 students",
    pricing: "Rs. 1600 per month",
  },
  {
    title: "Advanced",
    subtitle: "Time for tournaments",
    image: "/advanced.webp", // replace with actual image
    objectives: [
      "Improve performance in FIDE rated tournaments.",
      "Nuances of chess."
    ],
    schedule: "Weekly 2 sessions of 60 mins duration each",
    groupSize: "4-6 students",
    pricing: "Rs. 2000 per month",
  }
];

interface PlanCardProps {
  title: string;
  subtitle: string;
  image: string;
  objectives: string[];
  schedule: string;
  groupSize: string;
  pricing: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, subtitle, image, objectives, schedule, groupSize, pricing }) => {
  return (
    <div className="bg-[#0e0e0e] rounded-lg shadow-white shadow-lg overflow-hidden">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-3xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white mb-4 text-2xl">{subtitle}</p>
        <h4 className="font-semibold mb-1 text-white">Objectives</h4>
        <ul className="list-disc list-inside text-white mb-4">
          {objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
        <p className="font-semibold mb-1 text-white">Schedule:</p>
        <p className="text-white mb-4">{schedule}</p>
        <p className="font-semibold mb-1 text-white">Group Size:</p>
        <p className="text-white mb-4">{groupSize}</p>
        <p className="font-semibold mb-1 text-white">Pricing:</p>
        <p className="text-white mb-4">{pricing}</p>
        <p className="text-white mt-2">
          + Guided practice sessions, brain-teasers, and Sunday tournaments every week
        </p>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <div className="bg-[#0e0e0e]">
    <div className="container mx-auto px-4 py-12 mt-16 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
      <div className="mt-12 text-center">
       <NavLink to="/register"> <button className="bg-[#4C5F72] text-white text-xl py-3 px-8 rounded-full hover:bg-blue-700 transition">
          REGISTER FOR A FREE TRIAL!
        </button></NavLink>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
