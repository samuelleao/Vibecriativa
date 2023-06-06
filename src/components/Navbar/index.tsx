import { Button } from "@components/Button";
import Image from 'next/image'
import { NavbarTypes } from "./types";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LinkWhatsapp } from "@components/LinkWhatsapp";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { FaAngleDown } from "react-icons/fa";
import { useGetServicesQuery } from "generated/graphql";
import { RxDotsVertical } from "react-icons/rx"

export function Navbar({ element }: NavbarTypes) {

    const [{ data }] = useGetServicesQuery();

    const [isVisible, setIsVisible] = useState(false);
    const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver | undefined;

        if (element != null) {
            observer = new IntersectionObserver(([entry]) => {
                setIsVisible(entry.isIntersecting);
            });

            observer.observe(element);
        } else {
            setIsVisible(true);

        }

    }, [element]);

    function changeVisibleMenuMobile() {
        setMenuMobileIsVisible(!menuMobileIsVisible)
    }

    return (
        <nav className={`py-3 fixed w-full top-8 z-20 transition-all ${isVisible && 'bg-white top-[0_!important] shadow-sm'}`}>
            <div className='container flex justify-between items-center'>
                <div className='flex space-x-8 items-center'>
                    <Link href="/">
                        <Image quality={100} priority src={`${isVisible ? `/logo.png` : `/logofooter.png`}`} alt="Vibecriativa Logotipo" width={130} height={130} />
                    </Link>
                    <NavigationMenu.Root>
                        <NavigationMenu.List asChild >
                            <ul className={`flex items-center space-x-8 tablet:space-x-0 ${menuMobileIsVisible ? `${isVisible ? 'tablet:top-[67px]' : 'tablet:top-[100px]'} tablet:flex tablet:flex-col tablet:justify-start tablet:items-start tablet:fixed tablet:top-[67px] tablet:w-full tablet:h-max tablet:bg-white tablet:left-0 tablet:z-30 tablet:gap-8 tablet:p-8 relative tablet:before:absolute tablet:before:translate-y-[100%] tablet:before:bottom-0 tablet:before:left-0 tablet:before:bg-black/20 tablet:before:h-full tablet:before:w-full ` : 'tablet:hidden'}`}>
                                <NavigationMenu.Item asChild>
                                    <li className={`text-sm text-gray-50 tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isVisible && "text-gray-900"}`}><Link href="/home">Início</Link></li>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item asChild>
                                    <li className={`text-sm text-gray-50 tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isVisible && "text-gray-900"}`}><Link href="/sobre">Sobre a vibe</Link></li>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item className="relative">
                                    <NavigationMenu.Trigger className={`relative group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 leading-none outline-none focus:shadow-[0_0_0_2px] text-sm text-gray-50 font-normal tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isVisible && "text-gray-900"} tablet:p-0`}>
                                        Serviços
                                        <FaAngleDown
                                            className="text-violet10 relative top-[0.063rem] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                            aria-hidden
                                        />
                                    </NavigationMenu.Trigger>
                                    <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                                        <ul className="m-0 grid list-none gap-8 p-6 grid-cols-2 tablet:flex tablet:flex-col">
                                            {data?.services?.map((item) => (
                                                <li className="hover:bg-slate-100 p-3 rounded-lg" key={item.title}>
                                                    <Link href={`/servico/${item.url}`}>
                                                        <span className="block text-base text-gray-900 font-medium mb-4">{item.title}</span>
                                                        {item.description && (<small className="block text-xs text-gray-500">{item.description.slice(0, 80)}...</small>)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item asChild>
                                    <li className={`text-sm text-gray-50 tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isVisible && "text-gray-900"}`}><Link href="/home#portfolio">Portfólio</Link></li>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item asChild>
                                    <li className={`text-sm text-gray-50 tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isVisible && "text-gray-900"}`}><Link href="/cms">Produtos</Link></li>
                                </NavigationMenu.Item>
                            </ul>
                        </NavigationMenu.List>
                        <div className="perspective-[125rem] absolute top-full left-0 flex w-full justify-center z-30">
                            <NavigationMenu.Viewport className="shadow-lg data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-[42.5rem] origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                        </div>
                    </NavigationMenu.Root>
                </div>
                <div className='flex space-x-4 items-center'>
                    <LinkWhatsapp>
                        <Button white={true} className="notbook2:fixed notbook2:rounded-none notbook2:bottom-0 notbook2:w-full notbook2:left-0">
                            <Image width={16} height={16} src="/whatsapp.svg" alt="Logotipo do Whatsapp" />
                            Falar com a Vibecriativa
                        </Button>
                    </LinkWhatsapp>
                    <Link href="/contato">
                        <Button className="tablet:bg-primary-600 tablet:border-primary-600 tablet:text-gray-50 tablet:hover:bg-primary-700 tablet:hover:border-primary-700 mobile:hidden" white={true} outline={true} primary={isVisible}>Entrar em contato</Button>
                    </Link>
                    <button onClick={changeVisibleMenuMobile} className={`px-4 py-2 w-max rounded relative desktop:hidden mobile:flex h-4`}>
                        <span className={`transition-transform ${menuMobileIsVisible ? 'rotate-[45deg] origin-left' : ''} w-6 top-0 left-0 absolute h-[2px]  rounded-full ${isVisible ? `bg-slate-950` : 'bg-white'}`}></span>
                        <span className={`transition-transform ${menuMobileIsVisible ? 'invisible' : 'visible'} absolute top-1/2 -translate-y-1/2 left-0 w-6 h-[2px] rounded-full ${isVisible ? `bg-slate-950` : 'bg-white'}`}></span>
                        <span className={`transition-transform ${menuMobileIsVisible ? '-rotate-[45deg] origin-[16%] w-6 ' : ''} w-4 bottom-0 left-0 absolute h-[2px] rounded-full ${isVisible ? `bg-slate-950` : 'bg-white'}`}></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}