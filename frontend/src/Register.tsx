import { useState, useRef, FormEvent } from 'react';
import axios from 'axios';
import countries from './assets/countries.json'; // Import JSON file with country data

type Country = {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: {
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
  }[];
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string | null;
  country: string;
  experience: string;
  kidsName?: string;
  kidsAge?: string;
}

const TrialClassForm: React.FC = () => {
  const [isParentForm, setIsParentForm] = useState<boolean>(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [experience, setExperience] = useState<string>("");

  // Using refs to access input values
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLSelectElement>(null);
  const kidsNameRef = useRef<HTMLInputElement>(null);
  const kidsAgeRef = useRef<HTMLSelectElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const handleToggle = () => {
    setIsParentForm(!isParentForm);
    setErrors({});
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors: Record<string, string> = {};

    // Validate required fields
    if (!firstNameRef.current?.value) validationErrors.firstName = 'First Name is required';
    if (!emailRef.current?.value) validationErrors.email = 'Email is required';
    if (!phoneRef.current?.value) validationErrors.phone = 'Phone number is required';
    if (!ageRef.current?.value) validationErrors.age = 'Age is required';
    if (isParentForm && !kidsNameRef.current?.value) validationErrors.kidsName = "Kid's Name is required";
    if (isParentForm && !kidsAgeRef.current?.value) validationErrors.kidsAge = "Kid's Age is required";
    if (!countryRef.current?.value) validationErrors.country = 'Country is required';
    if (!experience) validationErrors.experience = 'Experience level is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Prepare data to send to MongoDB
      const data: FormData = {
        firstName: firstNameRef.current?.value || "",
        lastName: lastNameRef.current?.value || "",
        email: emailRef.current?.value || "",
        phone: phoneRef.current?.value || "",
        age: isParentForm ? null : ageRef.current?.value || "",
        country: countryRef.current?.value || "",
        experience: experience,
      };

      if (isParentForm) {
        data.kidsName = kidsNameRef.current?.value || "";
        data.kidsAge = kidsAgeRef.current?.value || "";
      }

      try {
        // Make API call to send data to MongoDB
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}api/register`, data);
        if (response.status === 200) {
          console.log('Form submitted successfully');
          setAlertVisible(true)
          setTimeout(() => setAlertVisible(false), 5000);
        } else {
          console.error('Error submitting form');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-2xl mt-36 mb-20">
      {alertVisible && (

        // Alert BOX 
        <div role="alert" className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 shrink-0 stroke-current text-white"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className='text-white text-xl'>Form submitted Successfully !</span>
      </div>
      )}
      <h1 className="text-xl font-bold text-center mb-1">I'm a</h1>
      {/* Toggle Button */}
      <div className="flex justify-center items-center mb-4">
        <span className="mr-2 text-xl">Student</span>
        <div
          className={`relative inline-flex items-center h-6 rounded-full w-12 cursor-pointer ${
            isParentForm ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          onClick={handleToggle}
        >
          <span
            className={`transform transition ease-in-out duration-200 ${
              isParentForm ? 'translate-x-6' : 'translate-x-0'
            } inline-block w-6 h-6 bg-white rounded-full`}
          />
        </div>
        <span className="ml-2 text-xl">Parent</span>
      </div>

      <h2 className="text-xl font-semibold mb-4">
        Take a Free Trial Class {isParentForm ? 'for Your Child' : 'for Yourself'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}

        {/* Name  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">First Name </label>
            <input
              ref={firstNameRef}
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              ref={lastNameRef}
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

            {/* Email  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Email </label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block font-medium">Phone Number </label>
            <input
              ref={phoneRef}
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
        </div>

        {!isParentForm && (

          // Age 
          <div>
            <label className="block font-medium">Age </label>
            <select ref={ageRef} className="w-full border border-gray-300 rounded-md p-2">
              <option value="">Choose Age</option>
              {[...Array(83)].map((_, i) => (
                <option key={i} value={i + 18}>
                  {i + 18}
                </option>
              ))}
            </select>
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>
        )}

        {isParentForm && (
          
          // Kids name 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Kid's Name </label>
              <input
                ref={kidsNameRef}
                type="text"
                placeholder="Kid's Name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {errors.kidsName && <p className="text-red-500 text-sm">{errors.kidsName}</p>}
            </div>

            {/* Kids age */}
            <div>
              <label className="block font-medium">Kid's Age </label>
              <select ref={kidsAgeRef} className="w-full border border-gray-300 rounded-md p-2">
                <option value="">Choose Age</option>
                {[...Array(16)].map((_, i) => (
                  <option key={i} value={i + 3}>
                    {i + 3}
                  </option>
                ))}
              </select>
              {errors.kidsAge && <p className="text-red-500 text-sm">{errors.kidsAge}</p>}
            </div>
          </div>
        )}

        {/* Country */}
        <div>
          <label className="block font-medium">Country </label>
          <select ref={countryRef} className="w-full border border-gray-300 rounded-md p-2">
  <option value="">Choose</option>
  {(countries as Country[]).map((country: Country) => (
    <option key={country.id} value={country.name}>
      {country.name}
    </option>
  ))}
</select>

          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>

        {/* Experience  */}
        <div>
          <label className="block font-medium">Experience</label>
          <div className="flex flex-col">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="experience"
                value="New to Chess (Beginner)"
                onChange={() => setExperience("New to Chess (Beginner)")}
                className="mr-2"
              />
              <span>New to Chess (Beginner)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="experience"
                value="Taken Classes/Plays Well (Advanced Beginner)"
                onChange={() => setExperience("Taken Classes/Plays Well (Advanced Beginner)")}
                className="mr-2"
              />
              <span>Taken Classes/Plays Well (Advanced Beginner)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="experience"
                value="Played Tournaments (Intermediate)"
                onChange={() => setExperience("Played Tournaments (Intermediate)")}
                className="mr-2"
              />
              <span>Played Tournaments (Intermediate)</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="experience"
                value="Other"
                onChange={() => setExperience("Other")}
                className="mr-2"
              />
              <span>Other</span>
            </label>
          </div>
          {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-indigo-700 transition duration-200 text-white py-2 rounded-md mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TrialClassForm;
