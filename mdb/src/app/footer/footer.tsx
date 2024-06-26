import Image from "next/image"
import Link from "next/link"

const Rodape = () => {
    return (
        <>
            <footer className="rodape">

                <div className="content">

                    <section className="menu_rodape">

                        <Link href="/"><Image src="/imagens/img_logo.png" alt="Logo" width={150} height={100}></Image></Link>

                        <span>Powered by Átila Costa - RM552650 | Gabriel Plasa - RM</span>

                        <nav className="links_rodape">
                            
                            <h3>Links Úteis</h3>

                            <div className="container_links_rodape">

                                <ul>
                                    <li>
                                        <Link href="/">Página Inicial</Link>
                                    </li>
                                    <li>
                                        <Link href="/corinthians">Corinthians</Link>
                                    </li>
                                    <li>
                                        <Link href="/santos">Santos</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Link href="/saopaulo">São Paulo</Link>
                                    </li>
                                    <li>
                                        <Link href="/palmeiras">Palmeiras</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </section>

                </div>

            </footer>
        </>
    )
}
export default Rodape;