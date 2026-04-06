import Image from 'next/image';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  tags,
  image,
}) => {
  const content = (
    <div className='h-full transition-all duration-300 overflow-hidden flex flex-col'>
      {link ? (
        <UnstyledLink
          href={link}
          className='block h-full hover:opacity-90 transition-opacity'
        >
          {image && (
            <div className='relative w-full h-[400px] overflow-hidden'>
              <Image
                src={image}
                alt={title}
                fill
                className='object-cover w-full h-full'
              />
            </div>
          )}

          <h3 className='text-xl font-bold my-4'>{title}</h3>
        </UnstyledLink>
      ) : (
        ''
      )}
      <div className='flex flex-col flex-1'>
        <p className='mb-4 text-sm leading-relaxed flex-1'>{description}</p>
        {tags && tags.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={tag}
                className='inline-block px-3 py-1 text-xs font-semibold rounded-full bg-transparent text-black dark:text-white border border-black dark:border-white'
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return content;
};

export default ProjectCard;
