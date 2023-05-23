import React, { forwardRef } from 'react';
import { Item, Header, Trigger, Content, AccordionItemProps } from '@radix-ui/react-accordion';

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ children, className, ...props }, forwardedRef) => (
        <Item
            className=""
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Item>
    )
);

export const AccordionTrigger = forwardRef<HTMLButtonElement, { children: React.ReactNode; className?: string; onClick?: () => void }>(
    ({ children, className, onClick, ...props }, forwardedRef) => (
        <Header className="flex">
            <Trigger
                className='text-2xl font-semibold text-gray-900 data-[state=closed]:text-gray-400'
                onClick={onClick} // Adicione esta linha
                {...props}
                ref={forwardedRef}
            >
                {children}
            </Trigger>
        </Header>
    )
);

export const AccordionContent = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
    ({ children, className, ...props }, forwardedRef) => (
        <Content
            className='py-4 text-sm flex flex-col gap-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden'
            {...props}
            ref={forwardedRef}
        >
           {children}
        </Content>
    )
);
