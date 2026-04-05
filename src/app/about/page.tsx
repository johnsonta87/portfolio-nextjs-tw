import * as React from 'react';

import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <section className='relative flex-1 flex flex-col justify-center'>
      <h1 className='mt-4 text-2xl font-bold'>About Me</h1>
      <p className='mt-2 text-base'>Hi, I’m Johnson!</p>
      <p className='mt-2 text-base'>
        I have over 10 years of development experience in web and mobile
        applications. For the past few years, I have been apart of an airline
        company based in Calgary where I solve complex and technical challenges
        with innovative solutions.
      </p>
      <div className='mt-4'>
        <p>
          When I am not programming, you'll find me hitting the next lifting
          goal at the gym, fishing, cycling or hiking outdoors. If you would
          like to connect on some of these interests or just chat about anything
          else, feel free to reach out!
        </p>
      </div>
      <Footer />
    </section>
  );
}
