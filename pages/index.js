import styles from "./index.module.css";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

export default function IndexPage() {

    return (
        <div className={styles.posts}>
            <h1>Schützenstube Platten</h1>
            <Carousel>
                <Carousel.Item>
                    <Image width="1000" height="500"
                        className="d-block w-100"
                        src="/restaurant-schutzenstube-62671.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image width="1000" height="500"
                        className="d-block w-100"
                        src="/Schliern-bei-Köniz,Plattenweg-62.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image width="1000" height="500"
                        className="d-block w-100"
                        src="/reastaurant-vorne.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <aside className={styles.aside}>Menükarte</aside>
            <section>
                <article>
                    <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Montag</Accordion.Header>
                            <Accordion.Body>
                                <div className={styles.menuTitle}>
                                    <Table responsive="sm">
                                        <thead className={styles.alignCenter}>
                                        <tr>
                                            <th><h2>Gericht1</h2></th>
                                            <th><h2>Gericht2</h2></th>
                                        </tr>
                                        </thead>
                                        <tbody className={styles.alignCenter}>
                                        <tr>
                                            <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                            <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </article>
                <article>
                    <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Dienstag</Accordion.Header>
                            <Accordion.Body>
                                <div className={styles.menuTitle}>
                                    <Table responsive="sm">
                                        <thead className={styles.alignCenter}>
                                        <tr>
                                            <th><h2>Gericht1</h2></th>
                                            <th><h2>Gericht2</h2></th>
                                        </tr>
                                        </thead>
                                        <tbody className={styles.alignCenter}>
                                        <tr>
                                            <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                            <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </article>
                <article>
                    <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Mittwoch</Accordion.Header>
                            <Accordion.Body>
                                <div className={styles.menuTitle}>
                                    <Table responsive="sm">
                                        <thead className={styles.alignCenter}>
                                        <tr>
                                            <th><h2>Gericht1</h2></th>
                                            <th><h2>Gericht2</h2></th>
                                        </tr>
                                        </thead>
                                        <tbody className={styles.alignCenter}>
                                        <tr>
                                            <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                            <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </article>
                <article>
                    <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Donnerstag</Accordion.Header>
                            <Accordion.Body>
                                <div className={styles.menuTitle}>
                                    <Table responsive="sm">
                                        <thead className={styles.alignCenter}>
                                        <tr>
                                            <th><h2>Gericht1</h2></th>
                                            <th><h2>Gericht2</h2></th>
                                        </tr>
                                        </thead>
                                        <tbody className={styles.alignCenter}>
                                        <tr>
                                            <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                            <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </article>
                <article>
                    <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Freitag</Accordion.Header>
                            <Accordion.Body>
                                <div className={styles.menuTitle}>
                                    <Table responsive="sm">
                                        <thead className={styles.alignCenter}>
                                        <tr>
                                            <th><h2>Gericht1</h2></th>
                                            <th><h2>Gericht2</h2></th>
                                        </tr>
                                        </thead>
                                        <tbody className={styles.alignCenter}>
                                        <tr>
                                            <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                            <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </article>
            </section>
            <section>
                <article>
                    <aside className={styles.aside}>Öffnungszeiten</aside>
                </article>
            </section>
            <div className={styles.mapResponsive}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.97967667654!2d7.4209375165071565!3d46.903118079144335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e3914860560df%3A0x585c498ea1f28f54!2sRestaurant%20Sch%C3%BCtzenstube%20Platten!5e0!3m2!1sde!2sch!4v1665098664295!5m2!1sde!2sch"
                    width="100%" height="100%" style={{"border": 0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}