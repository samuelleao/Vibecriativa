import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';
import { MdOutlineClose } from 'react-icons/md';
import { FeedbackToUserTypes } from './types';

export const FeedbackToUser = ({ open, setOpen, title, description }: FeedbackToUserTypes) => {

  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="bg-white rounded-md shadow-lg p-4 flex flex-col items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >

        <div className="flex items-center justify-between w-full mb-4">
          <Toast.Title className="mb-2 font-semibold text-slate-900 text-sm">
            {title}
          </Toast.Title>
          <Toast.Action className="" asChild altText="Goto schedule to undo">
            <button className="text-slate-500 hover:text-slate-600">
              <MdOutlineClose />
            </button>
          </Toast.Action>
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <Toast.Description asChild>
            <small className='text-xs text-slate-500'>{description}</small>
          </Toast.Description>
          <time
            className="text-xs text-slate-500"
            dateTime={eventDateRef.current.toISOString()}
          >
            {prettyDate(eventDateRef.current)}
          </time>
        </div>

      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_28px_8px_24px_16px] fixed top-16 right-0 flex flex-col p-[var(--viewport-padding)] gap-2 w-[24.375rem] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  )
}

function oneWeekAway(date: any) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: any) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}