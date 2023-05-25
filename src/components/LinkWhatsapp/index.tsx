import Link from "next/link";
import { LinkWhatsappTypes } from "./types";

export function LinkWhatsapp({ children }: LinkWhatsappTypes) {
    return (
        <Link target="_blank" href="https://api.whatsapp.com/send?phone=558420207999&text=Ol%C3%A1,%20equipe%20da%20Vibecriativa!%20%F0%9F%8C%9F%0A%0AEstou%20interessado(a)%20em%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20software%20e%20marketing%20que%20voc%C3%AAs%20oferecem.%20Gostaria%20de%20agendar%20uma%20consulta%20ou%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20meu%20neg%C3%B3cio%20a%20crescer.">
            {children}
        </Link>
    )
}