import Image from 'next/image';
import Link from "next/link";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { FaAngleDown } from "react-icons/fa";
import { useGetServicesQuery } from "generated/graphql";
import { Button } from "@components/Button";
import { Fragment, useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { Management } from '@components/StepForms/Management';
import { AboutProject } from '@components/StepForms/AboutProject';
import { Investiment } from '@components/StepForms/Investiment';
import { ClientData } from '@components/StepForms/ClientData';

export interface projectTypes {
    typeProject: string,
    management: string,
    investiment: string,
    clientName: string,
    clientEmail: string,
    clientWhatsapp: string
}

export default function InitProject() {

    const { register, handleSubmit } = useForm();
    const [currentStep, setCurrentStep] = useState(1);
    const [dataForms, setDataForms] = useState<projectTypes>({} as projectTypes);

    const onSubmit = (data: any) => {
        console.log(data)
        setDataForms({ ...data })
    };

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Iniciar Projeto</title>
                <meta name="description" content="Aqui nessa página você pode nos contar sobre o que você tem pensado sobre seu projeto e vamos entrar em contato com você dentro de 24 horas" />
            </Head>
            <div className='py-12 min-h-screen relative  before:absolute before:inset-0 before:w-full before:h-full before:bg-primary-500/70 before:z-[0]'>
                <Image className='z-[-1] absolute top-0 w-full h-full left-0 object-cover' src="/initproject.png" width={2032} height={1500} alt="Mulher sorridente" />
                <div className="w-[100rem] max-w-full px-10 mx-auto relative h-full">
                    <div className="grid grid-cols-[1fr_740px]">
                        <section className='grid grid-rows-3 h-full'>
                            <NavbarInitProject />
                            <div className='space-y-8 self-center'>
                                <Image src="/logofooter.png" alt="Vibecriativa Logotipo" width={130} height={130} className='mt-12' />
                                <h1 className='text-4xl font-semibold text-gray-50'>Inicio de uma nova <span className='text-secondary-500'>experência</span></h1>
                                <p className='text-sm leading-relaxed text-gray-50'>No campos abaixo vamos colher alguns dados importantes para poder iniciar o seu projeto</p>
                            </div>
                        </section>
                        <section className='pl-10'>
                            <form onSubmit={handleSubmit(onSubmit)} className='p-6 bg-white rounded-lg'>
                                <ol className="flex justify-between items-center w-full">
                                    {[1, 2, 3, 4].map((step) => (
                                        <li className="flex items-center space-x-2.5" key={step}>
                                            <span
                                                className={`flex items-center justify-center w-6 h-6 text-xs border font-medium rounded-full shrink-0 ${currentStep === step ? 'bg-blue-500 text-gray-50 border-blue-600' : 'border-gray-500 bg-transparent text-gray-500'
                                                    }`}
                                            >
                                                {step}
                                            </span>
                                            <span>
                                                <h3 className={`font-medium leading-tight text-sm ${currentStep === step ? 'text-blue-500' : 'text-gray-500'}`}>
                                                    {step === 1 && 'Sobre o Projeto'}
                                                    {step === 2 && 'Manutenção'}
                                                    {step === 3 && 'Investimento'}
                                                    {step === 4 && 'Dados'}
                                                </h3>
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                                <div className={`${currentStep === 1 ? 'visible' : 'hidden'}`}>
                                    <AboutProject setDataForms={setDataForms} dataForms={dataForms} register={register} />
                                </div>
                                <div className={`${currentStep === 2 ? 'visible' : 'hidden'}`}>
                                    <Management setDataForms={setDataForms} dataForms={dataForms} register={register} />
                                </div>
                                <div className={`${currentStep === 3 ? 'visible' : 'hidden'}`}>
                                    <Investiment setDataForms={setDataForms} dataForms={dataForms} register={register} />
                                </div>
                                <div className={`${currentStep === 4 ? 'visible' : 'hidden'}`}>
                                    <ClientData register={register} />
                                </div>
                                <div className="flex justify-end mt-12 gap-4">
                                    {currentStep > 1 && <Button type='submit' onClick={() => { setCurrentStep(currentStep - 1) }}>Voltar</Button>}
                                    <Button type='submit' onClick={() => {
                                        setCurrentStep(currentStep + 1)
                                    }} primary={true}>Próximo</Button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export function NavbarInitProject() {
    const [{ data }] = useGetServicesQuery();

    return (
        <nav className='flex gap-8 self-start relative'>
            <div className='flex space-x-8 items-center'>
                <NavigationMenu.Root>
                    <NavigationMenu.List asChild >
                        <ul className='flex items-center space-x-8 tablet:hidden'>
                            <NavigationMenu.Item asChild>
                                <li className='text-sm text-gray-50'><Link href="/home">Início</Link></li>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item asChild>
                                <li className='text-sm text-gray-50'><Link href="/sobre">Sobre a vibe</Link></li>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item className="relative">
                                <NavigationMenu.Trigger className='group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 leading-none outline-none focus:shadow-[0_0_0_2px] text-sm text-gray-50 font-normal'>
                                    Serviços{' '}
                                    <FaAngleDown
                                        className="text-violet10 relative top-[0.063rem] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                        aria-hidden
                                    />
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className="absolute top-0 left-0">
                                    <ul className="m-0 grid list-none gap-8 p-6 grid-cols-2">
                                        {data?.services?.map((item) => (
                                            <li className="hover:bg-slate-100 p-3 rounded-lg" key={item.title}>
                                                <Link href={`/servico/${item.url}`}>
                                                    <span className="block text-base text-gray-900 font-medium mb-4">{item.title}</span>
                                                    {item.description && (<small className="block text-xs text-gray-500">{item.description.slice(0, 80)}...</small>)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item asChild>
                                <li className='text-sm text-gray-50'><Link href="/home#portfolio">Portfólio</Link></li>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item asChild>
                                <li className='text-sm text-gray-50'><Link href="/cms">Vibecriativa CMS</Link></li>
                            </NavigationMenu.Item>
                        </ul>

                    </NavigationMenu.List>
                    <div className="perspective-[125rem] absolute top-full left-0 flex w-full justify-center">
                        <NavigationMenu.Viewport className="shadow-lg data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-[42.5rem] origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                    </div>
                </NavigationMenu.Root>
            </div>
        </nav>
    )
}