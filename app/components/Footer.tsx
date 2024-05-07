import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-center text-gray-400 font-abc">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <hr className="my-2 border-gray-700" />
        <p>&copy; {new Date().getFullYear()} LinuxLearn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;