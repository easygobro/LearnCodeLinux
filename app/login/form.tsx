'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    console.log({ response });

    if (!response?.error) {
      router.push('/dashboard');
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white shadow-md rounded-lg p-8 h-96 ">
        <h2 className="text-2xl font-bold text-center mb-6 text-customOrange">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customOrange"
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customOrange"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-customOrange text-white py-2 rounded-md hover:bg-customOrange2 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}