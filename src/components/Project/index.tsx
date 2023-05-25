import React from 'react';
import { Button } from '@components/Button';
import Link from 'next/link';
import Image from 'next/image'

interface ProjectProps {
    title: string;
    description: string;
    img?: string;
    link: string;
    category: string;
}

export function Project({ title, description, img = "", link, category }: ProjectProps) {
    return (
        <article>
            <div className="h-52 relative overflow-hidden rounded-lg bg-gray-100 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/20 before:z-10">
                <strong className='absolute top-4 left-4 px-3 py-1 text-sm font-medium bg-primary-500 text-gray-50 rounded-lg z-10'>{category}</strong>
                <Image src={img} alt={`Imagem do Projeto ${title}`} width={300} height={208} className='object-cover absolute w-full h-full top-0 left-0' />
            </div>
            <div className='space-y-4 mt-4'>
                <h6 className='text-2xl font-medium text-gray-900'>{title}</h6>
                <p className='text-sm font-normal text-gray-900'>{description}</p>
                <Link href={link} target='_blank' className='block'>
                    <Button outline>Ver projeto</Button>
                </Link>
            </div>
        </article>
    );
};