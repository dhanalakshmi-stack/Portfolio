'use client'

export default function About() {
    const tools = [
        // { name: 'VS Code', icon: '/assets/vscode.png' },
        { name: 'Firebase', icon: '/assets/firebase.png' },
        { name: 'MongoDB', icon: '/assets/mongodb.png' },
        // { name: 'Figma', icon: '/assets/figma.png' },
        { name: 'Git', icon: '/assets/git.png' },
    ];

    const data = [
        {
            name: 'Technical Skills',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'React.js, Next.js, Node.js, Express.js, MongoDB, Redux Toolkit, JavaScript (ES6+), HTML5, CSS3, Material UI, Bootstrap 5',
        },
        {
            name: 'Education',
            icon1: '/assets/edu-icon.png',
            icon2: '/assets/edu-icon-dark.png',
            description: 'B.E. in Electronics & Communication Engineering (CGPA: 8.0)',
        },
        {
            name: 'Professional Projects',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: 'Built enterprise dashboards, e-commerce platforms, and automated CRM engines using MERN stack',
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            {/* Section Title */}
            <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo text-gray-900 dark:text-white">About Me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                {/* Profile Image with circular icon */}
                <div className="max-w-max mx-auto relative">
                    <img
                        src="/assets/profile-img.jpeg"
                        alt="Dhanalakshmi"
                        className="w-64 sm:w-80 rounded-3xl max-w-none"
                    />
                    {/* <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="/assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img
                            src="/assets/dev-icon.png"
                            alt="Developer Icon"
                            className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div> */}
                </div>

                {/* About Text & Skills */}
                <div className="flex-1">
                    {/* About Myself */}
                    <p className="mb-6 max-w-2xl font-Ovo text-gray-700 dark:text-white/80">
                        Hi! I’m <strong>Dhanalakshmi</strong>, a Full Stack Software Engineer with 2.6+ years of experience specializing in the MERN stack.
                        I build scalable, high-performance web applications and enterprise-grade SaaS platforms, focusing on clean code, responsive interfaces, and seamless user experiences.
                    </p>

                    <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-white/80">
                        Throughout my career, I have led full-stack development for enterprise dashboards, e-commerce platforms, and automated CRM systems.
                        My work has improved database performance by up to 40%, reduced server overhead by 25%, and enhanced user retention through optimized UI/UX workflows.
                        I enjoy collaborating in Agile teams and continuously learning new technologies to deliver modern web solutions.
                    </p>

                    {/* Skills / Cards */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-8">
                        {data.map((item) => (
                            <li
                                key={item.name}
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer
                                hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                                dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
                            >
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{item.description}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Tools */}
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I Use</h4>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li
                                key={tool.name}
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg
                                cursor-pointer hover:-translate-y-1 duration-500"
                            >
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
