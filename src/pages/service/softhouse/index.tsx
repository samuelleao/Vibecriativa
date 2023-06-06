import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment } from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";

export default function Softhouse() {

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Softhouse</title>
            </Head>
            <Navbar />
            <header className="py-44 tablet:pb-20 tablet:pt-32">
                <div className="container flex items-center tablet:flex-col">
                    <div className="flex-1 flex flex-col items-start w-full">
                        <strong className="font-semibold text-lg text-primary-500">Softhouse</strong>
                        <h1 className="text-4xl w-8/12 tablet:w-full font-semibold text-slate-900 leading-relaxed mt-4 mobile:text-lg">Foco em desenvolver  seus objetivos.</h1>
                    </div>
                    <div className="w-[600px] max-w-full tablet:mt-12">
                        <Image className="max-w-full" src="/softhouse-header.png" width={690} height={396} alt="" />
                    </div>
                </div>
            </header>
            <section className="pb-32">
                <div className="container flex tablet:flex-col-reverse">
                    <div className="grid grid-cols-2 flex-1 gap-6 pr-12 tablet:grid-cols-1 tablet:pr-0">
                        <div className="px-6 py-9 space-y-5 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-lg tablet:text-base">Soluções para converção</h5>
                            <p className="text-sm leading-relaxed font-normal text-slate-500">Neste nosso ambiente temos serviços voltados para converter suas vendas por meio do desenvolvimento</p>
                            <Link className="block text-sm font-medium text-primary-500" href="#solucoes">Ver soluções</Link>
                        </div>
                        <div className="px-6 py-9 space-y-5 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-lg tablet:text-base">Manutenção e Hospedagem</h5>
                            <p className="text-sm leading-relaxed font-normal text-slate-500">Neste nosso ambiente temos serviços voltados para converter suas vendas por meio do desenvolvimento</p>
                            <Link className="block text-sm font-medium text-primary-500" href="#planos">Ver planos</Link>
                        </div>
                    </div>
                    <div className="w-[600px] max-w-full tablet:mb-12">
                        <h3 className="font-semibold text-xl tablet:text-lg">Ambiente especializado no desenvimento e gerenciamento de suas solução</h3>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}