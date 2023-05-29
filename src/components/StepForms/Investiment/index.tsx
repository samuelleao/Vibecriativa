import { Fragment } from "react";
import { AboutProjectTypes } from "./types";
import { Input } from "@components/Input";

const optionsInvestiment = [
    {
        value: 'Até 3 mil',
        label: 'Até 3 mil',
        name: "investiment"
    },
    {
        value: 'Entre 4-8 mil',
        label: 'Entre 4-8 mil',
        name: "investiment"
    },
    {
        value: 'Entre 9-10 mil',
        label: 'Entre 9-10 mil',
        name: "investiment"
    },
    {
        value: 'Entre 11-20 mil',
        label: 'Entre 11-20 mil',
        name: "investiment"
    },
    {
        value: 'Entre 21-30 mil',
        label: 'Entre 21-30 mil',
        name: "investiment"
    },
    {
        value: '+ 31 mil',
        label: '+ 31 mil',
        name: "investiment"
    },
];

export function Investiment({ dataForms, setDataForms, register }: AboutProjectTypes) {
    return (
        <Fragment>
            <h2 className='text-xl font-medium text-gray-900 my-14'>Quanto você espera investir?</h2>
            <div className='space-y-12'>
                {optionsInvestiment.map((option, index) => (
                    <Input
                        key={index}
                        defaultChecked={dataForms?.investiment === option.value}
                        value={option.value}
                        register={register}
                        registerName={option.name}
                        required={true}
                        type='radio'
                        name={option.name}
                        label={option.label}
                        onChange={() => setDataForms({ ...dataForms, investiment: option.value })}
                    />
                ))}
            </div>
        </Fragment>)
}

