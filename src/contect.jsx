
import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent! Name: ${form.name}, Email: ${form.email}, Message: ${form.message}, Phone:${form.phone}`);
        setForm({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <section id="contact" className="bg-gray-900 text-white py-20 ">
            <div className="max-w-4xl mx-auto ">
                <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
                
                <div className="grid grid-cols-2 mx-auto px-14 justify-center shadow-md rounded-lg shadow-fuchsia-400 ">
                   <div className="">
                    <p className="p-10 py-36 text-xl font-serif mb-4">Whether you're looking for a personal website, a business solution, or a skilled developer to join your team, I'm here to help. Reach out, and let's bring your ideas to life.</p>
                    </div>
                
                <form onSubmit={handleSubmit}  className="space-y-3 m-4">
                    <div className="flex flex-col justify-center">
                        <label htmlFor="name" className="text-lg font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email" className="text-lg font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="phone" className="text-lg font-medium mb-2">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col  ">
                        <label htmlFor="message" className="text-lg font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows="4"
                            className="p-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className=" px-40 py-2 bg-green-500 text-white font-medium hover:bg-blue-700 transition-all"
                    >
                        Send
                    </button>
                </form></div>
                <div className="mt-12 text-center">
                    <p>Email me at: <a href="mailto:bhanu2019sharma@gmail.com" className="text-blue-500 hover:underline">bhanu2019sharma@gmail.com</a></p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
