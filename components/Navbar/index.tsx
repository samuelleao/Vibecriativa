import { Button } from "../Button";
import Image from 'next/image'

export function Navbar () {
    return (
        <nav className='py-3 fixed w-full top-8 z-10'>
        <div className='container flex justify-between items-center'>
          <div className='flex space-x-8 items-center'>
            <Image src="/logo.png" alt="" width={130} height={130} />
            <ul className='flex space-x-8'>
              <li className='text-sm text-gray-900'><a href="">Início</a></li>
              <li className='text-sm text-gray-900'><a href="">Sobre a vibe</a></li>
              <li className='text-sm text-gray-900'>Serviços</li>
              <li className='text-sm text-gray-900'><a href="">Portfólio</a></li>
              <li className='text-sm text-gray-900'><a href="">Vibecriativa CMS</a></li>
            </ul>
          </div>
          <div className='flex space-x-4'>
            <Button white={true}>
              <img src="/whatsapp.svg" alt="" />
              Falar com a Vibecriativa
            </Button>
            <Button white={true} outline={true}>Iniciar projeto</Button>
          </div>
        </div>
      </nav>
    )
}