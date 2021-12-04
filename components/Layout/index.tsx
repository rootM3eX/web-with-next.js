import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../Header";
import styles from "./Layout.module.css";

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const {children, pageTitle} = props;
    return (
        <>
        <Head>
            <title>Next JS | {''} {pageTitle}</title>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="description" content="contoh simple website next js" />
        </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
        </>
    )
}