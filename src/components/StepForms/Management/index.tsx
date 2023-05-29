import { Fragment } from "react";
import { ManagementTypes } from "./types";
import { Input } from "@components/Input";

const managementOptions = [
    {
        value: 'CMS',
        label: 'Gerenciar conteúdo por meio de um sistema',
        name: "management"
    },
    {
        value: 'SomenteDesign',
        label: 'Quero somente a parte do design',
        name: "management"
    },
    {
        value: 'Estatico',
        label: 'Quero deixar o conteúdo de forma estática sem edição constante',
        name: "management"
    },
    {
        value: 'Ainda',
        label: 'Ainda não sei',
        name: "management"
    },
];

export function Management({ dataForms, setDataForms, register }: ManagementTypes) {
    return (
        <Fragment>
            <h2 className='text-xl font-medium text-gray-900 my-14'>Como você pensa em manter o projeto?</h2>
            <div className='space-y-12'>
                {managementOptions.map((option, index) => (
                    <Input
                        key={index}
                        defaultChecked={dataForms?.management === option.value}
                        value={option.value}
                        register={register}
                        registerName={option.name}
                        required={true}
                        type='radio'
                        name={option.name}
                        label={option.label}
                        onChange={() => setDataForms({ ...dataForms, management: option.value })}
                    />
                ))}
            </div>
        </Fragment>)
}