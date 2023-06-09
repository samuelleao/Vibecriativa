import React from 'react';
import { Button } from '@components/Button';
import Link from 'next/link';
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectProps {
    title: string;
    description: string;
    img?: string;
    link: string;
    category: string;
}

export function Project({ title, description, img = "", link, category }: ProjectProps) {
    return (
        <motion.div className='min-w-[23.25rem] mobile:min-w-[70%] border border-slate-200 rounded-lg overflow-hidden pb-9 mobile:pb-6'>
            <div className="h-52 mobile:h-28 relative overflow-hidden bg-slate-50 pointer-events-none">
                <Image src={img} alt={`Imagem do Projeto ${title}`} width={300} height={208} className='object-cover absolute w-full h-full top-10 left-0 mobile:w-[90%] mobile:left-1/2 mobile:transform mobile:-translate-x-1/2' />
            </div>
            <div className='space-y-4 mt-4 px-7 mobile:px-4'>
                <small className='block font-medium text-xs text-slate-900'>👩🏾‍💻  Softhouse・ Website</small>
                <strong className='block text-lg mobile:text-base font-medium text-slate-900 whitespace-nowrap w-full overflow-hidden text-ellipsis'>{title}</strong>
                <p className='text-sm font-medium text-slate-500 leading-relaxed min-h-[74px] mobile:min-h-[48px] mobile:text-xs mobile:w-full mobile:overflow-hidden'>{description}...</p>
                <Link href={link} className='font-medium text-sm text-primary-700 flex items-center gap-4 hover:gap-5 transition-all'>Visualizar detalhes <FaArrowRight /></Link>
            </div>
        </motion.div>
    );
};