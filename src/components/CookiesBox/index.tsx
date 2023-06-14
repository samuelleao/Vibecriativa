import { Button } from "@components/Button";
import Link from "next/link";
import { CookiesBoxTypes } from "./types";

export function CookiesBox({ setCookies }: CookiesBoxTypes) {

    function acceptCookies() {
        localStorage.setItem("cookies", JSON.stringify(true))
        setCookies(true)
    }

    function rejectCookies() {
        localStorage.setItem("cookies", JSON.stringify(false))
        setCookies(false)
    }

    return (
        <div className="tablet:w-[98%] tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:bottom-4 py-6 px-6 w-[432px] fixed left-3 bottom-2 bg-white shadow-2xl rounded-lg z-50">
            <strong className="text-base font-semibold text-slate-900 mb-4 block">Utilizamos alguns de seus dados</strong>
            <p className="text-sm leading-relaxed font-normal text-slate-600 mb-6">Queremos sua permissão para utilizar alguns dados para fins de marketing, você pode ler sobre quais dados usamos na nossa <Link href="/politica-de-privacidade" className="font-medium underline text-slate-900">Política De Privacidade</Link></p>
            <div className="flex gap-4">
                <Button variant="black" onClick={acceptCookies}>Aceitar o uso</Button>
                <Button onClick={rejectCookies}>Rejeitar</Button>
            </div>
        </div>
    )
}