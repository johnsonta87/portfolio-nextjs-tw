'use client';

import * as React from 'react';
import Link from 'next/link';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import Footer from '@/components/Footer';
import NextImage from '@/components/NextImage';

export default function HomePage() {
  return (
    <section className='relative flex-1 flex flex-col justify-center'>
      <div className='flex flex-col mb-6'>
        <div className='rounded-full border-3 border-gray-300 shadow-md overflow-hidden w-[120px] h-[120px]'>
          <NextImage
            src='/images/avatar.jpg'
            width={120}
            height={120}
            alt='Johnson Avatar'
            className='object-cover w-full h-full'
          />
        </div>
      </div>

      <h1 className='mt-4'>Hello! I'm Johnson, a software developer</h1>
      <h2 className='mt-2'>
        I have over 10 years of development experience in web and mobile applications. Currently working at a
        Calgary-based airline company
      </h2>

      <div className='w-full mt-4'>
        <p className='mt-2 text-sm'>
          <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
            Learn more about me
          </ArrowLink>
        </p>

        <p className='mt-2 text-sm'>
          <Link href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
            Check out my projects
          </Link>
        </p>
      </div>

      <Footer />
    </section>
  );
}
