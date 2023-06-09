import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment } from "react";
import Image from "next/image"
import Head from "next/head";

export default function About() {
    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Sobre</title>
                <meta name="description" content="" />
            </Head>
            <Navbar />
            <header className="pt-44 pb-32 mobile:pt-32 mobile:pb-16 relative">
                <Image quality={100} priority className="absolute top-0 left-0 w-full h-full object-cover z-0" src="/about.webp" width={1360} height={500} alt="Imagem de pessoas programando em computadores" />
                <div className="container flex justify-center relative">
                    <div className="w-[41.5rem] max-w-ful flex flex-col items-start justify-start">
                        <h1 className="text-4xl font-semibold mb-8 text-gray-50 mobile:text-xl">Sobre a vibecriativa</h1>
                        <p className="text-lg font-medium text-gray-50 mobile:text-sm">Um caminho sobre nossa história</p>
                    </div>
                </div>
            </header>
            <section className="py-36 mobile:py-20">
                <div className="container  flex justify-center">
                    <div className="max-w-[41.5rem]">
                        <div className="space-y-36 mobile:space-y-16">
                            <div className="flex flex-col items-start gap-6  mobile:flex-col mobile:items-start">
                                <div className="flex gap-3 items-center">
                                    <div className="h-12 px-3 rounded-lg flex items-center justify-center border-2 border-gray-100"><span>💡</span></div>
                                    <h3 className="text-base font-medium text-slate-900">Início de tudo</h3>
                                </div>
                                <p className="text-sm font-normal leading-loose text-gray-900">A Agência Vibecriativa foi idealizada e fundada em 2012 por colegas de trabalho de uma antiga empresa, que decidiram abrir o próprio negócio. </p>
                            </div>
                            <div className="flex flex-col items-start gap-6 mobile:flex-col mobile:items-start">
                                <div className="flex gap-3 items-center">
                                    <div className="h-12 px-3 rounded-lg flex items-center justify-center border-2 border-gray-100"><span>🐣</span></div>
                                    <h3 className="text-base font-medium text-slate-900">Primeiros passos</h3>
                                </div>
                                <p className="text-sm font-normal leading-loose text-gray-900">Inicialmente trabalhando com criação de artes e desenvolvimento de sites. Com o tempo agregou o serviço de mídias sociais, consultorias, desenvolvimento de sistemas web e apps. </p>
                            </div>
                            <div className="flex flex-col items-start gap-6 mobile:flex-col mobile:items-start">
                                <div className="flex gap-3 items-center">
                                    <div className="h-12 px-3 rounded-lg flex items-center justify-center border-2 border-gray-100"><span>🎉</span></div>
                                    <h3 className="text-base font-medium text-slate-900">Atuação no mercado</h3>
                                </div>
                                <p className="text-sm font-normal leading-loose text-gray-900">Atualmente atua na área de tecnologia e criatividade há quase 10 anos, prestando serviços em planejamento, criação e produção digital. Para pequenas e médias empresas, apesar que possui softwares de licenciamento para políticos e delivery de restaurantes. </p>
                            </div>
                        </div>
                        <div className="mt-36">
                            <h3 className="text-2xl font-medium leading-relaxed tablet:text-xl tablet:leading-relaxed">Nossa agência é a personificação da criatividade e do profissionalismo, entregando resultados excepcionais aos nossos clientes.</h3>
                            <div className="flex gap-6 mt-6 items-center">
                                <Image className="w-14 h-14 rounded-full" src="/idamylton.png" width={200} height={200} alt="Sócio da Vibecriativa em um evento utilizando uma camisa social" />
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Idamylton Garcia</h3>
                                    <small className="text-xs font-normal text-gray-500">Sócio Fundador</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}