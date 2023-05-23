import { Button } from '@/components/Button'
import { Mockups } from '@/components/Mockups'
import { Navbar } from '@/components/Navbar'
import { Fragment, useEffect, useRef, useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import Image from 'next/image'
import { Project } from '@/components/Project';

const accordionItems = [
  {
    value: 'item-1',
    label: 'Website',
    content:
      'Um site é a apresentação oficial de uma empresa na internet, contendo informações institucionais, produtos e serviços...',
    link: 'https://example.com/website',
    image: '/services/website.png',
  },
  {
    value: 'item-2',
    label: 'Landing Pages',
    content:
      'Uma landing page é uma página com um objetivo específico, geralmente utilizada em campanhas de marketing...',
    link: 'https://example.com/landing-pages',
    image: '/services/landingpage.png',
  },
  {
    value: 'item-3',
    label: 'Sistema',
    content:
      'Um sistema é uma plataforma desenvolvida para atender às necessidades específicas de uma empresa ou organização...',
    link: 'https://example.com/sistema',
    image: '/services/sistema.png',
  },
  {
    value: 'item-4',
    label: 'Blog',
    content:
      'Um blog é uma seção do site destinada a publicações regulares de artigos, notícias ou outros conteúdos...',
    link: 'https://example.com/blog',
    image: '/services/blog.png',
  },
  {
    value: 'item-5',
    label: 'Aplicativo',
    content:
      'Um aplicativo é um software desenvolvido para ser executado em dispositivos móveis, como smartphones e tablets...',
    link: 'https://example.com/aplicativo',
    image: '/services/aplicativo.png',
  },
  {
    value: 'item-6',
    label: 'E-commerce',
    content:
      'Um e-commerce é uma loja virtual onde produtos ou serviços são comercializados pela internet...',
    link: 'https://example.com/e-commerce',
    image: '/services/ecommerce.png',
  },
  {
    value: 'item-7',
    label: 'Marketing',
    content:
      'O marketing é um conjunto de estratégias e ações para promover um produto, serviço ou marca...',
    link: 'https://example.com/marketing',
    image: '/services/marketing.png',
  },
];

const projects = [
  {
    id: 1,
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1',
    img: '/projeto1.png',
    link: 'https://www.exemplo.com/projeto1',
    category: 'Website'
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2',
    img: '/projeto2.png',
    link: 'https://www.exemplo.com/projeto2',
    category: 'Landing Page'
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3',
    img: '/projeto3.png',
    link: 'https://www.exemplo.com/projeto3',
    category: 'Landing Page'
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3',
    img: '/projeto3.png',
    link: 'https://www.exemplo.com/projeto3',
    category: 'Landing Page'
  },{
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3',
    img: '/projeto3.png',
    link: 'https://www.exemplo.com/projeto3',
    category: 'Landing Page'
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3',
    img: '/projeto3.png',
    link: 'https://www.exemplo.com/projeto3',
    category: 'Landing Page'
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3',
    img: '/projeto3.png',
    link: 'https://www.exemplo.com/projeto3',
    category: 'Landing Page'
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição do Projeto 3',
    img: '/projeto3.png',
    link: 'https://www.exemplo.com/projeto3',
    category: 'Landing Page'
  }
];

export default function Home() {

  const [currentElement, setCurrentElement] = useState<HTMLDivElement | null>()

  const processRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { setCurrentElement(processRef?.current) }, [])

  const [currentImage, setCurrentImage] = useState(accordionItems[0].image);

  const handleAccordionItemClick = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <Fragment>
      <Navbar element={currentElement} />
      <header className='overflow-hidden flex tablet:flex-col relative before:z-[-2] before:absolute before:top-0 tablet:before:hidden before:right-0 before:h-full before:w-5/12 before:bg-gradient-to-r before:to-cyan-500 before:from-blue-700 h-screen tablet:h-auto'>
        <div className="container">
          <div className='h-full w-[33%] tablet:w-full flex flex-col justify-center tablet:justify-start tablet:pt-60 mobile:pt-32 gap-8'>
            <h1 className='text-5xl tablet:text-2xl font-semibold text-gray-900 leading-normal'>Criando e convertendo em <span className='text-secondary-500'>valor</span> para você</h1>
            <p className='text-base font-normal text-gray-900'>Desenvolvimento <strong className='font-medium'>especializado</strong> e <strong className='font-medium'>focado</strong> na experiência do usuário</p>
            <div className="flex gap-4">
              <Button black>
                Iniciar projeto
              </Button>
              <Button outline>
                Portfólio
              </Button>
            </div>
          </div>
        </div>
        <Mockups />
      </header>
      <main>
        <section className='py-32'>
          <div className="container flex justify-between tablet:flex-col">
            <div className='w-2/12 tablet:w-full'>
              <h2 className='text-lg font-semibold text-gray-900 leading-normal tablet:mb-16'>Nosso processo de qualidade em entregas</h2>
            </div>
            <div className='tablet:w-full tablet:flex notbook:px-4 tablet:flex-col relative w-[900px] grid grid-cols-4 right-0 gap-16 before:z-[-2] before:absolute before:top-0 before:left-0 before:h-[2px] before:bg-gray-200 before:w-[100%] before:top-[7px] tablet:before:h-[100%] tablet:before:w-[2px] tablet:before:left-[23px]'>
              <div className='tablet:flex items-start gap-6'>
                <div className='border-2 hover:border-4 transition-all bg-gray-50 border-gray-500 rounded-full w-4 h-4'></div>
                <div>
                  <h3 className='text-sm font-semibold text-gray-900 mt-7 tablet:mt-0 mb-4 whitespace-nowrap'><span className='mr-4'>🎲</span> Entendimento</h3>
                  <p className='text-xs font-normal text-gray-500 leading-loose notbook:text-xs'>Momento de conversar e entender seu produto</p>
                </div>
              </div>
              <div className='tablet:flex items-start gap-6'>
                <div className='border-2 hover:border-4 transition-all bg-gray-50 border-blue-500 rounded-full w-4 h-4'></div>
                <div>
                  <h3 className='text-sm font-semibold text-gray-900 mt-7 tablet:mt-0 mb-4 whitespace-nowrap'><span className='mr-4'>💻</span> Prototipação</h3>
                  <p className='text-xs font-normal text-gray-500 leading-loose notbook:text-xs'>Apresentação da solução criada</p>
                </div>
              </div>
              <div className='tablet:flex items-start gap-6'>
                <div className='border-2 hover:border-4 transition-all bg-gray-50 border-rose-500 rounded-full w-4 h-4'></div>
                <div>
                  <h3 className='text-sm font-semibold text-gray-900 mt-7 tablet:mt-0 mb-4 whitespace-nowrap'><span className='mr-4'>🧪</span> Testes</h3>
                  <p className='text-xs font-normal text-gray-500 leading-loose notbook:text-xs'>Prevenção de erros e garantia de qualidade</p>
                </div>
              </div>
              <div className='tablet:flex items-start gap-6 relative after:absolute after:right-0 after:w-[calc(100%-16px)] after:top-0 after:h-2 after:top-[5px] after:bg-white tablet:after:h-[calc(100%)] tablet:after:left-[7px] tablet:after:top-[16px] tablet:after:w-[2px] '>
                <div className='border-2 hover:border-4 transition-all bg-gray-50 border-secondary-500 rounded-full w-4 h-4'></div>
                <div>
                  <h3 className='text-sm font-semibold text-gray-900 mt-7 tablet:mt-0 mb-4 whitespace-nowrap'><span className='mr-4'>✨</span> Entrega</h3>
                  <p className='text-xs font-normal text-gray-500 leading-loose notbook:text-xs'>Seu produto no universo digital</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div ref={processRef} className='sticky top-32'></div>
        <section>
          <div className="container flex justify-center py-24">
            <div className='w-[852px] tablet:w-full text-center space-y-4 flex flex-col items-center'>
              <h4 className='text-5xl tablet:text-2xl font-semibold text-gray-900 leading-normal'><span className='text-primary-500'>Serviços</span> e soluções que desenvolvemos para você</h4>
              <p className='text-base font-normal text-gray-600'>Você pode nos consultar caso esteja em dúvida em qual seria a melhor solução para sua ideia</p>
              <Button black>Iniciar projeto</Button>
            </div>
          </div>
          <div className="container flex tablet:flex-col">
            <div className='tablet:hidden bg-secondary-500 p-8 pb-0 rounded-t-2xl flex-1 relative flex justify-center items-center'>
              <Image
                className=''
                src={currentImage}
                alt=""
                quality={100}
                width={500}
                height={500}
              />
            </div>
            <div className='p-14 tablet:py-0 tablet:px-0 pb-0 rounded-t-2xl flex-1 space-y-7 tablet:w-full'>
              <Accordion.Root type="single" defaultValue="item-1" collapsible>
                {accordionItems.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger onClick={() => handleAccordionItemClick(item.image)}>
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm font-normal text-gray-600">{item.content}</p>
                      <a href={item.link} className="text-sm font-medium text-blue-600">
                        Ver mais sobre este serviço
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion.Root>
            </div>
          </div>
        </section>
        <section className='py-28'>
          <div className="container flex justify-between relative items-start">
            <div className="w-6/12 grid grid-cols-2 gap-8">
              {projects.map((project) => (
                <Project
                  key={project.id}
                  category={project.category}
                  title={project.title}
                  description={project.description}
                  img={project.img}
                  link={project.link}
                />
              ))}
            </div>
            <div className="w-5/12 px-8 sticky top-32">
              <small className='text-sm font-medium text-gray-900'>Cases e soluções</small>
              <h6 className='text-3xl font-semibold text-gray-900 leading-relaxed my-5'><span className='text-primary-500'>Empresas</span> como a sua estão <span className='text-primary-500'>redesenhando</span>  a forma como projetam</h6>
              <Button primary={true}>Iniciar projeto</Button>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  )
}