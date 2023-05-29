import { Fragment } from "react";
import { AboutProjectTypes } from "./types";
import { Input } from "@components/Input";

const optionsClient = [
    {
        label: 'Seu nome',
        placeholder: 'Digitar nome',
        name: "clientName",
        type: "text"
    },
    {
        label: 'Email',
        placeholder: 'Digitar e-mail',
        name: "clientEmail",
        type: "text"
    },
    {
        label: 'Whatsapp',
        placeholder: 'DDD + Número',
        name: "clientWhatsapp",
        type: "tel"
    }
];

export function ClientData({ register }: AboutProjectTypes) {
    return (
        <Fragment>
            <h2 className='text-xl font-medium text-gray-900 my-14'>Como podemos te ajudar?</h2>
            <div className='space-y-8'>
                {optionsClient.map((option, index) => (
                    <Input
                        key={index}
                        register={register}
                        registerName={option.name}
                        required={true}
                        type={option.type}
                        name={option.name}
                        label={option.label}
                        placeholder={option.placeholder}
                    />
                ))}
            </div>
        </Fragment>)
}