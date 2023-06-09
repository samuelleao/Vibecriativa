import { Button } from '@components/Button'
import { Mockups } from '@components/Mockups'
import { Navbar } from '@components/Navbar'
import { Fragment, useEffect, useRef, useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@components/Accordion';
import Image from 'next/image'
import { Project } from '@components/Project';
import Link from 'next/link';
import { motion } from "framer-motion"
import Head from 'next/head';
import { Footer } from '@components/Footer';
import { GetServicesDocument, useGetProjectsQuery, useGetServicesQuery } from 'generated/graphql';
import { GetStaticProps } from 'next/types';
import { client, ssrCache } from '@lib/urql';
import { FaArrowRight } from 'react-icons/fa';
import { services } from 'data/services';

export default function Home() {

    const [{ data }] = useGetServicesQuery()

    const slider = useRef<HTMLDivElement | null>(null)

    const [{ data: projects }] = useGetProjectsQuery()

    const [currentElement, setCurrentElement] = useState<HTMLDivElement | null>()

    const processRef = useRef<HTMLDivElement | null>(null);

    const [widthSlider, setWidthSlider] = useState(0)

    useEffect(() => {
        if (data) {
            setCurrentElement(processRef.current);
        }
    }, [data]);

    useEffect(() => {
        const calculateWidth = () => {
            if (slider.current) {
                setWidthSlider(slider.current.scrollWidth - slider.current.offsetWidth);
            }
        };

        if (slider.current && projects && projects.portfolios && projects.portfolios.length > 0) {
            calculateWidth();
        }

    }, [projects]);

    const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);

    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const navbarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (currentElement) {
            const handleScroll = () => {
                if (navbarRef) {
                    const navbarRect = navbarRef.current?.getBoundingClientRect()
                    const otherElementRect = currentElement.getBoundingClientRect()

                    const isTouching = navbarRect && navbarRect.bottom >= otherElementRect.top;

                    if (isTouching === true) {
                        setIsNavbarVisible(true);
                    } else {
                        setIsNavbarVisible(false);
                    }
                }
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [currentElement]);

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa</title>
            </Head>
            <Navbar navbarRef={navbarRef} isNavbarVisible={isNavbarVisible} setIsNavbarVisible={setIsNavbarVisible} />
            <header className='bg-gradient-to-r from-[#2938C0] to-[#5480F4] h-screen tablet:h-auto overflow-hidden'>
                <div className="container flex items-center tablet:flex-col h-full tablet:pt-10">
                    <div className='h-full w-[40%] tablet:w-full flex flex-col justify-center tablet:justify-start tablet:pt-60 mobile:pt-32 gap-8'>
                        <h1 ref={processRef} className='text-4xl tablet:text-3xl font-semibold text-slate-50 leading-normal mobile:leading-relaxed'>Criando e convertendo em <span className='text-secondary-500'>valor</span> para você</h1>
                        <p className='text-base mobile:text-sm mobile:leading-loose font-normal text-slate-50'>Desenvolvimento <strong className='font-medium'>especializado</strong> e <strong className='font-medium'>focado</strong> na experiência do usuário</p>
                        <div className="flex gap-4 mobile:flex-col">
                            <Link href="/contato" className='mobile:w-full'>
                                <Button className='mobile:w-full' secondary={true}>
                                    Entrar em contato
                                </Button></Link>
                            <Link href="#projetos" className='mobile:w-full'>
                                <Button className='mobile:w-full' outline white>
                                    Visualizar projetos
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <Mockups />
                </div>
            </header>
            <main className='mt-4'>
                <section className='py-32 bg-slate-50 tablet:py-16'>
                    <div className="mx-auto max-w-full tablet:px-4 w-[55.813rem] flex flex-col items-start justify-start">
                        <div className='flex flex-col mb-16 tablet:px-0 tablet:text-left items-start text-left space-y-4'>
                            <strong className='text-sm font-medium mb-4 text-slate-500'>SERVIÇOS</strong>
                            <h4 className='text-4xl tablet:text-2xl font-semibold text-slate-900 leading-normal'>Para cada — detalhe — uma conversão.</h4>
                            <p className='tablet:px-0 text-base tablet:text-sm font-normal text-slate-600 tablet:leading-loose'>Temos ambientes <strong className='font-semibold'>especializados</strong> para cada um de seus objetivos</p>
                        </div>
                        <div className="grid grid-cols-2 gap-12 py-12 tablet:py-0 tablet:grid-cols-1">
                            {services.map((service, index) => (
                                <div className='space-y-6 px-8 py-9 bg-white rounded-lg' key={index}>
                                    <h4 className='text-lg font-semibold text-slate-900'><span className='mr-2'>{service.emoji}</span> {service.name}</h4>
                                    <div className="flex gap-3 flex-wrap">
                                        {service.subservices.map((internalService, index) => (
                                            <small className='min-w-max font-medium text-sm text-slate-900' key={index}>{internalService.name}</small>
                                        ))}
                                    </div>
                                    <p className='font-normal text-sm leading-relaxed text-slate-500'>{service.description}</p>
                                    <Link href={service.url} className='font-semibold text-sm text-primary-500 flex items-center gap-4 hover:gap-5 transition-all'>Conhecer <FaArrowRight /></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='py-28 overflow-hidden tablet:py-16' id="projetos">
                    <div className="container flex flex-col">
                        <div className="flex justify-between items-center mb-20 tablet:mb-0 tablet:flex-col tablet:items-start tablet:gap-12">
                            <div className='w-5/12 tablet:w-full flex flex-col'>
                                <strong className='text-sm font-medium mb-4 text-slate-500'>PROJETOS</strong>
                                <h5 className='text-4xl font-bold mobile:text-2xl mobile:leading-relaxed leading-relaxed text-slate-900'>Uma nova experiência no universo digital.</h5>
                                <p className='font-normal text-base mobile:text-sm mobile:leading-relaxed leading-relaxed text-slate-500 mt-6'>Empresas como a sua estão redesenhando a forma como projetam</p>
                            </div>
                        </div>
                        <div className="tablet:w-full tablet:mt-12 gap-4 w-full">
                            <motion.div
                                ref={slider}
                                className="flex tablet:w-full gap-4"
                                drag="x"
                                dragConstraints={{ right: 0, left: -widthSlider }}
                            >
                                {projects?.portfolios.map((project) => (
                                    <Project
                                        key={project.title}
                                        category={`${project.category}`}
                                        title={project.title}
                                        description={project.description}
                                        img={`${project.img}`}
                                        link={project.url}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </Fragment>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    await Promise.all([
        client.query(GetServicesDocument, { slug: 'services' }).toPromise(),
    ])

    return {
        props: {
            urqlState: ssrCache.extractData()
        }
    }
}