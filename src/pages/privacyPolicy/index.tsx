import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

export default function PrivacyPolicy() {
    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | Política Privacidade</title>
            </Head>
            <Navbar />
            <section className="container py-40 prose-slate tablet:pt-32 tablet:pb-16 prose lg:prose-xl tablet:prose-p:text-sm tablet:prose-p:leading-loose tablet:prose-ul:text-sm tablet:prose-ul:leading-loose tablet:prose-h1:text-xl prose-h1:text-3xl prose-h1:font-semibold">
                <h1><span>Política Privacidade</span></h1>
                <p><span>A sua privacidade é importante para nós. É política do Vibecriativa respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="vibecriativa.com.br">Vibecriativa</a>, e outros sites que possuímos e operamos.</span></p>
                <p><span>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</span></p>
                <p><span>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</span></p>
                <p><span>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</span></p>
                <p><span>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <Link href="/politica-de-privacidade" rel="noopener noreferrer" target="_blank">políticas de privacidade</Link>.</span></p>
                <p><span>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</span></p>
                <p><span>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</span></p>
                <ul>
                    <li><span>O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</span></li>
                    <li><span>Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</span></li>
                    <li><span>Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</span></li>
                    <li><span>Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</span></li>
                </ul>
                <h3><span>Compromisso do Usuário</span></h3>
                <p><span>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Vibecriativa oferece no site e com caráter enunciativo, mas não limitativo:</span></p>
                <ul>
                    <li><span>(A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</span></li>
                    <li><span>(B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, <a href="https://apostasonline.guru/bet365-apostas/" style={{ color: 'inherit', textDecoration: 'none', fontSize: 'inherit' }}>pix bet365</a> ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span></li>
                    <li><span>(C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Vibecriativa, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span></li>
                </ul>
                <h3><span>Mais informações</span></h3>
                <p><span>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</span></p>
                <p><span>Esta política é efetiva a partir de 9 June 2023 06:59</span></p>
            </section>
            <Footer />
        </Fragment>
    )
}