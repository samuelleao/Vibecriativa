import { Fragment } from "react";
import { Button } from "../Button";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
    return (
        <Fragment>
            <section className={`bg-[url('/footer.jpg')] py-40 bg-fixed bg-no-repeat bg-cover tablet:py-20`}>
                <div className="container">
                    <div className="max-w-[500px]">
                        <h6 className='text-3xl tablet:text-lg font-bold text-gray-50 leading-relaxed mb-10'>Temos o prazer em contribuir de forma efetiva para o crescimento da sua empresa</h6>
                        <Button primary={true}>Iniciar Projeto</Button>
                    </div>
                </div>
            </section>
            <footer className='py-32 bg-gray-900'>
                <div className="container flex justify-between tablet:flex-col-reverse">
                    <div className="grid grid-cols-3 w-8/12 tablet:w-full tablet:grid-cols-1 tablet:gap-32 tablet:mt-32">
                        <ul className='space-y-10'>
                            <li className='text-sm font-semibold text-gray-50'>Institucional</li>
                            <li className='text-sm font-medium text-gray-400'>Sobre a vibe</li>
                            <li className='text-sm font-medium text-gray-400'>Serviços</li>
                            <li className='text-sm font-medium text-gray-400'>Portfólio</li>
                            <li className='text-sm font-medium text-gray-400'>Falar com a vibe</li>
                            <li className='text-sm font-medium text-gray-400'>Iniciar projeto</li>
                            <li className='text-sm font-medium text-gray-400'>Nossos Processos</li>
                        </ul>
                        <ul className='space-y-10'>
                            <li className='text-sm font-semibold text-gray-50'>Institucional</li>
                            <li className='text-sm font-medium text-gray-400'>Website</li>
                            <li className='text-sm font-medium text-gray-400'>Landing Page</li>
                            <li className='text-sm font-medium text-gray-400'>Sistema</li>
                            <li className='text-sm font-medium text-gray-400'>Blog</li>
                            <li className='text-sm font-medium text-gray-400'>Aplicativo</li>
                        </ul>
                        <ul className='space-y-10'>
                            <li className='text-sm font-semibold text-gray-50'>Dúvidas</li>
                            <li className='text-sm font-medium text-gray-400'>Falar no whatsapp</li>
                            <li className='text-sm font-medium text-gray-400'>Enviar email</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul className='flex gap-4 tablet:grid tablet:grid-cols-3 tablet:gap-16 tablet:mb-32'>
                            <li><Link href="" className='w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500  hover:bg-blue-600  text-gray-50'><FaFacebookF size={18} /></Link></li>
                            <li><Link href="" className='w-12 h-12 rounded-lg flex items-center justify-center bg-pink-500  hover:bg-pink-600  text-gray-50'><FaInstagram size={18} /></Link></li>
                            <li><Link href="" className='w-12 h-12 rounded-lg flex items-center justify-center bg-sky-600   hover:bg-sky-700   text-gray-50'><FaLinkedinIn size={18} /></Link></li>
                            <li><Link href="" className='w-12 h-12 rounded-lg flex items-center justify-center bg-sky-500   hover:bg-sky-600   text-gray-50'><FaTelegram size={18} /></Link></li>
                            <li><Link href="" className='w-12 h-12 rounded-lg flex items-center justify-center bg-green-500 hover:bg-green-600 text-gray-50'><FaWhatsapp size={18} /></Link></li>
                            <li><Link href="" className='w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500  hover:bg-blue-600  text-gray-50'><FaTwitter size={18} /></Link></li>
                        </ul>
                        <Image src="/logofooter.png" alt="Vibecriativa Logotipo" width={130} height={130} className='mt-12' />
                        <p className='text-gray-400 text-sm mb-6 mt-12'>Vibecriativa Digital Marketing e Web. ©</p>
                        <p className='text-gray-400 text-sm'>2023 Todos os direitos reservados</p>
                    </div>
                </div>
                <div className="container">
                    <ul className='space-y-10 mt-32'>
                        <li className='text-sm font-semibold text-gray-50'>Privacidade</li>
                        <li className='text-sm font-medium text-gray-400'>Política de privacidade</li>
                        <li className='text-sm font-medium text-gray-400'>Gerenciar uso de cookies</li>
                    </ul>
                </div>
            </footer>
        </Fragment>
    )
}