'use client'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <div className="mt-20">
            {/* Logo and Email */}
            <div className="text-center">
                <a href="#top">
                    <img src="/assets/logo.png" alt="Logo" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="Logo" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto mt-2">
                    <img src="/assets/mail_icon.png" alt="Mail" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="Mail" className="w-5 hidden dark:block" />
                    <a href="mailto:dhanalakshmibeece2001@gmail.com" className="hover:underline">
                        dhanalakshmibeece2001@gmail.com
                    </a>
                </div>
            </div>

            {/* Divider and social links */}
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p className="text-sm">
                    © {new Date().getFullYear()} <a href="#top" className="font-semibold hover:underline">Dhanalakshmi</a> • All rights reserved.
                </p>

                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    {/* MUI social icons */}
                    <li>
                        <a href="https://github.com/dhanalakshmi-stack/Portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 dark:hover:text-gray-300 transition">
                            <GitHubIcon fontSize="medium" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dhanalakshmi-ramamoorthy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 dark:hover:text-gray-300 transition">
                            <LinkedInIcon fontSize="medium" />
                        </a>
                    </li>
                   
                </ul>
            </div>
        </div>
    );
}
