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
        <motion.div className='min-w-[372px] border border-slate-200 rounded-lg overflow-hidden pb-9'>
            <div className="h-52 relative overflow-hidden bg-slate-100 pointer-events-none">
                <Image src={img} alt={`Imagem do Projeto ${title}`} width={300} height={208} className='object-cover absolute w-full h-full top-10 left-0' />
            </div>
            <div className='space-y-4 mt-4 px-7'>
                <strong className='font-medium text-xs text-slate-900'>👩🏾‍💻  Softhouse・ Website</strong>
                <h6 className='text-lg font-medium text-slate-900'>{title}</h6>
                <p className='text-sm font-medium text-slate-500 leading-relaxed min-h-[74px]'>{description}...</p>
                <Link href={link} className='font-medium text-sm text-primary-500 flex items-center gap-4 hover:gap-5 transition-all'>Visualizar detalhes <FaArrowRight /></Link>
            </div>
        </motion.div>
    );
};