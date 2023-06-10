import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment } from "react";
import Head from "next/head";
import { Button } from "@components/Button";
import Image from "next/image"

export default function Products() {

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Produtos</title>
            </Head>
            <Navbar />
            <header className="pt-44 tablet:pb-12 tablet:pt-28">
                <div className="flex justify-between items-center mb-20 tablet:mb-0 tablet:flex-col tablet:items-start tablet:gap-12">
                    <div className="container">
                        <div className='w-5/12 tablet:w-full flex flex-col'>
                            <strong className='text-sm font-medium mb-4 text-slate-500'>Produtos</strong>
                            <h3 className='text-4xl font-bold mobile:text-2xl mobile:leading-relaxed leading-relaxed text-slate-900'>Inovação e automatização com qualidade.</h3>
                            <p className='font-normal text-base mobile:text-sm mobile:leading-relaxed leading-relaxed text-slate-500 mt-6'>Empresas como a sua estão redesenhando a forma como projetam</p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="pb-32  tablet:pt-0 tablet:pb-20">
                <div className="container">
                    <div className="flex tablet:flex-col gap-10">
                        <div className="relative flex-1 tablet:w-full bg-[#F97316] px-12 py-16 tablet:px-6 tablet:py-12 space-y-28 overflow-hidden rounded-lg">
                            <div className="w-8/12 tablet:w-full space-y-8 relative z-10">
                                <h1 className="text-5xl tablet:text-2xl text-white font-semibold">Refácil</h1>
                                <p className="text-sm font-medium text-white leading-loose">A Refácil oferece os recursos necessários para seu restaurante explorar o potencial do seu próprio delivery e crescer cada vez mais fortalecendo a sua própria marca.</p>
                            </div>
                            <a target="_blank" href="https://www.refacil.com.br/" className="block">
                                <Button className="relative z-10">Conhecer produto</Button>
                            </a>
                            <Image quality={100} priority className="absolute bottom-0 right-0 w-6/12 z-1" src="/refacil.png" width={1200} height={600} alt="" />
                        </div>
                        <div className="w-[600px] relative tablet:w-full bg-primary-500 px-12 py-16 tablet:px-6 tablet:py-12 space-y-28 overflow-hidden rounded-lg">
                            <div className="w-8/12 tablet:w-full space-y-8 relative z-10">
                                <h1 className="text-5xl tablet:text-2xl text-white font-semibold">HandsOn</h1>
                                <p className="text-sm font-medium text-white leading-loose">Tenha acesso a materiais publicitários personalizados, administre a documentação, troque mensagens vinculadas a propostas e muito mais.</p>
                            </div>
                            <a target="_blank" href="https://www.handson360.com.br/" className="block">
                                <Button className="relative z-10">Conhecer produto</Button>
                            </a>
                            <Image quality={100} priority className="absolute bottom-0 right-0 w-5/12 z-1" src="/handson.png" width={1200} height={600} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}