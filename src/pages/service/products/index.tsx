import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@components/Button";
import Image from "next/image"

export default function Products() {

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Produtos</title>
            </Head>
            <Navbar />
            <header className="pt-44 pb-32  tablet:pt-28 tablet:pb-20">
                <div className="container">
                    <div className="flex tablet:flex-col gap-10">
                        <div className="relative flex-1 tablet:w-full bg-[#F97316] px-12 py-16 tablet:px-8 space-y-28 overflow-hidden rounded-lg">
                            <div className="w-8/12 tablet:w-full space-y-8 relative z-10">
                                <h1 className="text-5xl tablet:text-2xl text-white font-semibold">Refácil</h1>
                                <p className="text-sm font-medium text-white leading-loose">A Refácil oferece os recursos necessários para seu restaurante explorar o potencial do seu próprio delivery e crescer cada vez mais fortalecendo a sua própria marca. Sem comissões!</p>
                            </div>
                            <a target="_blank" href="https://www.refacil.com.br/" className="block">
                                <Button className="relative z-10">Conhecer produto</Button>
                            </a>
                            <Image quality={100} priority className="absolute bottom-0 right-0 w-6/12 z-1" src="/refacil.png" width={1200} height={600} alt="" />
                        </div>
                        <div className="w-[600px] relative tablet:w-full bg-primary-500 px-12 py-16 tablet:px-8 space-y-28 overflow-hidden rounded-lg">
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
            </header>
            <Footer />
        </Fragment>
    )
}