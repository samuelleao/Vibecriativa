import { Button } from '@/components/Button'
import { Mockups } from '@/components/Mockups'
import { Navbar } from '@/components/Navbar'
import { Fragment, useEffect, useRef, useState } from 'react'

export default function Home() {

  const [currentElement, setCurrentElement] = useState<HTMLDivElement | null>()

  const processRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { setCurrentElement(processRef?.current) }, [])

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
      <section className='py-32'>
        <div className="container flex justify-between tablet:flex-col">
          <div className='w-2/12 tablet:w-full'>
            <h2 ref={processRef} className='text-lg font-semibold text-gray-900 leading-normal tablet:mb-16'>Nosso processo de qualidade em entregas</h2>
          </div>
          <div className='tablet:w-full tablet:flex notbook:px-4 tablet:flex-col relative w-[900px] grid grid-cols-4 right-0 gap-16 before:z-[-2] before:absolute before:top-0 before:left-0 before:h-[2px] before:bg-gray-200 before:w-[100%] before:top-[7px] tablet:before:h-[100%] tablet:before:w-[2px] tablet:before:left-[7px]'>
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
    </Fragment>
  )
}
