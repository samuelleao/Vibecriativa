import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { client, ssrCache } from "@lib/urql";
import { ServiceDocument, useServiceQuery } from "generated/graphql";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { Fragment } from "react";
import Image from "next/image"
import Head from "next/head";

export default function Service({ slug }: any) {
    const [{ data }] = useServiceQuery({
        variables: {
            slug,
        }
    })

    return (
        <Fragment>
            <Head>
                <title>Vibecriativa | {data?.service?.title}</title>
                <meta name="description" content={`${data?.service?.description}`} />
            </Head>
            <Navbar />
            <header className="pt-48 flex justify-center border-b-2 border-primary-500 overflow-hidden">
                <div className="max-w-[988px] text-center space-y-12 mb-20 tablet:px-4">
                    <h1 className="text-5xl font-semibold text-gray-900 tablet:text-3xl">{data?.service?.title}</h1>
                    <h2 className="text-sm font-semibold text-gray-900 ">{data?.service?.subtitle}</h2>
                    <p className="text-base font-normal text-gray-900 tablet:text-sm leading-relaxed">{data?.service?.description}</p>
                    <Image className="mb-[-25%_!important]" src="/services/internal/landingpage.svg" width={1240} height={540} alt={`Imagem ilustrando o serviço de ${data?.service?.title}`} />
                </div>
            </header>
            <main>
                {data && <section className='py-20'>
                    <div className="container flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-semibold text-gray-900 mb-20 tablet:text-lg">Quais objetivos desta solução?</h3>
                        <div className="grid grid-cols-2 gap-4 max-w-[940px] tablet:grid-cols-1">
                            {data.service?.differential.map((item) => (
                                <div className="bg-primary-500 p-7 rounded-lg" key={item.id}>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-sm font-semibold text-gray-50">{item.title}</h4>
                                        <div className="w-10 h-10 bg-gray-50 flex justify-center items-center rounded">
                                            <span className="text-sm">{item.icon}</span>
                                        </div>
                                    </div>
                                    <small className="block mt-5 text-sm font-normal text-gray-50 leading-loose">{item.description}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>}
            </main>
            <Footer />
        </Fragment>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    await client.query(ServiceDocument, { slug: params.url }).toPromise()

    return {
        props: {
            urqlState: ssrCache.extractData(),
            slug: params.url,
        },
        revalidate: 1
    }
}