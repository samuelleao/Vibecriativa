import React from 'react';
import { Button } from '../Button';

interface ProjectProps {
  title: string;
  description: string;
  img: string;
  link: string;
  category: string;
}

export function Project ({ title, description, img, link, category}: ProjectProps)  {
  return (
     <article>
      <div className="h-52 relative overflow-hidden rounded-lg">
        <strong className='absolute top-4 left-4 px-2 py-1 text-sm font-medium bg-primary-500 text-gray-50 rounded-lg z-10'>{category}</strong>
        <img src={img} alt="" className='object-cover absolute w-full h-full top-0 left-0' />
      </div>
      <div className='space-y-4 mt-4'>
        <h6 className='text-2xl font-medium text-gray-900'>{title}</h6>
        <p className='text-sm font-normal text-gray-900'>{description}</p>
        <Button outline>Ver projeto</Button>
      </div>
    </article>
  );
};