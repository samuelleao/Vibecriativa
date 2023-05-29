import { Fragment } from "react";
import { AboutProjectTypes } from "./types";
import { Input } from "@components/Input";

const optionsTypeProject = [
    {
        value: 'Hotsite',
        label: 'Quero apresentar o produto, ação ou campanha de forma resumida, mas eficiente',
        subLabel: 'Site que possa conter mais de uma página para fornecer informações detalhadas sobre o produto, ação ou campanha',
        name: "typeProject"
    },
    {
        value: 'LandingPage',
        label: 'Preciso de um captar dados dos meus clientes ao acessar minha página',
        subLabel: 'Capturar dados relevantes para nutrir a comunicação com os visitantes e estabelecer um relacionamento de longo prazo, ou para vender um produto ou serviço de forma imediata',
        name: "typeProject"
    },
    {
        value: 'Sistema',
        label: 'Preciso apresentar informações institucionais',
        subLabel: 'Ambiente virtual que exiba informações como detalhes sobre os produtos e/ou serviços oferecidos',
        name: "typeProject"
    },
    {
        value: 'Website',
        label: 'Quero um site específico para publicar conteúdo de forma constante',
        subLabel: 'Um espaço para publicar conteúdo que possa ser indexado pelos mecanismos de busca',
        name: "typeProject"
    },
    {
        value: 'Blog',
        label: 'Quero um site que reúna informações de diversas fontes em um só lugar',
        subLabel: 'Um espaço para interagir com meu público através de comentários ou fóruns de discussão',
        name: "typeProject"
    },
    {
        value: 'ecommerce',
        label: 'Quero criar uma loja virtual para vender meus produtos e serviços pela internet',
        subLabel: 'Utilizando um site seguro e confiável para que meus clientes possam realizar suas compras de forma prática e segura',
        name: "typeProject"
    }
];

export function AboutProject({ dataForms, setDataForms, register }: AboutProjectTypes) {
    return (
        <Fragment>
            <h2 className='text-xl font-medium text-gray-900 my-14'>Como podemos te ajudar?</h2>
            <div className='space-y-12'>
                {optionsTypeProject.map((option, index) => (
                    <Input
                        key={index}
                        defaultChecked={dataForms?.typeProject === option.value}
                        value={option.value}
                        register={register}
                        registerName={option.name}
                        required={true}
                        type='radio'
                        name={option.name}
                        label={option.label}
                        subLabel={option.subLabel}
                        onChange={() => setDataForms({ ...dataForms, typeProject: option.value })}
                    />
                ))}
            </div>
        </Fragment>)
}