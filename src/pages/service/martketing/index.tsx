import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment } from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";
import { FaArrowDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Button } from "@components/Button";

const plan1 = {
    "name": "Plano Básico",
    "value": 1000,
    "items": [
        { "name": "Análise do perfil (Facebook, Instagram e Google Meu Negócio)", "covered": true },
        { "name": "Análise do perfil (Facebook, Instagram e Google Meu Negócio)", "covered": false },
        { "name": "Análise do perfil (Facebook, Instagram e Google Meu Negócio)", "covered": true },
        { "name": "Escolha das hashtags", "covered": true },
        { "name": "Complete documentation", "covered": false },
        { "name": "Organização da bio (apresentação da empresa)", "covered": true },
        { "name": "Organização da bio (apresentação da empresa)", "covered": false },
        { "name": "Acompanhamento mensal de resultados", "covered": true },
        { "name": "Reunião mensal de Briefing", "covered": false },
        { "name": "Gestão de Anúncios", "covered": true }
    ]
};

const plan2 = {
    "name": "Plano Essencial",
    "value": 1200,
    "items": [
        { "name": "Análise do perfil (Facebook, Instagram e Google Meu Negócio)", "covered": false },
        { "name": "Análise do perfil (Facebook, Instagram e Google Meu Negócio)", "covered": true },
        { "name": "Análise do perfil (Facebook, Instagram e Google Meu Negócio)", "covered": true },
        { "name": "Escolha das hashtags", "covered": false },
        { "name": "Complete documentation", "covered": true },
        { "name": "Organização da bio (apresentação da empresa)", "covered": true },
        { "name": "Organização da bio (apresentação da empresa)", "covered": false },
        { "name": "Acompanhamento mensal de resultados", "covered": true },
        { "name": "Reunião mensal de Briefing", "covered": true },
        { "name": "Gestão de Anúncios", "covered": false }
    ]
};

const plan3 = {
    "name": "Plano Personalizado",
    "value": "Customizado",
    "items": [
        { "name": "Análise e monitoramento do perfil (Facebook, Instagram, Google Meu Negócio e Treinamento para WhatsApp Business)", "covered": true },
        { "name": "Análise do perfil (Facebook, Instagram e Google Meu Negócio)", "covered": true },
        { "name": "Análise do perfil (Facebook, Instagram e Google Meu Negócio)", "covered": false },
        { "name": "Complete documentation", "covered": false },
        { "name": "Escolha das hashtags", "covered": true },
        { "name": "Organização da bio (apresentação da empresa)", "covered": false },
        { "name": "Reunião quinzenal de acompanhamento de resultados", "covered": true },
        { "name": "Organização da bio (apresentação da empresa)", "covered": true },
        { "name": "Reunião mensal de Briefing", "covered": false },
        { "name": "Gestão de Anúncios", "covered": true }
    ]
};

const advisory = [
    "Desenvolvimento de estratégias de marketing: ajuda a criar um plano de marketing abrangente, alinhado aos objetivos e metas da empresa.",
    "Gestão de mídia social: oferece orientação sobre a presença nas redes sociais, criação de conteúdo, estratégias de engajamento, análise de métricas e monitoramento da reputação online.",
    "Pesquisa de mercado: realiza estudos de mercado para identificar o público-alvo, analisar concorrentes, avaliar tendências e obter insights para embasar decisões estratégicas.",
    "Publicidade online: ajuda a planejar e executar campanhas de publicidade digital, incluindo anúncios em mecanismos de busca, redes sociais, sites parceiros e outros canais relevantes.",
    "Posicionamento de marca: auxilia na definição da identidade da marca, incluindo proposta de valor, personalidade da marca e mensagem central.",
    "Marketing de conteúdo: criação de conteúdo relevante e envolvente para atrair e engajar o público-alvo, incluindo blogs, artigos, vídeos, infográficos e outros formatos de conteúdo."
];

