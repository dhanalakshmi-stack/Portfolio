'use client'

import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';

export default function Work() {
  const experiences = [
    {
      year: 'Mar 2025 – Present',
      company: 'Fourchain Technology',
      role: 'Full Stack Developer (MERN)',
      icon: <WorkIcon fontSize="small" className="text-white" />,
      description: ['Leading enterprise SaaS platform development using React.js, Node.js, and MongoDB.', 'Optimized backend for 30% faster queries.'],
    },
    {
      year: 'Aug 2024 – Jan 2025',
      company: 'Hitasoft Private Limited',
      role: 'Web Developer',
      icon: <BusinessIcon fontSize="small" className="text-white" />,
      description: ['Developed responsive enterprise web apps.', 'Reduced API response times by 25%, managed state using Redux.'],
    },
    {
      year: 'Aug 2023 – Aug 2024',
      company: 'Hello Technology',
      role: 'MERN Stack Developer',
      icon: <WorkIcon fontSize="small" className="text-white" />,
      description: ['Built high-traffic portals, integrated Razorpay payments.', 'Implemented JWT-based authentication for security.'],
    },
    {
      year: '2018 – 2022',
      company: 'SACS MAVMM Engineering College',
      role: 'B.E. in Electronics & Communication',
      icon: <SchoolIcon fontSize="small" className="text-white" />,
      description: ['Graduated with 8.0 CGPA.', 'Strong foundation in electronics and software development principles.'],
    },
  ];

  return (
    <div id="experience" className="w-full px-[5%] py-10 scroll-mt-20 bg-[#1a1a2e] dark:bg-transparent">
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-300">My Journey</h4>
      <h2 className="text-center text-5xl font-Ovo text-white mb-16">Work Experience & Education</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-400"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex items-center justify-between w-full">
                {/* Content Box */}
                <div className={`w-[45%] ${isLeft ? 'text-right' : 'order-last text-left'}`}>
                  <div className="relative bg-[#11112b] p-6 rounded-lg shadow-xl border border-white/10 group">
                    {/* Triangle Pointer */}
                    <div className={`absolute top-6 w-0 h-0 border-y-[10px] border-y-transparent 
                      ${isLeft 
                        ? 'left-full border-l-[15px] border-l-[#11112b]' 
                        : 'right-full border-r-[15px] border-r-[#11112b]'}`}>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
                    <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                      {exp.description.map((point, i) => (
                        <li key={i} className="leading-relaxed">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Icon Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-700 border-4 border-white rounded-full flex items-center justify-center z-10 shadow-lg">
                  {exp.icon}
                </div>

                {/* Date on the opposite side */}
                <div className={`w-[45%] px-6 text-gray-400 font-semibold ${isLeft ? 'text-left' : 'text-right'}`}>
                  {exp.year}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}