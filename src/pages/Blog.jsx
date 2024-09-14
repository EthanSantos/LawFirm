import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-neutral">
            <h1 className="text-6xl font-bold text-gray-900 mb-8">Coming Soon</h1>
            <div className="flex space-x-4">
                <Link 
                  to="/#home" 
                  className="btn btn-outline btn-primary group hover:bg-primary hover:text-white"
                >
                    <span className="group-hover:text-white">Back Home</span>
                </Link>
                <Link to="/#contact" className="btn btn-primary text-white">
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default Blog;
