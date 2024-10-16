import React from 'react';

interface PageHeadProps {
  text: string;
}

const PageHead: React.FC<PageHeadProps> = ({ text }) => {
  return (
    <div>
      <div className="w-full h-auto p-5 mt-20 gap-5 flex flex-col md:flex-row items-center justify-evenly bg-[#467188]">
        <p className="text-4xl text-white">{text}</p>
      </div>
    </div>
  )
}

export default PageHead;
