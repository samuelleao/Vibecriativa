export function Mockups() {
    return (
        <div className='w-[60%] tablet:w-full tablet:px-8 h-full translate-y-[10%] flex items-end justify-end gap-32 flex-col'>
            <div className="w-[31.25rem] tablet:w-full relative after:absolute after:rounded-full after:w-[68.75rem] after:h-[68.75rem] after:bg-white/5 after:left-1/2 after:transform after:-translate-x-1/2 after:top-0 before:absolute before:top-[8%] before:rounded-full before:w-[62.5rem] before:h-[62.5rem] before:bg-white/5 before:left-1/2 before:transform before:-translate-x-1/2">
                <div className="flex gap-32 flex-col w-full relative before:absolute before:w-[0.125rem] before:bg-white/10 before:h-full before:top-0 before:left-1/2 before:transform before:-translate-x-1/2">
                    <div className="flex justify-between items-start relative h-52 border-2 border-t-0 rounded-lg border-white/10">
                        <img className="h-16 w-16 rounded-full -translate-x-8" src="/home/header-1.png" alt="" />
                        <img className="h-16 w-16 rounded-full" src="/home/header-2.png" alt="" />
                        <img className="h-16 w-16 rounded-full translate-x-8" src="/home/header-3.png" alt="" />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-7 h-16 w-16 bg-white rounded-lg shadow-xl flex items-center justify-center">
                            <img src="/logo-only-icon.png" alt="" />
                        </div>
                    </div>
                    <div className='p-4 shadow-lg bg-white h-max space-y-5 rounded-lg'>
                        <div className='flex space-x-1'>
                            <span className='h-2 w-2 bg-rose-500 rounded-full'></span>
                            <span className='h-2 w-2 bg-yellow-400 rounded-full'></span>
                            <span className='h-2 w-2 bg-green-400 rounded-full'></span>
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


