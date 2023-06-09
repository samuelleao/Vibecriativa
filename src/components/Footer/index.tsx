import { Fragment } from "react";
import { Button } from "@components/Button";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useGetServicesQuery } from "generated/graphql";
import { LinkWhatsapp } from "@components/LinkWhatsapp";
import { services } from "data/services";

export function Footer() {

    const [{ data }] = useGetServicesQuery();

    return (
        <Fragment>
            <section className={`bg-[url('/footer.webp')] py-40 bg-fixed bg-no-repeat bg-cover tablet:py-20`}>
                <div className="container">
                    <div className="max-w-[500px]">
                        <h6 className='text-3xl tablet:text-lg font-bold text-slate-50 leading-relaxed mb-10'>Temos o prazer em contribuir de forma efetiva para o crescimento da sua empresa</h6>
                        <Link href="/contato"> <Button primary={true}>Entrar em contato</Button></Link>
                    </div>
                </div>
            </section>
            <footer className='py-32 bg-slate-900'>
                <div className="container flex justify-between tablet:flex-col-reverse">
                    <div className="grid grid-cols-3 w-8/12 tablet:w-full tablet:grid-cols-1 tablet:gap-32 tablet:mt-32">
                        <ul className='space-y-10'>
                            <li className='text-sm font-semibold text-slate-50'>Institucional</li>
                            <li className='text-sm font-medium text-slate-400 hover:text-slate-200'><Link href="/sobre">Sobre a vibe</Link></li>
                            <li className='text-sm font-medium text-slate-400 hover:text-slate-200'><Link href="/home#portfolio">Portfólio</Link></li>
                            <li className='text-sm font-medium text-slate-400 hover:text-slate-200'><LinkWhatsapp>Falar com a vibe</LinkWhatsapp></li>
                            <li className='text-sm font-medium text-slate-400 hover:text-slate-200'><Link href="/contato">Entrar em contato</Link></li>
                        </ul>
                        <ul className='space-y-10'>
                            <li className='text-sm font-semibold text-slate-50'>Serviços</li>
                            {services?.map((item) => (
                                <li className='text-sm font-medium text-slate-400 hover:text-slate-200' key={item.name}><Link href={item.url} data-before="" className="">{item.name}</Link></li>
                            ))}
                        </ul>
                        <ul className='space-y-10'>
                            <li className='text-sm font-semibold text-slate-50'>Dúvidas</li>
                            <li className='text-sm font-medium text-slate-400 hover:text-slate-200'><LinkWhatsapp>Falar no whatsapp</LinkWhatsapp></li>
                            <li className='text-sm font-medium text-slate-400 hover:text-slate-200'>Enviar email</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <ul className='flex tablet:flex-wrap gap-4 tablet:gap-4 tablet:mb-32'>
                            <li><Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vibecriativa" className='w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500  hover:bg-blue-600  text-slate-50'><span className="sr-only">Facebook</span><FaFacebookF size={18} /></Link></li>
                            <li><Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vibecriativa/" className='w-12 h-12 rounded-lg flex items-center justify-center bg-pink-500  hover:bg-pink-600  text-slate-50'><span className="sr-only">Instagram</span><FaInstagram size={18} /></Link></li>
                            <li><Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/ag%C3%AAncia-vibecriativa/" className='w-12 h-12 rounded-lg flex items-center justify-center bg-sky-600   hover:bg-sky-700   text-slate-50'><span className="sr-only">Linkedin</span><FaLinkedinIn size={18} /></Link></li>
                            <li><LinkWhatsapp><span className='w-12 h-12 rounded-lg flex items-center justify-center bg-green-500 hover:bg-green-600 text-slate-50'><span className="sr-only">Whatsapp</span><FaWhatsapp size={18} /></span></LinkWhatsapp></li>
                            <li><Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/Vibecriativa" className='w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500  hover:bg-blue-600  text-slate-50'><span className="sr-only">Twitter</span><FaTwitter size={18} /></Link></li>
                        </ul>
                        <Image src="/logofooter.png" alt="Vibecriativa Logotipo" width={130} height={130} className='mt-12' />
                        <p className='text-slate-400 text-sm mb-6 mt-12'>Vibecriativa Digital Marketing e Web ©</p>
                        <p className='text-slate-400 text-sm'>{getCurrentYear()} Todos os direitos reservados</p>
                    </div>
                </div>
                <div className="container">
                    <ul className='space-y-10 mt-32'>
                        <li className='text-sm font-semibold text-slate-50'>Privacidade</li>
                        <li className='text-sm font-medium text-slate-400 hover:text-slate-200'><Link href="/politica-de-privacidade">Política de privacidade</Link></li>
                    </ul>
                </div>
            </footer>
        </Fragment>
    )
}

function getCurrentYear() {
    const data = new Date();
    return data.getFullYear();
}