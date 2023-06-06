import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment } from "react";
import Image from "next/image"
import Head from "next/head";
import Link from "next/link";
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@components/Accordion';
import { FaAngleDown } from "react-icons/fa";

const internalServices = [
    {
        "name": "Hotsite",
        "solutions": "+ de 30 soluções criadas",
        "description": "Para você que deseja promover um produto, evento ou campanha de forma eficaz e direcionada, um hotsite pode ser uma excelente opção. Um hotsite é um site temporário e independente, criado com o propósito específico de divulgar informações relevantes sobre um determinado assunto em um formato atrativo e conciso."
    },
    {
        "name": "Website",
        "solutions": "+ de 60 soluções criadas",
        "description": "Se você deseja obter uma presença online abrangente e duradoura, um website é a solução ideal. Com ele, você pode apresentar informações detalhadas sobre sua empresa, produtos e serviços, interagir com seu público-alvo e alcançar um público mais amplo na era digital. Ter um website é essencial para estabelecer sua credibilidade online e promover sua marca de forma eficaz."
    },
    {
        "name": "Landing Page",
        "solutions": "+ de 60 soluções criadas",
        "description": "Se você deseja criar uma página web focada em conversões, escolha uma Landing Page. Ela é projetada para direcionar os visitantes a uma ação específica, maximizando as taxas de conversão e o sucesso do seu marketing."
    },
    {
        "name": "Blog",
        "solutions": "+ de 60 soluções criadas",
        "description": "Se você deseja compartilhar conteúdo valioso e engajar seu público, um blog é a opção ideal. Com um blog, você pode criar artigos, postagens e atualizações regulares sobre uma variedade de tópicos relevantes para sua audiência."
    },
    {
        "name": "E-commerce",
        "solutions": "+ de 60 soluções criadas",
        "description": "Se você deseja iniciar um negócio de comércio eletrônico, um site de e-commerce é a solução ideal. Com um site de e-commerce, você pode criar uma loja virtual para vender seus produtos online. Ele permite que você exiba seu catálogo de produtos, gerencie estoque, processe pagamentos e ofereça uma experiência de compra conveniente aos seus clientes."
    },
    {
        "name": "Sistema Web",
        "solutions": "+ de 60 soluções criadas",
        "description": "Se você deseja implementar um sistema web para a sua empresa, escolher um sistema web é a solução ideal. Ele oferece uma plataforma online personalizada para automatizar processos, armazenar dados e melhorar a eficiência operacional. Com acesso conveniente de qualquer lugar, um sistema web é essencial para otimizar as operações da sua empresa de forma centralizada e escalável."
    },
    {
        "name": "Site Institucional",
        "solutions": "+ de 60 soluções criadas",
        "description": "Se você deseja criar um site institucional para a sua empresa, um site institucional é a solução ideal. Ele oferece uma presença online profissional, apresentando informações sobre a empresa, serviços e valores. Essencial para estabelecer credibilidade e promover a imagem da empresa. Com design atraente e conteúdo relevante, é uma poderosa ferramenta de marketing."
    }
]

const maintenance = [
    {
        "name": "Serviço de email",
        "description": "Um serviço de email oferece recursos para enviar, receber e gerenciar emails. É uma ferramenta essencial para comunicação profissional, permitindo que você envie mensagens, anexe arquivos e gerencie sua caixa de entrada de forma eficiente."
    },
    {
        "name": "Suporte técnico e CMS",
        "description": "O suporte técnico e CMS (Sistema de Gerenciamento de Conteúdo) é um serviço que fornece assistência técnica e uma plataforma para gerenciar e publicar conteúdo online. Ele ajuda a resolver problemas técnicos, fornecer orientação e oferecer uma interface intuitiva para criar, editar e publicar conteúdo em um site ou aplicativo."
    },
    {
        "name": "CDN",
        "description": "CDN (Rede de Distribuição de Conteúdo) é um serviço que distribui o conteúdo de um site para servidores localizados em diferentes regiões geográficas. Ele melhora a velocidade de carregamento de páginas, reduzindo a latência e melhorando a experiência do usuário, fornecendo o conteúdo a partir do servidor mais próximo do usuário."
    },
    {
        "name": "Certificado de segurança",
        "description": "Um certificado de segurança é uma medida de proteção que garante a segurança e a criptografia dos dados trocados entre um site e os visitantes. Ele indica que as informações transmitidas são confidenciais e protegidas contra interceptação por terceiros mal-intencionados, garantindo a segurança das transações online e a privacidade dos usuários."
    },
    {
        "name": "Domínio",
        "description": "Um domínio é o endereço exclusivo de um site na internet, como exemplo.com. Ele permite que as pessoas acessem seu site digitando o nome de domínio em um navegador. Além disso, um domínio pode ser usado para configurar endereços de email personalizados e construir uma identidade online para sua marca ou negócio."
    }
]

