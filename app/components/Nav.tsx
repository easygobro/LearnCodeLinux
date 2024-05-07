import Link from 'next/link';
import React from 'react';
import { getServerSession } from 'next-auth';
import Logout from '../logout';

export default async function Nav() {
  const session = await getServerSession();

  return (
    <header className="bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-white text-xl font-bold">LinuxLearn</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/dashboard" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Courses
                  </a>
                </Link>
                <Link href="/resources" legacyBehavior>
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Resources
                </button></Link>
                <Link href="/account" legacyBehavior>
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Account
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {!!session && <Logout />}
              {!session && (
                <>
                  <Link href="/login" legacyBehavior>
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Log In
                    </a>
                  </Link>
                  <Link href="/register" legacyBehavior>
                    <a className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customOrange hover:bg-customOrange2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-customOrange focus:ring-white">
                      Sign Up
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* Mobile menu items */}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            {!!session && <Logout />}
            {!session && (
              <>
                <Link href="/login" legacyBehavior>
                  <a className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                    Log In
                  </a>
                </Link>
                <Link href="/register" legacyBehavior>
                  <a className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customOrange hover:bg-customOrange2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-customOrange focus:ring-white">
                    Sign Up
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}