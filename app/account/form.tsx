'use client'

import { FormEvent } from "react";
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function DeleteForm() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      console.log('Submitting delete account form');

      const response = await fetch('/api/auth/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('Received response from /api/auth/delete:', response);

      if (response.ok) {
        console.log('Account deleted successfully');
        await signOut({ callbackUrl: '/' });
        // Account deleted successfully
        router.push('/');
      } else {
        // Handle error case
        const errorData = await response.json();
        console.error('Failed to delete account:', errorData);
        // Show an error message to the user
        alert(`Failed to delete account: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      // Show a generic error message to the user
      alert('An error occurred while deleting your account. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-500">Delete Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
          >
            Delete Account
          </button>
        </form>
      </div>
    </div>
  );
}