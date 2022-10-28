import Link from "next/link";
import styles from "./impressum.module.css"

export default function ImpressumPage() {
    return (
        <>
            <h1>Impressum</h1>
            <div className={styles.posts}>
                <Link style={{textAlign: "center"}} href="https://react-bootstrap.github.io/">React Bootstrap</Link>
                <Link style={{textAlign: "center"}} href="https://www.google.ch/maps">Google Maps</Link>
                <Link style={{textAlign: "center"}} href="https://www.emailjs.com/">E-MailJS</Link>
            </div>
        </>
    )
}