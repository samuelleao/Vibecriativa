import { Button } from "@components/Button";
import Image from 'next/image'
import { NavbarTypes } from "./types";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LinkWhatsapp } from "@components/LinkWhatsapp";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { FaAngleDown } from "react-icons/fa";
import { useGetServicesQuery } from "generated/graphql";

export function Navbar({ element }: NavbarTypes) {

    const [{ data }] = useGetServicesQuery();

    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <nav className={`py-3 fixed w-full top-8 z-20 transition-all ${isVisible && 'bg-white top-[0_!important] shadow-sm'} tablet:bg-white tablet:top-0 tablet:shadow-sm`}>
            <div className='container flex justify-between items-center'>
                <div className='flex space-x-8 items-center'>
                    <Image quality={100} priority src="/logo.png" alt="Vibecriativa Logotipo" width={130} height={130} />
                    <NavigationMenu.Root>
                        <NavigationMenu.List asChild >
                            <ul className='flex items-center space-x-8 tablet:hidden'>
                                <NavigationMenu.Item asChild>
                                    <li className='text-sm text-gray-900'><Link href="/home">Início</Link></li>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item asChild>
                                    <li className='text-sm text-gray-900'><Link href="/sobre">Sobre a vibe</Link></li>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item className="relative">
                                    <NavigationMenu.Trigger className='relative group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 leading-none outline-none focus:shadow-[0_0_0_2px] text-sm text-gray-900 font-normal'>
                                        Serviços{' '}
                                        <FaAngleDown
                                            className="text-violet10 relative top-[0.063rem] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                            aria-hidden
                                        />
                                    </NavigationMenu.Trigger>
                                    <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                                        <ul className="m-0 grid list-none gap-8 p-6 grid-cols-2">
                                            {data?.services?.map((item) => (
                                                <li className="hover:bg-slate-100 p-3 rounded-lg">
                                                    <Link href={`/servico/${item.url}`} key={item.title}>
                                                        <span className="block text-base text-gray-900 font-medium mb-4">{item.title}</span>
                                                        {item.description && (<small className="block text-xs text-gray-500">{item.description.slice(0, 80)}...</small>)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item asChild>
                                    <li className='text-sm text-gray-900'><Link href="/home#portfolio">Portfólio</Link></li>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item asChild>
                                    <li className='text-sm text-gray-900'><Link href="/cms">Vibecriativa CMS</Link></li>
                                </NavigationMenu.Item>
                                <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[0.625rem] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                                    <div className="relative top-[70%] h-[0.625rem] w-[0.625rem] rotate-[45deg] rounded-tl-[0.125rem] bg-white" />
                                </NavigationMenu.Indicator>
                            </ul>
                        </NavigationMenu.List>

                        <div className="perspective-[125rem] absolute top-full left-0 flex w-full justify-center">
                            <NavigationMenu.Viewport className="shadow-lg data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-[42.5rem] origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                        </div>
                    </NavigationMenu.Root>


                </div>
                <div className='flex space-x-4'>
                    <LinkWhatsapp>
                        <Button white={true} className="mobile:fixed mobile:bottom-0 mobile:w-full mobile:left-0">
                            <Image width={16} height={16} src="/whatsapp.svg" alt="Logotipo do Whatsapp" />
                            Falar com a Vibecriativa
                        </Button>
                    </LinkWhatsapp>
                    <Button className="tablet:bg-primary-600 tablet:border-primary-600 tablet:text-gray-50 tablet:hover:bg-primary-700 tablet:hover:border-primary-700" white={true} outline={true} primary={isVisible}>Iniciar projeto</Button>
                </div>
            </div>
        </nav>
    )
}