export default function Marketing() {

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Marketing Digital</title>
            </Head>
            <Navbar />
            <header className="pt-44 tablet:pb-20 tablet:pt-32 relative before:absolute before:h-full before:w-full before:bg-slate-950/70 before:top-0 before:left-0 before:z-[1]">
                <div className="container flex items-center justify-center tablet:flex-col notbook2:items-start ">
                    <div className="w-5/12 tablet:w-full flex flex-col items-center gap-8 justify-center relative z-[1] text-center">
                        <h1 className="text-4xl tablet:w-full font-semibold text-slate-50 leading-relaxed mt-4 mobile:text-xl">Marketing Digital</h1>
                        <p className="font-normal text-sm text-slate-300">Seus objetivos nas midias de forma clara e objetiva</p>
                        <h2 className="text-slate-50 font-semibold text-2xl tablet:text-base">Ambiente especializado no desenvimento e gerenciamento de suas solução</h2>
                        <ul className='flex -space-x-2 tablet:mb-12'>
                            <li className='w-12 h-12 rounded-full flex items-center justify-center bg-blue-500  hover:bg-blue-600  text-slate-50'><span className="sr-only">Facebook</span><FaFacebookF size={18} /></li>
                            <li className='w-12 h-12 rounded-full flex items-center justify-center bg-pink-500  hover:bg-pink-600  text-slate-50'><span className="sr-only">Instagram</span><FaInstagram size={18} /></li>
                            <li className='w-12 h-12 rounded-full flex items-center justify-center bg-sky-600   hover:bg-sky-700   text-slate-50'><span className="sr-only">Linkedin</span><FaLinkedinIn size={18} /></li>
                            <li className='w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-slate-50'><span className="sr-only">Whatsapp</span><FaWhatsapp size={18} /></li>
                            <li className='w-12 h-12 rounded-full flex items-center justify-center bg-blue-500  hover:bg-blue-600  text-slate-50'><span className="sr-only">Twitter</span><FaTwitter size={18} /></li>
                        </ul>
                    </div>
                </div>
                <div className="mx-auto translate-y-14 tablet:translate-y-0 max-w-full tablet:mt-0 tablet:px-4 w-[65rem] relative z-[1] mt-12">
                    <div className="flex tablet:flex-col gap-4 tablet:gap-8">
                        <div className="shadow-xl rounded-lg overflow-hidden relative flex-1 space-y-4 px-8 pt-9 pb-28 bg-gradient-to-r from-[#2938C0] to-[#5480F4]">
                            <h3 className="text-xl font-semibold text-slate-50">Assessorias</h3>
                            <p className="text-sm font-normal text-slate-50 leading-loose">Neste nosso ambiente vamos poder acompanhar de perto seus números, alcance e resultados do seu produto digital</p>
                            <a href="" className="flex justify-between px-8 bg-white items-center text-sm absolute w-full h-14 left-0 bottom-0 font-medium">Ver soluções e planos <FaArrowDown /></a>
                        </div>
                        <div className="rounded-lg shadow-xl w-[398px] tablet:w-full space-y-4 max-w-full px-8 py-9 bg-primary-500">
                            <h3 className="text-xl font-semibold text-slate-50">Consultorias</h3>
                            <p className="text-sm font-normal text-slate-50 leading-loose">Avaliar seus resultados atuais, compreender cenário de mercado, sinalizar melhorias para gerar valor para você e seu negócio</p>
                            <a href="" className="block">
                                <Button white className="w-full justify-between h-12">Ver soluções e planos <FaArrowDown /></Button>
                            </a>
                        </div>
                    </div>
                </div>
                <Image quality={100} priority className="max-w-full absolute w-full top-0 left-0 h-full object-cover -z-[1]" src="/marketing-header.png" width={1200} height={600} alt="" />
            </header>
            <section className="py-32 tablet:py-16">
                <div className="mx-auto max-w-full tablet:mt-0 tablet:px-4 w-[65rem] flex flex-col tablet:flex-col">
                    <div className="flex tablet:items-start items-center tablet:flex-col">
                        <div className="flex-1 pr-16 tablet:pr-0 space-y-4">
                            <h4 className="text-4xl font-semibold text-slate-900 tablet:text-2xl">Assessoria</h4>
                            <strong className="block text-sm font-semibold text-slate-900">Acompanhando seu progresso</strong>
                            <p className="text-sm text-slate-900 leading-loose">Neste nosso ambiente temos serviços voltados para converter suas vendas por meio do acompanhamento especializado</p>
                        </div>
                        <div className="w-5/12 tablet:w-full tablet:mt-8">
                            <Image className="max-w-full" src="/marketing-assessory.png" width={468} height={257} alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mt-28 tablet:mt-8 items-end tablet:grid-cols-1 tablet:gap-12">
                        <div className="h-max tablet:w-full p-6 bg-white rounded-lg shadow-lg">
                            <h5 className="mb-4 text-sm font-medium text-slate-500">{plan1.name}</h5>
                            <div className="flex items-baseline text-slate-900 dark:text-white">
                                <span className="text-4xl font-bold text-slate-900">R$ {plan1.value} <span className="ml-1 text-sm font-normal text-gray-500"> Mensal</span></span>
                            </div>
                            <ul role="list" className="space-y-5 my-7">
                                {plan1.items.map((item, index) => (
                                    <li className={`flex space-x-3 ${item.covered ? "" : "line-through decoration-gray-500"}`} key={index}>
                                        {item.covered ? (
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Check icon</title>
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                        ) : (
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Check icon</title>
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                        )}
                                        <span className="text-sm font-normal leading-relaxed text-gray-500">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full" primary={true}>Entrar em contato</Button>
                        </div>
                        <div className="relative border-2 border-primary-600 scale-105 tablet:scale-100 h-max tablet:w-full p-6 bg-white rounded-lg shadow-lg">
                            <span className="absolute right-4 px-2 py-1 rounded text-slate-50 text-xs -top-3 bg-gradient-to-r from-[#2938C0] to-[#5480F4]">Mais utilizado</span>
                            <h5 className="mb-4 text-sm font-medium text-slate-500">{plan2.name}</h5>
                            <div className="flex items-baseline text-slate-900 dark:text-white">
                                <span className="text-4xl font-bold text-slate-900">R$ {plan2.value} <span className="ml-1 text-sm font-normal text-gray-500"> Mensal</span></span>
                            </div>
                            <ul role="list" className="space-y-5 my-7">
                                {plan2.items.map((item, index) => (
                                    <li className={`flex space-x-3 ${item.covered ? "" : "line-through decoration-gray-500"}`} key={index}>
                                        {item.covered ? (
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Disponível</title>
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                        ) : (
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Não disponível</title>
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                        )}
                                        <span className="text-sm font-normal leading-relaxed text-gray-500">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full" primary={true}>Entrar em contato</Button>
                        </div>
                        <div className="h-max tablet:w-full p-6 bg-white rounded-lg shadow-lg">
                            <h5 className="mb-4 text-sm font-medium text-slate-500">{plan3.name}</h5>
                            <div className="flex items-baseline text-slate-900 dark:text-white">
                                <span className="text-4xl font-bold text-slate-900">{plan3.value}</span>
                            </div>
                            <ul role="list" className="space-y-5 my-7">
                                {plan3.items.map((item, index) => (
                                    <li className={`flex space-x-3 ${item.covered ? "" : "line-through decoration-gray-500"}`} key={index}>
                                        {item.covered ? (
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Check icon</title>
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                        ) : (
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Check icon</title>
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                        )}
                                        <span className="text-sm font-normal leading-relaxed text-gray-500">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full" primary={true}>Entrar em contato</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-44 tablet:py-20 relative before:absolute before:h-full before:w-full before:bg-slate-950/70 before:top-0 before:left-0 before:z-[1]">
                <div className="mx-auto max-w-full tablet:mt-0 tablet:px-4 w-[65rem] flex flex-col tablet:flex-col">
                    <div className="w-6/12 tablet:w-full flex flex-col items-start gap-8 justify-center relative z-[1] text-left">
                        <h1 className="text-4xl tablet:w-full font-semibold text-slate-50 leading-relaxed mt-4 mobile:text-xl">Consultorias</h1>
                        <strong className="font-semibold text-base text-slate-50">Progredindo seu negócio</strong>
                        <p className="text-slate-50 font-normal text-sm leading-loose">Neste nosso ambiente temos serviços voltados para converter suas vendas por meio do desenvolvimento</p>
                    </div>
                </div>
                <Image className="max-w-full absolute w-full top-0 left-0 h-full object-cover -z-[1]" src="/marketing-consultancy.png" width={1200} height={600} alt="" />
            </section>
            <section className="py-20 bg-primary-500">
                <div className="mx-auto max-w-full tablet:mt-0 tablet:px-4 w-[65rem] flex flex-col tablet:flex-col">
                    <ul className="grid grid-cols-2 gap-16 tablet:grid-cols-1">
                        {advisory.map((item, index) => (
                            <li className={`flex space-x-3`} key={index}>
                                <svg aria-hidden="true" className="flex-shrink-0 mt-1 w-5 h-5 text-slate-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Check icon</title>
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-sm font-normal leading-loose text-slate-50">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="py-20">
                <div className="mx-auto max-w-full tablet:mt-0 tablet:px-4 w-[65rem] flex flex-col tablet:flex-col tablet:items-center">
                    <h5 className="text-center text-base font-semibold text-slate-900">Marcas que inovaram seu jeito de compartilhar</h5>
                    <div className="grid grid-cols-4 tablet:grid-cols-1 items-center mt-16 tablet:gap-20">
                        {[
                            { alt: "Centro Vitta", path: "/marketing-case-1.png" },
                            { alt: "Pollux", path: "/marketing-case-2.png" },
                            { alt: "Dijosete", path: "/marketing-case-3.png" },
                            { alt: "Vesthosp", path: "/marketing-case-4.png" }
                        ].map((current, index) => (
                            <Image key={index} src={current.path} width={180} height={85} alt={current.alt} title={current.alt} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}