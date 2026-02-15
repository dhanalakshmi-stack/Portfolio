'use client'


import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';


export default function Services() {
const services = [
    {
        name: 'Enterprise Web Applications',
        icon: <DashboardCustomizeIcon fontSize="large" className="text-purple-600 dark:text-purple-400" />,
        description: 'Developing large-scale, scalable web applications using React.js, Next.js, Node.js, and MongoDB with clean architecture and optimized performance.',
        link: '#',
    },
    {
        name: 'E-commerce Platforms',
        icon: <ShoppingCartIcon fontSize="large" className="text-green-600 dark:text-green-400" />,
        description: 'Building robust e-commerce solutions with payment integration, dynamic dashboards, and user-friendly interfaces to drive online sales.',
        link: '#',
    },
    {
        name: 'RESTful APIs & Backend',
        icon: <StorageIcon fontSize="large" className="text-blue-600 dark:text-blue-400" />,
        description: 'Designing secure and high-performance RESTful APIs with Node.js/Express, implementing JWT authentication, and integrating third-party services efficiently.',
        link: '#',
    },
    {
        name: 'Performance & Security Optimization',
        icon: <SpeedIcon fontSize="large" className="text-red-600 dark:text-red-400" />,
        description: 'Optimizing database queries, improving server response times, and ensuring web applications are secure, scalable, and maintainable.',
        link: '#',
    },
];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80">What I Offer</h4>
            <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white">My Expertise</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80">
                With 2.6+ years of experience in MERN stack development, I deliver end-to-end web solutions for businesses, including enterprise-grade dashboards, e-commerce platforms, and optimized backend systems.
            </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
    {services.map((service) => (
        <div 
            key={service.name} 
            className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
            {/* Render the icon component directly */}
            <div className="mb-4">
                {service.icon}
            </div>

            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
            <a href={service.link} className="flex items-center gap-2 text-sm mt-5 text-blue-600 dark:text-blue-400 hover:underline">
                Read more <img src="/assets/right-arrow.png" alt="" className="w-4" />
            </a>
        </div>
    ))}
</div>

        </div>
    );
}
