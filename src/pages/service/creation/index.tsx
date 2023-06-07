import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@components/Button";

const creationServices = [
    {
        title: "Design para Interfaces",
        description: "Ambiente voltado para criação do design de suas interfaces na internet",
        items: [
            "Interface para sites",
            "Interface para aplicativos",
            "Interface Sistemas Web",
            "Interface E-commerce",
            "Mapeamento de experiência do usuário"
        ]
    },
    {
        title: "Design Gráfico Estratégico",
        description: "Ambiente voltado para criação do design de suas interfaces na internet",
        items: [
            "Artes para Redes Sociais",
            "Artes Banners",
            "Artes para eventos",
            "Design para materiais impressos"
        ]
    },
    {
        title: "Design para MIV",
        description: "Ambiente voltado para criação do design de suas interfaces na internet",
        items: [
            "Desenvolvimento do logotipo",
            "Paleta de cores",
            "Tipografia",
            "Elementos visuais",
            "Aplicações da marca",
            "Exemplos de aplicação"
        ]
    }
];

export default function Creation() {

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Criação</title>
            </Head>
            <Navbar />
            <header className="py-48 tablet:pt-32 tablet:pb-20">
                <div className="mx-auto items-center max-w-full tablet:mt-0 tablet:px-4 w-[65rem] flex flex-col tablet:flex-col">
                    <h1 className="text-5xl text-center tablet:text-left tablet:w-full font-semibold text-slate-900 leading-relaxed mt-4 mobile:text-2xl"><span className="text-primary-500">Criatividade</span> na prática cuidando da sua marca</h1>
                </div>
            </header>
            <section className="pb-40 tablet:pb-32">
                <div className="mx-auto items-center max-w-full tablet:mt-0 tablet:px-4 w-[65rem] flex flex-col tablet:flex-col">
                    <div className="grid grid-cols-3 gap-16 tablet:grid-cols-1">
                        {creationServices.map((service, index) => (
                            <div className="space-y-12" key={index}>
                                <div className="space-y-7">
                                    <h2 className="text-xl font-medium text-slate-900">{service.title}</h2>
                                    <p className="text-sm text-slate-500">{service.description}</p>
                                </div>
                                <Link href="/contato" className="block">
                                    <Button>Entrar em contato</Button>
                                </Link>
                                <ul role="list" className="space-y-5 my-7">
                                    {service.items.map((item, index) => (
                                        <li className="flex space-x-3" key={index}>
                                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Serviço Disponível</title>
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="text-sm font-normal leading-tight text-gray-900">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}