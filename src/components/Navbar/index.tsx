import { Button } from "@components/Button";
import Image from 'next/image'
import { NavbarTypes } from "./types";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LinkWhatsapp } from "@components/LinkWhatsapp";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { FaAngleDown } from "react-icons/fa";
import { useGetServicesQuery } from "generated/graphql";

export function Navbar({ navbarRef, isNavbarVisible = true }: NavbarTypes) {

    const [{ data }] = useGetServicesQuery();

    const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);

    function changeVisibleMenuMobile() {
        setMenuMobileIsVisible(!menuMobileIsVisible)
    }

    return (
        <nav ref={navbarRef} className={`py-3 fixed w-full top-8 z-20 ${isNavbarVisible && 'bg-white top-[0_!important] shadow-sm'}`}>
            <div className='container flex justify-between items-center'>
                <div className='flex space-x-8 items-center justify-between w-full'>
                    <div className="flex items-center gap-8 w-full">
                        <Link href="/">
                            <Image quality={100} priority src={`${isNavbarVisible ? `/logo.png` : `/logofooter.png`}`} alt="Vibecriativa Logotipo" width={130} height={130} />
                        </Link>
                        <NavigationMenu.Root className="flex-1">
                            <NavigationMenu.List asChild >
                                <ul className={`flex-1 justify-between flex items-center space-x-8 tablet:space-x-0 ${menuMobileIsVisible ? `${isNavbarVisible ? 'tablet:top-[65px]' : 'tablet:top-[100px]'} tablet:flex tablet:flex-col tablet:justify-start tablet:items-start tablet:fixed tablet:top-[67px] tablet:w-full tablet:h-max tablet:bg-white tablet:left-0 tablet:z-30 tablet:gap-8 tablet:p-8 relative tablet:before:absolute tablet:before:translate-y-[100%] tablet:before:bottom-0 tablet:before:left-0 tablet:before:bg-black/20 tablet:before:h-full tablet:before:w-full ` : 'tablet:hidden'}`}>
                                    <NavigationMenu.Item asChild>
                                        <li className={`text-sm text-gray-50 tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isNavbarVisible && "text-gray-900"}`}><Link href="/home">Início</Link></li>
                                    </NavigationMenu.Item>
                                    <NavigationMenu.Item asChild>
                                        <li className={`text-sm text-gray-50 tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isNavbarVisible && "text-gray-900"}`}><Link href="/sobre">Sobre a vibe</Link></li>
                                    </NavigationMenu.Item>
                                    <NavigationMenu.Item className="relative">
                                        <NavigationMenu.Trigger className={`relative group flex select-none items-center justify-between gap-[0.125rem] rounded-[4px] px-3 py-2 leading-none outline-none focus:shadow-[0_0_0_0.125rem] text-sm text-gray-50 font-normal tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isNavbarVisible && "text-gray-900"} tablet:p-0`}>
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
                                        <li className={`text-sm text-gray-50 tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isNavbarVisible && "text-gray-900"}`}><Link href="/home#portfolio">Portfólio</Link></li>
                                    </NavigationMenu.Item>
                                    <NavigationMenu.Item asChild>
                                        <li className={`text-sm text-gray-50 tablet:text-slate-900 tablet:px-4 tablet:py-6 tablet:w-full ${isNavbarVisible && "text-gray-900"}`}><Link href="/cms">Produtos</Link></li>
                                    </NavigationMenu.Item>
                                    <div className='flex space-x-4 items-center flex-1 justify-end'>
                                        <LinkWhatsapp>
                                            <Button white={true} className="notbook2:fixed notbook2:rounded-none notbook2:bottom-0 notbook2:w-full notbook2:left-0">
                                                <Image width={16} height={16} src="/whatsapp.svg" alt="Logotipo do Whatsapp" />
                                                Falar com a Vibecriativa
                                            </Button>
                                        </LinkWhatsapp>
                                        <Link href="/contato">
                                            <Button className="tablet:bg-primary-600 tablet:border-primary-600 tablet:text-gray-50 tablet:hover:bg-primary-700 tablet:hover:border-primary-700" white={true} outline={true} primary={isNavbarVisible}>Entrar em contato</Button>
                                        </Link>
                                    </div>
                                </ul>
                            </NavigationMenu.List>
                            <div className="perspective-[125rem] absolute top-full left-0 flex w-full justify-center z-30">
                                <NavigationMenu.Viewport className="shadow-lg data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[0.625rem] h-[var(--radix-navigation-menu-viewport-height)] w-[42.5rem] origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                            </div>
                        </NavigationMenu.Root>
                    </div>
                </div>
                <div className=''>
                    <button onClick={changeVisibleMenuMobile} className={`px-4 py-2 w-max rounded relative desktop:hidden notbook1:hidden tablet:flex mobile:flex h-4`}>
                        <span className={`transition-transform ${menuMobileIsVisible ? 'rotate-[45deg] origin-left' : ''} w-6 top-0 left-0 absolute h-[0.125rem]  rounded-full ${isNavbarVisible ? `bg-slate-950` : 'bg-white'}`}></span>
                        <span className={`transition-transform ${menuMobileIsVisible ? 'invisible' : 'visible'} absolute top-1/2 -translate-y-1/2 left-0 w-6 h-[0.125rem] rounded-full ${isNavbarVisible ? `bg-slate-950` : 'bg-white'}`}></span>
                        <span className={`transition-transform ${menuMobileIsVisible ? '-rotate-[45deg] origin-[16%] w-6 ' : ''} w-4 bottom-0 left-0 absolute h-[0.125rem] rounded-full ${isNavbarVisible ? `bg-slate-950` : 'bg-white'}`}></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}