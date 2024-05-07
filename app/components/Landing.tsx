'use client';

import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Landing() {
    
    return (
        <div className="m-auto  justify-between p-6 lg:px-8 ">
          <div className='bg-gray-100 shadow rounded-3xl'>
      <div className="w-[75rem] flex  m-auto  justify-between p-6 lg:px-8 ">
      <div className="w-[30rem]">
    <h1 className="font-abc font-medium px-16 py-4 w-full text-6xl w-[40rem] leading-tight">
      Enhance your Linux skills effortlessly
    </h1>
    <h2 className="font-abc px-16 py-4 w-full text-xl text-gray-600 w-[33rem]">Detailed course content, expertly crafted.</h2>
    </div>
    <div className="ml-24">
    <div className=" mt-8 p-2 bg-white w-[36rem] rounded-landing text-center font-abc text-customOrange font-bold text-3xl shadow-md ">
        Linux Learn
        <img className="m-auto rounded" src="/landing.png" alt="Students Learning Linux" />
    </div>
    </div>
    </div>
    <div className='py-8'>
      <Link href="/register" legacyBehavior>
        <a className="bg-customOrange font-abc font-semibold text-white py-4 px-36 rounded-full ml-28 hover:bg-customOrange2">Try For Free</a>
       </Link>
       </div>
       </div>
       <div className='py-12'>
       <div className="bg-gray-100 shadow rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="font-abc font-medium text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Master Linux with Confidence
            </h1>
            <p className="font-abc text-xl text-gray-600 mb-8">
              Gain practical skills and become a Linux pro through our hands-on courses.
            </p>
            <div className="mt-10">
              <Link href="/register" legacyBehavior>
                <a className="bg-customOrange font-abc font-semibold text-white py-4 px-8 rounded-full shadow-md hover:bg-customOrange2 transition duration-300">
                  Start Learning Now
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="bg-white rounded-landing shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="font-abc text-customOrange font-bold text-3xl mb-4">
                  Why Choose Linux Learn?
                </h2>
                <p className="font-abc text-gray-600 mb-6">
                  Our platform offers a unique learning experience tailored to your needs and goals.
                </p>
                <ul className="font-abc text-gray-600 mb-6">
                  <li className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-customOrange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Comprehensive curriculum covering essential Linux topics
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-6 h-6 text-customOrange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Real-world examples and challenges to reinforce your learning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-customOrange mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Support from a community of learners and experienced instructors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    
    );
}