import React, { forwardRef } from 'react';
import { Item, Header, Trigger, Content, AccordionItemProps } from '@radix-ui/react-accordion';

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
    function AccordionItem({ children, className, ...props }, forwardedRef) {
        return (
            <Item
                className={className && className}
                {...props}
                ref={forwardedRef}
            >
                {children}
            </Item>
        );
    }
);

AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = forwardRef<HTMLButtonElement, { children: React.ReactNode; className?: string; onClick?: () => void }>(
    function AccordionTrigger({ children, className, onClick, ...props }, forwardedRef) {
        return (
            <Header className="flex">
                <Trigger
                    className={className && className}
                    onClick={onClick}
                    {...props}
                    ref={forwardedRef}
                >
                    {children}
                </Trigger>
            </Header>
        );
    }
);

AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
    function AccordionContent({ children, className, ...props }, forwardedRef) {
        return (
            <Content
                className='data-[state=closed]:hidden py-4 text-sm flex flex-col gap-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden'
                {...props}
                ref={forwardedRef}
            >
                {children}
            </Content>
        );
    }
);

AccordionContent.displayName = 'AccordionContent';
