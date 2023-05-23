import { Button } from "../Button";
import Image from 'next/image'
import { NavbarTypes } from "./types";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar({ element }: NavbarTypes) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver | undefined;

        if (element != null) {
            observer = new IntersectionObserver(([entry]) => {
                setIsVisible(entry.isIntersecting);
            });

            observer.observe(element);
        }

    }, [element]);

    return (
        <nav className={`py-3 fixed w-full top-8 z-20 transition-all ${isVisible && 'bg-white top-[0_!important] shadow-sm'} tablet:bg-white tablet:top-0 tablet:shadow-sm`}>
            <div className='container flex justify-between items-center'>
                <div className='flex space-x-8 items-center'>
                    <Image quality={100} priority src="/logo.png" alt="Vibecriativa Logotipo" width={130} height={130} />
                    <ul className='flex space-x-8 tablet:hidden'>
                        <li className='text-sm text-gray-900'><Link href="home">Início</Link></li>
                        <li className='text-sm text-gray-900'><Link href="sobre">Sobre a vibe</Link></li>
                        <li className='text-sm text-gray-900'>Serviços</li>
                        <li className='text-sm text-gray-900'><Link href="#portfolio">Portfólio</Link></li>
                        <li className='text-sm text-gray-900'><Link href="cms">Vibecriativa CMS</Link></li>
                    </ul>
                </div>
                <div className='flex space-x-4'>
                    <Link target="_blank" href="https://api.whatsapp.com/send?phone=558420207999&text=Ol%C3%A1,%20equipe%20da%20Vibecriativa!%20%F0%9F%8C%9F%0A%0AEstou%20interessado(a)%20em%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20software%20e%20marketing%20que%20voc%C3%AAs%20oferecem.%20Gostaria%20de%20agendar%20uma%20consulta%20ou%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20meu%20neg%C3%B3cio%20a%20crescer.">
                        <Button white={true} className="mobile:fixed mobile:bottom-0 mobile:w-full mobile:left-0">
                            <Image width={16} height={16} src="/whatsapp.svg" alt="Logotipo do Whatsapp" />
                            Falar com a Vibecriativa
                        </Button>
                    </Link>
                    <Button className="tablet:bg-primary-600 tablet:border-primary-600 tablet:text-gray-50 tablet:hover:bg-primary-700 tablet:hover:border-primary-700" white={true} outline={true} primary={isVisible}>Iniciar projeto</Button>
                </div>
            </div>
        </nav>
    )
}