import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment } from "react";

import Head from "next/head";
import Image from "next/image"
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { RiSendPlaneFill } from "react-icons/ri"

export default function Contact() {
    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Contato</title>
            </Head>
            <Navbar />
            <header className="py-44 tablet:pt-32 tablet:pb-16 relative before:absolute before:z-0 before:w-8/12 tablet:before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#2938C0] before:to-[#5480F4]">
                <div className="container flex relative z-10 items-center tablet:flex-col tablet:gap-14">
                    <div className="flex-1 pr-16 tablet:pr-0">
                        <h1 className="text-4xl font-semibold leading-relaxed text-slate-50 tablet:text-xl">Início de uma nova <span className="text-secondary-500">experência</span></h1>
                        <p className="pr-40 tablet:pr-0 text-sm text-gray-50 leading-loose tablet:leading-loose mt-8 tablet:text-sm">No campos abaixo vamos colher alguns dados importantes para poder iniciar o seu projeto</p>
                    </div>
                    <div className="flex-1">
                        <form action="" className="px-8 py-10 border border-slate-200 rounded-lg space-y-8 bg-white tablet:px-4 tablet:py-4">
                            <h2 className="text-lg font-medium text-slate-900 tablet:text-base">Como podemos te ajudar?</h2>
                            <div className="flex gap-4 w-8/12 items-center tablet:w-full">
                                <div className="relative w-12 h-12 min-h-[3rem] min-w-[3rem] rounded-full border-2 border-slate-200 flex items-center justify-center p-1">
                                    <Image className="" src="/logo.png" width={40} height={40} alt="Vibecriativa Logotipo" />
                                    <span className="top-0 left-8 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                    <span className="animate-ping top-0 left-8 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                </div>
                                <span className="text-sm text-slate-500 leading-relaxed"><strong className="font-medium text-slate-900">Entraremos em contato</strong> por Whatsapp ou Email dentro de 24 horas.</span>
                            </div>
                            <Input label="Assunto" placeholder="Digitar assunto" />
                            <Input label="Mensagem" placeholder="Digitar mensagem..." asElement="textarea" helperText="Deixe aqui sua dúvida, sugestão ou informações sobre projeto" />
                            <div className="space-y-4 py-2">
                                <strong className="text-base font-medium block">Seu melhor contato &#128513;</strong>
                                <small className="text-sm block leading-loose text-slate-500">Vamos precisar de um dos contatos abaixo, você pode inserir o que for melhor pra você, ou, os dois se quiser.</small>
                            </div>
                            <div className="grid grid-cols-2 gap-4 tablet:grid-cols-1 tablet:gap-8">
                                <Input label="Contato de Whatsapp" helperText="(00) 0 0000-0000" placeholder="Digitar whatsapp" />
                                <Input label="Email" helperText="exemplo@email.com" placeholder="Digitar email" />
                            </div>
                            <Input label="Seu Nome" placeholder="Digitar nome"  />
                            <Button className="tablet:w-full" primary={true}> <RiSendPlaneFill /> Enviar mensagem</Button>
                        </form>
                    </div>
                </div>
            </header>
            <Footer />
        </Fragment>
    )
}