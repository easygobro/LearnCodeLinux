import React from 'react';
import Link from 'next/link';

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-customOrange">Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <div className="bg-gradient-to-r from-customOrange to-orange-300 rounded-t-lg -mx-6 -mt-6 px-6 py-4 mb-4">
            <h2 className="text-2xl font-bold text-white">Linux Documentation and Tutorials</h2>
          </div>
          <ul className="space-y-2">
            <li><Link href="https://man7.org/linux/man-pages/" className="hover:text-customOrange transition-colors duration-300">Man Pages</Link></li>
            <li><Link href="https://www.kernel.org/doc/" className="hover:text-customOrange transition-colors duration-300">Kernel Documentation</Link></li>
            <li><Link href="https://linuxjournal.com/" className="hover:text-customOrange transition-colors duration-300">Linux Journal</Link></li>
            <li><Link href="https://www.howtogeek.com/category/linux/" className="hover:text-customOrange transition-colors duration-300">How-To Geek Linux Tutorials</Link></li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <div className="bg-gradient-to-r from-customOrange to-orange-300 rounded-t-lg -mx-6 -mt-6 px-6 py-4 mb-4">
            <h2 className="text-2xl font-bold text-white">Linux Tools and Utilities</h2>
          </div>
          <ul className="space-y-2">
            <li><Link href="https://www.gnu.org/software/grep/" className="hover:text-customOrange transition-colors duration-300">grep</Link></li>
            <li><Link href="https://www.gnu.org/software/awk/" className="hover:text-customOrange transition-colors duration-300">awk</Link></li>
            <li><Link href="https://www.vim.org/" className="hover:text-customOrange transition-colors duration-300">Vim</Link></li>
            <li><Link href="https://www.gnu.org/software/bash/" className="hover:text-customOrange transition-colors duration-300">Bash</Link></li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <div className="bg-gradient-to-r from-customOrange to-orange-300 rounded-t-lg -mx-6 -mt-6 px-6 py-4 mb-4">
            <h2 className="text-2xl font-bold text-white">Linux Learning Resources</h2>
          </div>
          <ul className="space-y-2">
            <li><Link href="https://www.edx.org/learn/linux" className="hover:text-customOrange transition-colors duration-300">edX Linux Courses</Link></li>
            <li><Link href="https://www.coursera.org/learn/linux-introduction" className="hover:text-customOrange transition-colors duration-300">Coursera Linux Introduction</Link></li>
            <li><Link href="https://www.udemy.com/course/linux-mastery/" className="hover:text-customOrange transition-colors duration-300">Udemy Linux Mastery</Link></li>
            <li><Link href="https://www.freecodecamp.org/news/the-linux-commands-handbook/" className="hover:text-customOrange transition-colors duration-300">FreeCodeCamp Linux Commands Handbook</Link></li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <div className="bg-gradient-to-r from-customOrange to-orange-300 rounded-t-lg -mx-6 -mt-6 px-6 py-4 mb-4">
            <h2 className="text-2xl font-bold text-white">Linux Community and Forums</h2>
          </div>
          <ul className="space-y-2">
            <li><Link href="https://www.reddit.com/r/linux/" className="hover:text-customOrange transition-colors duration-300">Reddit /r/linux</Link></li>
            <li><Link href="https://stackoverflow.com/tags/linux" className="hover:text-customOrange transition-colors duration-300">Stack Overflow Linux</Link></li>
            <li><Link href="https://linuxfoundation.org/community/local-groups/" className="hover:text-customOrange transition-colors duration-300">Linux Foundation Local Groups</Link></li>
            <li><Link href="https://twitter.com/linuxfoundation" className="hover:text-customOrange transition-colors duration-300">Linux Foundation Twitter</Link></li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <div className="bg-gradient-to-r from-customOrange to-orange-300 rounded-t-lg -mx-6 -mt-6 px-6 py-4 mb-4">
            <h2 className="text-2xl font-bold text-white">Linux News and Updates</h2>
          </div>
          <ul className="space-y-2">
            <li><Link href="https://lwn.net/" className="hover:text-customOrange transition-colors duration-300">LWN.net</Link></li>
            <li><Link href="https://www.phoronix.com/" className="hover:text-customOrange transition-colors duration-300">Phoronix</Link></li>
            <li><Link href="https://distrowatch.com/" className="hover:text-customOrange transition-colors duration-300">DistroWatch</Link></li>
            <li><Link href="https://www.linux.com/news/" className="hover:text-customOrange transition-colors duration-300">Linux.com News</Link></li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
          <div className="bg-gradient-to-r from-customOrange to-orange-300 rounded-t-lg -mx-6 -mt-6 px-6 py-4 mb-4">
            <h2 className="text-2xl font-bold text-white">Linux Development and Contribution</h2>
          </div>
          <ul className="space-y-2">
            <li><Link href="https://github.com/torvalds/linux" className="hover:text-customOrange transition-colors duration-300">Linux Kernel Repository</Link></li>
            <li><Link href="https://www.linux.com/community/contributing/" className="hover:text-customOrange transition-colors duration-300">Contributing to Linux</Link></li>
            <li><Link href="https://www.linuxfoundation.org/projects/" className="hover:text-customOrange transition-colors duration-300">Linux Foundation Projects</Link></li>
            <li><Link href="https://www.gnu.org/software/software.html" className="hover:text-customOrange transition-colors duration-300">GNU Software Projects</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;