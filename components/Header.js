import styles from "./Header.module.css"
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function Header({children, props}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <header className={styles.header}>
                <div>
                    <Button variant="outline-dark" onClick={handleShow} className="me-2">☰</Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Link id="link" href="/impressum" passHref className={styles.standort}>Impressum</Link>
                            <br/>
                            <Link id="link" href="/aboutUs" passHref className={styles.standort}>Über mich</Link>
                            <br/>
                            <Link id="link" href="/kontakt" passHref className={styles.standort}>Kontakt</Link>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                {children}
                <div className={styles.headerDiv}>
                <Link id="link" href="/" passHref className={styles.standort}>Standort</Link>
                <Image className={styles.locationImg} src={"/location_on_FILL0_wght400_GRAD0_opsz48.png"} width={30} height={30}></Image>
                </div>
            </header>
        </>
    )

}