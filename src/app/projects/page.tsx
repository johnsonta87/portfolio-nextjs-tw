'use client';

import * as React from 'react';

import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  image?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Planning Poker',
    description:
      'A ticket story estimation tool for team members to collaboratively estimate task complexity using a card-based system. Votes are stored in the session and database per room session. Teams can then discuss on their estimates.',
    link: 'https://voting-app-johnsonta87s-projects.vercel.app/',
    tags: ['React', 'Convex', 'TypeScript', 'Tailwind CSS'],
    image: '/images/projects/team-planning-poker.png',
  },
  {
    id: '2',
    title: 'Parks Finder',
    description:
      'Using the google maps API, users can filter for national or provincial parks on mobile devices and the web. They can also drill the filter down by the city and province.',
    link: 'https://github.com/johnsonta87/parks-listing',
    tags: ['React Native', 'Convex', 'TypeScript', 'Expo'],
    image: '/images/projects/parks-finder.png',
  },
];

export default function ProjectsPage() {
  return (
    <section className='relative flex-1 flex flex-col'>
      <h1 className='mt-4 text-3xl font-bold text-gray-900 dark:text-white mb-2'>
        Projects
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>

      <Footer />
    </section>
  );
}
