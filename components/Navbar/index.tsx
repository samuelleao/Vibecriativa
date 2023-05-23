import { Button } from "../Button";
import Image from 'next/image'
import { NavbarTypes } from "./types";
import { useEffect, useState } from "react";

export function Navbar({ element }: NavbarTypes) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver | undefined;
      
        if (element != null) {
          observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
            console.log("isIntersecting: ", entry.isIntersecting);
          });
      
          observer.observe(element);
        }
      
        return () => {
          if (observer) {
            observer.disconnect();
          }
        };
      }, [element]);

    return (
        <nav className={`py-3 fixed w-full top-8 z-10 transition-all ${isVisible && 'bg-white top-[0_!important] shadow-sm'} tablet:bg-white tablet:top-0 tablet:shadow-sm`}>
            <div className='container flex justify-between items-center'>
                <div className='flex space-x-8 items-center'>
                    <Image src="/logo.png" alt="" width={130} height={130} />
                    <ul className='flex space-x-8 tablet:hidden'>
                        <li className='text-sm text-gray-900'><a href="">Início</a></li>
                        <li className='text-sm text-gray-900'><a href="">Sobre a vibe</a></li>
                        <li className='text-sm text-gray-900'>Serviços</li>
                        <li className='text-sm text-gray-900'><a href="">Portfólio</a></li>
                        <li className='text-sm text-gray-900'><a href="">Vibecriativa CMS</a></li>
                    </ul>
                </div>
                <div className='flex space-x-4'>
                    <Button white={true} className="mobile:fixed mobile:bottom-0 mobile:w-full mobile:left-0">
                        <img src="/whatsapp.svg" alt="" />
                        Falar com a Vibecriativa
                    </Button>
                    <Button className="tablet:bg-primary-600 tablet:border-primary-600 tablet:text-gray-50 tablet:hover:bg-primary-700 tablet:hover:border-primary-700" white={true} outline={true} primary={isVisible}>Iniciar projeto</Button>
                </div>
            </div>
        </nav>
    )
}