import React from 'react';
const SectionHeader = ({ title, highlight, subtitle }) => {
  return (
    <div className="text-center mb-16" data-aos="fade-up">
      <div className="inline-block">
        <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-2">
          {title} <span className="text-portfolio-accent">{highlight}</span>
        </h2>
        {/* Custom underline below heading, matching its width */}
        <span className="block h-1 bg-portfolio-accent mt-3 rounded"></span>
      </div>
      <p className="text-lg text-portfolio-text/80 max-w-2xl mx-auto mt-4">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