export default function Softhouse() {

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Softhouse</title>
            </Head>
            <Navbar />
            <header className="py-44 tablet:pb-20 tablet:pt-32">
                <div className="container flex items-center tablet:flex-col notbook2:items-start">
                    <div className="flex-1 flex flex-col items-start w-full">
                        <strong className="font-semibold text-lg text-primary-500">Softhouse</strong>
                        <h1 className="text-4xl w-8/12 tablet:w-full font-semibold text-slate-900 leading-relaxed mt-4 mobile:text-lg">Foco em desenvolver  seus objetivos.</h1>
                    </div>
                    <div className="w-[600px] max-w-full tablet:mt-12">
                        <Image className="max-w-full" src="/softhouse-header.png" width={690} height={396} alt="" />
                    </div>
                </div>
            </header>
            <section className="pb-32 tablet:pb-16">
                <div className="container flex notbook2:flex-col-reverse items-center notbook2:items-start">
                    <div className="grid grid-cols-2 flex-1 gap-6 pr-12 notbook2:grid-cols-2 tablet:grid-cols-1 notbook2:pr-0">
                        <div className="px-6 py-9 space-y-5 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-base">Soluções para converção</h5>
                            <p className="text-sm leading-relaxed font-normal text-slate-500">Neste nosso ambiente temos serviços voltados para converter suas vendas por meio do desenvolvimento</p>
                            <a className="block text-sm font-medium text-primary-500" href="#solucoes">Ver soluções</a>
                        </div>
                        <div className="px-6 py-9 space-y-5 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-base">Manutenção e Hospedagem</h5>
                            <p className="text-sm leading-relaxed font-normal text-slate-500">Neste nosso ambiente temos serviços voltados para converter suas vendas por meio do desenvolvimento</p>
                            <a className="block text-sm font-medium text-primary-500" href="#planos">Ver planos</a>
                        </div>
                    </div>
                    <div className="w-[600px] notbook2:w-full notbook2:mb-12">
                        <h3 className="font-semibold text-xl tablet:text-lg leading-relaxed">Ambiente especializado no desenvimento e gerenciamento de suas solução</h3>
                    </div>
                </div>
            </section>
            <section className="pb-32" id="solucoes">
                <div className="container flex gap-10 items-start tablet:flex-col">
                    <div className="w-3/12 tablet:w-full sticky top-32 tablet:static">
                        <h5 className="font-semibold text-xl notbook2:text-base leading-relaxed text-slate-900">Para cada solução uma conversão efetiva para seu negócio</h5>
                    </div>
                    <div className="flex-1 space-y-20">
                        {internalServices.map((service, index) => (
                            <div className="flex tablet:flex-col tablet:space-y-7" key={index}>
                                <div className="w-3/12 space-y-7 tablet:w-full">
                                    <h4 className="font-semibold text-xl text-slate-900 notbook2:text-base tablet:text-xl">{service.name}</h4>
                                    <small className="block text-sm font-medium text-slate-500">{service.solutions}</small>
                                </div>
                                <div className="flex-1 space-y-7">
                                    <p className="text-sm notbook2:text-sm font-normal leading-loose notbook2:leading-loose text-slate-500">{service.description}</p>
                                    <Link className="block font-medium text-base text-primary-500 notbook2:text-sm" href="/contato">Entrar em contato</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-r from-[#2938C0] to-[#5480F4] py-32">
                <div className="container flex tablet:flex-col-reverse ">
                    <div className="w-6/12 tablet:w-full ">
                        {maintenance && <Accordion.Root className="flex flex-col gap-12" type="single" defaultValue={"0"} collapsible>
                            {maintenance.map((item, index) => (
                                <AccordionItem key={index} value={`${index}`} className="bg-white rounded-lg p-4">
                                    <AccordionTrigger className="w-full group text-lg font-semibold text-slate-950 data-[state=closed]:text-slate-900 text-left">
                                        <span className="flex justify-between items-center">{item.name && item.name}
                                            <FaAngleDown
                                                className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                                                aria-hidden
                                            />
                                        </span>
                                        {item.description && (
                                            <AccordionContent>
                                                <p className="text-sm font-normal text-slate-500 leading-loose">{item.description}</p>
                                            </AccordionContent>
                                        )}
                                    </AccordionTrigger>
                                </AccordionItem>
                            ))}
                        </Accordion.Root>}
                    </div>
                    <div className="flex-1 pl-20 space-y-6 tablet:pl-0 tablet:mb-12">
                        <h5 className="text-2xl tablet:text-xl font-semibold text-slate-50">Manutenção e Hospedagem</h5>
                        <p className="text-sm leading-loose font-normal text-slate-300">Neste nosso ambiente temos serviços voltados para converter suas vendas por meio do desenvolvimento</p>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}