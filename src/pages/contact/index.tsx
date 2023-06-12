import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Fragment, useState } from "react";

import Head from "next/head";
import Image from "next/image"
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { RiSendPlaneFill } from "react-icons/ri"
import { useForm } from "react-hook-form";
import { ContactInfo } from "./types";

import axios from "axios"
import { FeedbackToUser } from "@components/FeedbackToUser";

export default function Contact() {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<ContactInfo>();

    const [feedbackToUserTitle, setFeedbackToUserTitle] = useState("")
    const [feedbackToUserDescription, setFeedbackToUserDescription] = useState("")
    const [feedbackToUserController, setFeedbackToUserController] = useState(false)
    const [sending, setSending] = useState(false)
    const [showError, setShowError] = useState(false);

    const watchFields = watch(["whatsapp", "email"]);

    const analitycsFields = () => {
        if (watchFields[0].length == 0 && watchFields[1].length == 0) {
            setShowError(true);
            return;
        } else {
            setShowError(false);
        }
    }

    const onSubmit = async (data: ContactInfo) => {
        setSending(true)

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            name: data.name,
            subject: data.subject,
            email: data.email,
            whatsapp: Number(data.whatsapp),
            message: data.message
        });

        let reqOptions = {
            url: process.env.NEXT_PUBLIC_EMAIL_API,
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        let response = await axios.request(reqOptions);

        if (response.data.sucess === true) {
            setFeedbackToUserTitle("Mensagem enviada! 🎉")
            setFeedbackToUserDescription("Entraremos em contato dentro de 24 horas com você")
            setFeedbackToUserController(true)
            setSending(false)
            reset()
        } else {
            setFeedbackToUserTitle("Ocorreu algum erro 😯")
            setFeedbackToUserDescription("Não conseguimos enviar sua mensagem, tente novamente em 1 minuto")
            setFeedbackToUserController(true)
            setSending(false)
        }

        return data
    };

    return (
        <Fragment>
            <FeedbackToUser title={feedbackToUserTitle}
                description={feedbackToUserDescription}
                open={feedbackToUserController}
                setOpen={setFeedbackToUserController}
            />
            <Head>
                <title>Vibecriativa | Contato</title>
            </Head>
            <Navbar />
            <header className="py-44 tablet:pt-32 tablet:pb-16 relative before:absolute before:z-0 before:w-8/12 tablet:before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#2938C0] before:to-[#5480F4]">
                <div className="container flex relative z-10 items-center tablet:flex-col tablet:gap-14">
                    <div className="flex-1 pr-16 tablet:pr-0">
                        <h1 className="text-4xl font-semibold leading-relaxed text-slate-50 tablet:text-xl">Início de uma nova <span className="text-secondary-500">experência</span></h1>
                        <p className="pr-40 tablet:pr-0 text-sm text-gray-50 leading-loose tablet:leading-loose mt-4 tablet:text-sm">No campos abaixo vamos colher alguns dados importantes para poder iniciar o seu projeto</p>
                    </div>
                    <div className="flex-1">
                        <form onSubmit={handleSubmit(onSubmit)} action="post" className="px-8 py-10 border border-slate-200 rounded-lg space-y-8 bg-white tablet:px-4 tablet:py-4">
                            <h2 className="text-lg font-medium text-slate-900 tablet:text-base">Como podemos te ajudar?</h2>
                            <div className="flex gap-4 w-8/12 items-center tablet:w-full">
                                <div className="relative w-12 h-12 min-h-[3rem] min-w-[3rem] rounded-full border-2 border-slate-200 flex items-center justify-center p-1">
                                    <Image className="" src="/logo.png" width={40} height={40} alt="Vibecriativa Logotipo" />
                                    <span className="top-0 left-8 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                    <span className="animate-ping top-0 left-8 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                </div>
                                <span className="text-sm text-slate-500 leading-relaxed"><strong className="font-medium text-slate-900">Entraremos em contato</strong> por Whatsapp ou Email dentro de 24 horas.</span>
                            </div>
                            <Input label="Assunto" placeholder="Digitar assunto" register={register} registerName="subject" required error={errors.subject && "Digitar o assunto é necessário"} />
                            <Input label="Mensagem" placeholder="Digitar mensagem..." asElement="textarea" helperText="Deixe aqui sua dúvida, sugestão ou informações sobre projeto" register={register} registerName="message" required error={errors.message && "Digitar o mensagem é necessário"} />
                            <div className="space-y-4 py-2">
                                <strong className="text-base font-medium block">Seu melhor contato &#128513;</strong>
                                <small className="text-sm block leading-loose text-slate-500">Vamos precisar de um dos contatos abaixo, você pode inserir o que for melhor pra você, ou, os dois se quiser.</small>
                            </div>
                            <div className="grid grid-cols-2 gap-4 tablet:grid-cols-1 tablet:gap-8">
                                <Input onKeyUp={analitycsFields} label="Contato de Whatsapp" helperText="(00) 0 0000-0000" placeholder="Digitar whatsapp" register={register} registerName="whatsapp" />
                                <Input onKeyUp={analitycsFields} label="Email" helperText="exemplo@email.com" placeholder="Digitar email" register={register} registerName="email" />
                            </div>
                            {showError && (
                                <small className="text-red-600 text-xs mt-5 block">
                                    É necessário informar o WhatsApp ou Email &#128513;
                                </small>
                            )}
                            <Input label="Seu Nome" placeholder="Digitar nome" register={register} registerName="name" required error={errors.name && "Informar seu nome é necessário"} />
                            <Button onClick={analitycsFields} type="submit" className="tablet:w-full" variant="primary">
                                {sending ? (
                                    <>
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                        Enviando mensagem...
                                    </>
                                ) : (<><RiSendPlaneFill /> Enviar mensagem</>)}
                            </Button>
                        </form>
                    </div>
                </div>
            </header>
            <Footer />
        </Fragment>
    )
}