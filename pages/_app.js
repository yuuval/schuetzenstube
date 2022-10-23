import Header from "@components/Header"
import useSession from "@lib/session"
import Link from "next/link"
import "./_app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import SSRProvider from 'react-bootstrap/SSRProvider'

export default function App({ Component, pageProps }) {
    const session = useSession()
    const newPageProps = {
        ...pageProps,
        session
    }
    return (
        <>
            <Header>
                <Link className="link" href="/" passHref>
                    Schützenstube Platten
                </Link>
            </Header>

            <main className="page">
                <SSRProvider>
                <Component {...newPageProps} />
                </SSRProvider>
            </main>
        </>
    )
}