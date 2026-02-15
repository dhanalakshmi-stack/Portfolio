'use client'

import { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                setResult("Failed to send message. Try again.");
            }
        } catch (error) {
            console.error(error);
            setResult("Something went wrong. Try again.");
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I&apos;d love to hear from you! Fill the form below to send me a message.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto grid gap-6">
                <input type="text" placeholder="Enter your name" name="name" required
                    className="px-3 py-2 border rounded-md bg-white dark:bg-darkHover/30 dark:border-white/30 outline-none" />
                <input type="email" placeholder="Enter your email" name="email" required
                    className="px-3 py-2 border rounded-md bg-white dark:bg-darkHover/30 dark:border-white/30 outline-none" />
                <textarea placeholder="Enter your message" rows="6" name="message" required
                    className="px-4 py-2 border rounded-md bg-white dark:bg-darkHover/30 dark:border-white/30 outline-none"></textarea>

                <button type="submit"
                    className="py-2 px-8 w-max flex items-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover">
                    Submit now
                    <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                <p className='mt-4 text-center text-gray-700 dark:text-white'>{result}</p>
            </form>
        </div>
    )
}
