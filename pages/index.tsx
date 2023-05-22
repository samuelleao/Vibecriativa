import { Button } from '@/components/Button'
import { Mockups } from '@/components/Mockups'

export default function Home() {
  return (
    <main>
      <header className='overflow-x-hidden flex relative before:z-[-2] before:absolute before:top-0 before:right-0 before:h-full before:w-5/12 before:bg-gradient-to-r before:to-cyan-500 before:from-blue-700 h-screen'>
        <div className="container">
          <div className='h-full w-[33%] flex flex-col justify-center  gap-4'>
            <h1 className='text-5xl font-semibold text-gray-900 leading-normal'>Criando e convertendo em <span className='text-secondary-500'>valor</span> para você</h1>
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
    </main>
  )
}
