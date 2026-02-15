'use client'

export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
            {/* Profile Image */}
            <img
                src="/assets/profile-img.jpeg"
                alt="Dhanalakshmi"
                className="rounded-full w-32 sm:w-36 md:w-40 shadow-lg"
            />

            {/* Greeting */}
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-gray-700 dark:text-white">
                Hi! I&apos;m <strong>Dhanalakshmi</strong>
                <img src="/assets/hand-icon.png" alt="waving hand" className="w-6 mb-1" />
            </h3>

            {/* Headline */}
            <h1 className="text-2xl sm:text-2xl lg:text-[34px] font-Ovo font-semibold text-gray-500 dark:text-white leading-tight">
                Full Stack Web Developer (MERN Stack) <br />
                based in Madurai, India.
            </h1>

            {/* Short Intro */}
            <p className="max-w-2xl mx-auto mt-4 font-Ovo text-gray-600 dark:text-white/80 text-sm sm:text-base">
                I am a Full Stack Developer with 2.6+ years of experience in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
                I build scalable, responsive, and user-friendly web applications, with expertise in enterprise-grade dashboards, e-commerce platforms, and backend optimizations.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                {/* Contact Me Button */}
                <a
                    href="#contact"
                    className="px-10 py-3 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                    Contact Me
                    <img src="/assets/right-arrow-white.png" alt="arrow" className="w-4" />
                </a>

                {/* Download Resume Button */}
                <a
                    href="/assets/Dhanalakshmi_Resume.pdf"
                    download
                    className="px-10 py-3 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white font-medium transition-all"
                >
                    Download Resume
                    <img src="/assets/download-icon.png" alt="download" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}
