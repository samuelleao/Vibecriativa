import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Tailwind } from '@react-email/tailwind';
import { Link } from '@react-email/link';
import { Img } from '@react-email/img';

interface EmailProps {
  name?: string,
  subject?: string,
  message?: string,
  whatsapp?: number,
  email?: string
}

export default function Email({ name,
  message,
  subject,
  email,
  whatsapp }: EmailProps) {
  return (
    <Tailwind>
      <div className="mx-auto w-[600px] mt-12 bg-slate-900 p-7 rounded-lg">
        <Img src="https://vibecriativa.vercel.app/_next/image?url=%2Flogofooter.png&w=256&q=75" alt="Vibecriativa" width="150" />;
        <Section>
          <Text className="text-xs uppercase text-slate-400 font-semibold">Assunto</Text>
          <Text className="mt-4 font-normal text-sm text-slate-200 mb-12">{subject}</Text>
        </Section>
        <Section>
          <Text className="text-xs uppercase text-slate-400 font-semibold">Nome</Text>
          <Text className="text-sm font-normal text-slate-200 mb-12">{name}</Text>
        </Section>
        <Section>
          <Text className="text-xs uppercase text-slate-400 font-semibold">Email</Text>
          {email ? ( <Link className="text-sm font-normal text-slate-200 mb-12 block">{email}</Link> ) : (<Text className="text-sm font-semibold text-slate-500 mb-12 italic">O cliente não informou o email para contato</Text>)}
        </Section>
        <Section>
          <Text className="text-xs uppercase text-slate-400 font-semibold">Mensagem</Text>
          <Text className="text-sm mt-4 leading-loose text-slate-200">{message}</Text>
        </Section>
        {whatsapp ? (
          <Link target="_blank" href={`tel:${whatsapp}`} className="block cursor-pointer py-4 w-full text-sm bg-blue-700 text-center text-white font-medium rounded-lg mt-8">
            Entrar em contato com o cliente via whastapp
          </Link>
        ) : (<Text className="text-sm font-semibold text-slate-500 italic">O cliente não informou o whastapp para contato</Text>)}
      </div>
    </Tailwind>
  );
}