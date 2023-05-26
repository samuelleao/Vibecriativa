import { Button } from '@components/Button'
import { Mockups } from '@components/Mockups'
import { Navbar } from '@components/Navbar'
import { Fragment, useEffect, useRef, useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@components/Accordion';
import Image from 'next/image'
import { Project } from '@components/Project';
import { projects } from '../../data/home';
import Link from 'next/link';
import Head from 'next/head';
import { Footer } from '@components/Footer';
import { GetServicesDocument, useGetPageQuery, useGetProjectsQuery, useGetServicesQuery } from 'generated/graphql';
import { GetStaticProps } from 'next/types';
import { client, ssrCache } from '@lib/urql';

export default function Home() {

    const [{ data }] = useGetServicesQuery()

    const [{ data: projects }] = useGetProjectsQuery()

    const [currentElement, setCurrentElement] = useState<HTMLDivElement | null>()

    const processRef = useRef<HTMLDivElement | null>(null);

    const [currentImage, setCurrentImage] = useState<string | null | undefined>('');

    function handleAccordionItemClick(image: string | null | undefined) {
        setCurrentImage(image);
    };

    useEffect(function () {
        setCurrentElement(processRef?.current)
    }, [])

    useEffect(function () {
        setCurrentElement(processRef?.current)
        setCurrentImage(data?.services[0].illustrationExternalPage)
    }, [data])

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa</title>
            </Head>
            <Navbar element={currentElement} />
            <header className='overflow-hidden flex tablet:flex-col relative before:z-[-2] before:absolute before:top-0 tablet:before:hidden before:right-0 before:h-full before:w-5/12 notbook2:before:w-3/12 before:bg-gradient-to-r before:to-cyan-500 before:from-blue-700 h-screen tablet:h-auto'>
                <div className="container flex tablet:flex-col">
                    <div className='h-full w-[33%] tablet:w-full flex flex-col justify-center tablet:justify-start tablet:pt-60 mobile:pt-32 gap-8'>
                        <h1 className='text-5xl tablet:text-2xl font-semibold text-gray-900 leading-normal'>Criando e convertendo em <span className='text-secondary-500'>valor</span> para você</h1>
                        <p className='text-base font-normal text-gray-900'>Desenvolvimento <strong className='font-medium'>especializado</strong> e <strong className='font-medium'>focado</strong> na experiência do usuário</p>
                        <div className="flex gap-4">
                            <Button black>
                                Iniciar projeto
                            </Button>
                            <Link href="#portfolio">
                                <Button outline>
                                    Portfólio
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <Mockups />
                </div>

            </header>
            <main className='mt-4'>
                <div ref={processRef} className='sticky top-32'></div>
                <section className='py-32'>
                    <div className="container flex justify-between tablet:flex-col">
                        <div className='w-2/12 tablet:w-full'>
                            <h2 className='text-lg font-semibold text-gray-900 leading-normal tablet:mb-16'>Nosso processo de qualidade em entregas</h2>
                        </div>
                        <div className='tablet:w-full tablet:flex notbook:px-4 tablet:flex-col relative w-[900px] grid grid-cols-4 right-0 gap-16 before:z-[-2] before:absolute before:top-0 before:left-0 before:h-[0.125rem] before:bg-gray-200 before:w-[100%] before:top-[7px] tablet:before:h-[100%] tablet:before:w-[0.125rem] tablet:before:left-2'>
                            <div className='tablet:flex items-start gap-6'>
                                <div className='border-2 hover:border-4 transition-all bg-gray-50 border-gray-500 rounded-full w-4 h-4'></div>
                                <div>
                                    <h3 className='text-sm font-semibold text-gray-900 mt-7 tablet:mt-0 mb-4 whitespace-nowrap'><span className='mr-4'>🎲</span> Entendimento</h3>
                                    <p className='text-xs font-normal text-gray-500 leading-loose notbook:text-xs'>Momento de conversar e entender seu produto</p>
                                </div>
                            </div>
                            <div className='tablet:flex items-start gap-6'>
                                <div className='border-2 hover:border-4 transition-all bg-gray-50 border-blue-500 rounded-full w-4 h-4'></div>
                                <div>
                                    <h3 className='text-sm font-semibold text-gray-900 mt-7 tablet:mt-0 mb-4 whitespace-nowrap'><span className='mr-4'>💻</span> Prototipação</h3>
                                    <p className='text-xs font-normal text-gray-500 leading-loose notbook:text-xs'>Apresentação da solução criada</p>
                                </div>
                            </div>
                            <div className='tablet:flex items-start gap-6'>
                                <div className='border-2 hover:border-4 transition-all bg-gray-50 border-rose-500 rounded-full w-4 h-4'></div>
                                <div>
                                    <h3 className='text-sm font-semibold text-gray-900 mt-7 tablet:mt-0 mb-4 whitespace-nowrap'><span className='mr-4'>🧪</span> Testes</h3>
                                    <p className='text-xs font-normal text-gray-500 leading-loose notbook:text-xs'>Prevenção de erros e garantia de qualidade</p>
                                </div>
                            </div>
                            <div className='tablet:flex items-start gap-6 relative after:absolute after:right-0 after:w-[calc(100%-16px)] after:h-2 after:top-[5px] after:bg-white tablet:after:h-[calc(100%)] tablet:after:left-2 tablet:after:top-[16px] tablet:after:w-[0.125rem] '>
                                <div className='border-2 hover:border-4 transition-all bg-gray-50 border-secondary-500 rounded-full w-4 h-4'></div>
                                <div>
                                    <h3 className='text-sm font-semibold text-gray-900 mt-7 tablet:mt-0 mb-4 whitespace-nowrap'><span className='mr-4'>✨</span> Entrega</h3>
                                    <p className='text-xs font-normal text-gray-500 leading-loose notbook:text-xs'>Seu produto no universo digital</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container flex justify-center  pb-48 tablet:pb-32">
                        <div className='w-[852px] tablet:w-full tablet:text-left tablet:items-start text-center space-y-4 flex flex-col items-center'>
                            <h4 className='text-5xl tablet:text-2xl font-semibold text-gray-900 leading-normal'><span className='text-primary-500'>Serviços</span> e soluções que desenvolvemos para você</h4>
                            <p className='text-base font-normal text-gray-600'>Você pode nos consultar caso esteja em dúvida em qual seria a melhor solução para sua ideia</p>
                            <Button black>Iniciar projeto</Button>
                        </div>
                    </div>
                    <div className="container flex tablet:flex-col">
                        <div className='tablet:hidden py-8 bg-secondary-500 rounded-t-2xl flex-1 relative flex justify-center items-center'>
                            {currentImage && (
                                <Image
                                    className='w-[31.25rem] h-auto'
                                    src={currentImage}
                                    alt="Imagem Ilustrativa do Serviço"
                                    quality={100}
                                    width={640}
                                    height={500}
                                />
                            )}
                        </div>
                        <div className='p-14 tablet:py-0 tablet:px-0 pb-0 rounded-t-2xl flex-1 space-y-7 tablet:w-full'>
                            {data && <Accordion.Root type="single" defaultValue={data.services[0].id} collapsible>
                                {data.services.map((item) => (
                                    <AccordionItem key={item.id} value={item.id}>
                                        <AccordionTrigger onClick={() => handleAccordionItemClick(item.illustrationExternalPage)}>
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {item.description && (
                                                <p className="text-sm font-normal text-gray-600">{item.description.slice(0, 150)} ...</p>
                                            )}
                                            <Link href={`servico/${item.url}`} className="text-sm font-medium text-blue-600">
                                                Ver mais sobre este serviço
                                            </Link>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion.Root>}
                        </div>
                    </div>
                </section>
                <section className='py-28' id="portfolio">
                    <div className="container flex justify-between relative items-start tablet:flex-col-reverse">
                        <div className="w-6/12 grid grid-cols-2 gap-8 tablet:w-full tablet:grid-cols-1 tablet:mt-32">
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
                        </div>
                        <div className="w-5/12 px-8 sticky top-32 tablet:static tablet:w-full tablet:px-0">
                            <small className='text-sm font-medium text-gray-900'>Cases e soluções</small>
                            <h6 className='text-3xl font-semibold text-gray-900 leading-relaxed my-5'><span className='text-primary-500'>Empresas</span> como a sua estão <span className='text-primary-500'>redesenhando</span>  a forma como projetam</h6>
                            <Button primary={true}>Iniciar projeto</Button>
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