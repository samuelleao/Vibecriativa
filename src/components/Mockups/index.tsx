import Image from "next/image"

export function Mockups() {
    return (
        <div className='w-[60%] tablet:w-full tablet:px-8 h-full translate-y-[10%] notbook1:translate-y-[18%] notbook2:translate-y-[28%] mobile:translate-y-[10%] flex items-end justify-end gap-32 flex-col'>
            <div className="w-[31.25rem] tablet:w-full relative after:pointer-events-none after:absolute after:rounded-full after:w-[68.75rem] after:h-[68.75rem] after:bg-white/5 after:left-1/2 after:transform after:-translate-x-1/2 after:top-0 before:absolute before:top-[8%] before:rounded-full before:w-[62.5rem] before:h-[62.5rem] before:bg-white/5 before:left-1/2 before:transform before:-translate-x-1/2">
                <div className="flex gap-32 flex-col w-full relative before:absolute before:w-[0.125rem] before:bg-white/10 before:h-full before:top-0 before:left-1/2 before:transform before:-translate-x-1/2">
                    <div className="flex justify-between items-start relative h-52 border-2 border-t-0 rounded-lg border-white/10">
                        <Image priority quality={100} width={64} height={64} className="h-16 w-16 mobile:h-12 mobile:w-12 rounded-full -translate-x-8 mobile:-translate-x-6" src="/home/header-1.png" alt="Duas pessoas observando algo interessante no celular" />
                        <Image priority quality={100} width={64} height={64} className="h-16 w-16 mobile:h-12 mobile:w-12 rounded-full" src="/home/header-2.png"  alt="Uma pessoa em um metro ou ônibus observando algo no celular"  />
                        <Image priority quality={100} width={64} height={64} className="h-16 w-16 mobile:h-12 mobile:w-12 rounded-full translate-x-8 mobile:translate-x-6" src="/home/header-3.png" alt="Uma pessoa sorrindo com um celular na mão" />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-7 h-16 w-16 bg-white rounded-lg shadow-xl flex items-center justify-center">
                            <Image priority quality={100} src="/logo-only-icon.png" width={34} height={52} alt="Ícone da logotipo da Vibecriativa" />
                        </div>
                    </div>
                    <div className='p-4 shadow-lg bg-white h-max space-y-5 rounded-lg'>
                        <div className='flex space-x-1'>
                            <span className='h-2 w-2 cursor-pointer hover:scale-125 bg-rose-500 rounded-full'></span>
                            <span className='h-2 w-2 cursor-pointer hover:scale-125 bg-yellow-400 rounded-full'></span>
                            <span className='h-2 w-2 cursor-pointer hover:scale-125 bg-green-400 rounded-full'></span>
                        </div>
                        <div className="bg-gray-100 h-16 rounded-lg"></div>
                        <div className="bg-gray-100 h-8 rounded-lg"></div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gray-100 h-32 rounded-lg"></div>
                            <div className="bg-gray-100 h-32 rounded-lg"></div>
                            <div className="bg-gray-100 h-32 rounded-lg"></div>
                        </div>
                        <div className='h-8 bg-gray-100 w-24 rounded-lg'></div>
                    </div>
                </div>
            </div>
        </div>

    )
}


