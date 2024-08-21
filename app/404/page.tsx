"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
  const router = useRouter();

  const gotoPage = () => {
    router.push('/ru');
  }

  return (
    <div className='max-w-6xl w-full mx-auto px-4'>
       <div className='h-screen flex justify-center items-center gap-[30px] bg-[#000000]'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>4 0 4</h1>
        <p className='text-lg mt-4'>This page could not be found.</p>
        <ul className='mt-[50px]'>
        <button
            onClick={gotoPage}
            className="relative inline-block  p-px font-semibold leading-6 text-white no-underline bg-transparent shadow-2xl cursor-pointer group rounded-xl "
          >
            <span
              className="absolute inset-0 overflow-hidden rounded-xl"
            >
              <span
                className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></span>
            </span>
            <div
              className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-transparent ring-1 ring-white/10"
            >
              <span>Go to Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6">
                <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span
              className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
            ></span>
          </button>
        </ul>
       
      </div>
    </div>
    </div>
  );
}

export default Page;
