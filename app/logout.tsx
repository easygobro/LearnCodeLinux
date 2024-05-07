'use client';

import { signOut } from 'next-auth/react';

export default function Logout() {
  const handleSignOut = async () => {
    const callbackUrl = "https://learncodelinux.com";
    await signOut({ callbackUrl });
  };

  return (
    <button onClick={handleSignOut} className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-customOrange hover:bg-customOrange2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-customOrange focus:ring-white'>
      Log Out
    </button>
  );
}