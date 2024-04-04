import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom'; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-900 p-4 text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-Playfair">Jason Peral</h1>
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                        </button>
                    </div>
                    <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
                        <Link to="/" className="block lg:inline-block px-4 py-2">Home</Link>
                        <Link to="/portfolio" className="block lg:inline-block px-4 py-2">Portfolio</Link>
                        <Link to="/resume" className="block lg:inline-block px-4 py-2">Resume</Link>
                        <Link to="/Contact" className="block lg:inline-block px-4 py-2">Contact Info</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
