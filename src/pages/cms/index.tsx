import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment, useState } from "react";
import Image from "next/image"
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import Head from "next/head";

export default function CMS() {
    const [title, setTitle] = useState("Meu lindo título do meu site")
    const [description, setDescription] = useState("Subtítulo incrível para surpreender meus clientes")
    const [currentImage, setCurrentImage] = useState<string>('/cms/3.png');

    function handleAccordionItemClick(event: React.MouseEvent<HTMLImageElement, MouseEvent> | React.KeyboardEvent<HTMLImageElement>) {

        if (event.type === 'click' || (event.type === 'keydown' && (event as React.KeyboardEvent<HTMLImageElement>).key === 'Enter')) {
            const src = event.currentTarget.src;
            setCurrentImage(src);
        }
    };

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | CMS</title>
                <meta name="description" content="Você pode editar e personalizar seu conteúdo de forma simples e intuitiva, sem precisar de conhecimentos técnicos avançados. Isso permite que você tenha total controle sobre a aparência e o conteúdo do seu site" />
            </Head>
            <Navbar />
            <header className="pt-40 pb-32 bg-primary-500">
                <div className="container flex justify-center">
                    <div className="w-[41.5rem] text-center space-y-8">
                        <h1 className="text-4xl font-semibold text-gray-50 mobile:text-xl">Vibecriativa CMS</h1>
                        <h2 className="text-xl font-medium text-gray-50">Você pode controlar seu conteúdo</h2>
                        <p className="text-base font-normal text-gray-50">Você pode editar e personalizar seu conteúdo de forma simples e intuitiva, sem precisar de conhecimentos técnicos avançados. Isso permite que você tenha total controle sobre a aparência e o conteúdo do seu site</p>
                    </div>
                </div>
            </header>
            <section className="pt-36 pb-0 tablet:pt-8">
                <div className="container flex justify-center">
                    <div className="max-w-[60rem] flex gap-6 -mt-[16%] tablet:mt-0 tablet:flex-col">
                        <div className='p-6 shadow-lg bg-white h-max space-y-5 rounded-lg flex-1'>
                            <h3 className="text-lg font-semibold text-gray-900">Vibecriativa CMS</h3>
                            <form action="" className="space-y-8">
                                <Input placeholder="Título" label="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
                                <Input placeholder="Descrição" label="Descrição" value={description} onChange={(event) => setDescription(event.target.value)} />
                            </form>
                            <label htmlFor="" className="text-sm font-medium text-slate-900 flex items-center hover:cursor-pointer">Imagem:</label>
                            <div className="grid grid-cols-3 gap-6">
                                <Image tabIndex={0} onKeyDown={handleAccordionItemClick} onClick={handleAccordionItemClick} src="/cms/1.png" width={300} height={200} className="hover:cursor-pointer" alt="Pessoa Escrevendo em um ambiente com plantas" />
                                <Image tabIndex={0} onKeyDown={handleAccordionItemClick} onClick={handleAccordionItemClick} src="/cms/2.png" width={300} height={200} className="hover:cursor-pointer" alt="Pessoa com uma planta cobrindo metade do rosto" />
                                <Image tabIndex={0} onKeyDown={handleAccordionItemClick} onClick={handleAccordionItemClick} src="/cms/3.png" width={300} height={200} className="hover:cursor-pointer" alt="Pessoa segurando um jarro de planta" />
                            </div>
                        </div>
                        <div className='relative p-4 shadow-lg bg-white h-max space-y-5 rounded-lg w-80 tablet:w-full overflow-hidden'>
                            <div className="absolute top-0 left-0 h-44 w-full flex items-center justify-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-900/50 before:z-10">
                                <div className='flex space-x-1 absolute top-3 left-3 z-30'>
                                    <span className='h-2 w-2 bg-rose-500 rounded-full'></span>
                                    <span className='h-2 w-2 bg-yellow-400 rounded-full'></span>
                                    <span className='h-2 w-2 bg-green-400 rounded-full'></span>
                                </div>
                                <div className="space-y-8 w-full px-4 flex justify-start flex-col items-start">
                                    <h4 className="text-sm font-semibold text-gray-50 relative z-10">{title}</h4>
                                    <p className="text-xs text-gray-50 relative z-10 whitespace-pre-wrap leading-relaxed">{description}</p>
                                </div>
                                <Image src={currentImage} className="absolute top-0 left-0 w-full h-full object-cover" width={300} height={176} alt="Pessoa segurando um jarro de planta" />
                            </div>
                            <div className="grid grid-cols-3 gap-4 pt-44">
                                <div className="bg-gray-100 h-32 rounded-lg"></div>
                                <div className="bg-gray-100 h-32 rounded-lg"></div>
                                <div className="bg-gray-100 h-32 rounded-lg"></div>
                            </div>
                            <div className='h-8 bg-gray-100 w-24 rounded-lg'></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32">
                <div className="container flex flex-col items-center justify-center">
                    <div className="w-[60rem] max-w-full">
                        <h1 className="text-3xl text-gray-900 font-semibold text-center mb-32">Valores dos nossos planos</h1>
                        <div className="flex gap-12 tablet:flex-col">
                            <div className="w-[300px] tablet:w-full p-6 bg-white rounded-lg shadow-lg">
                                <h5 className="mb-4 text-lg font-medium text-gray-500">Plano Padrão</h5>
                                <div className="flex items-baseline text-gray-900 dark:text-white">
                                    <span className="text-4xl font-bold text-gray-900">R$ 500</span>
                                </div>
                                <ul role="list" className="space-y-5 my-7">
                                    <li className="flex space-x-3">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-900">Edição de textos</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-900">Edição de imagens</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-900">1 acesso</span>
                                    </li>
                                    <li className="flex space-x-3 line-through decoration-gray-500">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-500">Upload de arquivos</span>
                                    </li>
                                    <li className="flex space-x-3 line-through decoration-gray-500">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-500">Edição de produtos</span>
                                    </li>
                                    <li className="flex space-x-3 line-through decoration-gray-500">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-500">Edição de colaboradores</span>
                                    </li>
                                </ul>
                                <Button className="w-full" primary={true}>Entrar em contato</Button>
                            </div>
                            <div className="flex-1 p-6 bg-primary-500 rounded-lg shadow-lg">
                                <h5 className="mb-4 text-lg font-medium text-gray-50">Plano</h5>
                                <div className="flex items-baseline text-gray-50 dark:text-white">
                                    <span className="text-4xl font-bold text-gray-50 tablet:text-lg">Personalizado</span>
                                </div>
                                <ul role="list" className="space-y-5 my-7">
                                    <li className="flex space-x-3">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-50">Edição de textos</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-50">Edição de imagens</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-50">Upload de arquivos</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-50">Edição de produtos</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-50">Suporte dentro do horário comercial</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm font-normal leading-tight text-gray-50">Edição de colaboradores</span>
                                    </li>
                                </ul>
                                <Button className="w-full">Entrar em contato</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}