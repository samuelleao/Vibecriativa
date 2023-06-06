import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment } from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";
import { FaArrowDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Button } from "@components/Button";


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
                <div className="mx-auto translate-y-14 tablet:translate-y-0 max-w-full tablet:mt-0 tablet:px-4 w-[60rem] relative z-[1] mt-12">
                    <div className="flex tablet:flex-col gap-4 tablet:gap-8">
                        <div className="shadow-xl rounded-lg overflow-hidden relative flex-1 space-y-4 px-8 pt-9 pb-28 bg-gradient-to-r from-[#2938C0] to-[#5480F4]">
                            <h3 className="text-xl font-semibold text-slate-50">Assessorias</h3>
                            <p className="text-sm font-normal text-slate-50 leading-loose">Neste nosso ambiente vamos poder acompanhar de perto seus números, alcance e resultados do seu produto digital</p>
                            <a href="" className="flex justify-between px-8 bg-white items-center text-sm absolute w-full h-14 left-0 bottom-0">Ver soluções e planos <FaArrowDown /></a>
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

                <Image className="max-w-full absolute w-full top-0 left-0 h-full object-cover -z-[1]" src="/marketing-header.png" width={1200} height={600} alt="" />

            </header>

            <Footer />
        </Fragment>
    )
}