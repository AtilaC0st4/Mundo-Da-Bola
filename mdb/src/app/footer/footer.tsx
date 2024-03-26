import Image from "next/image"
import Link from "next/link"

const Rodape = () => {
    return (
        <>
            <footer className="rodape">

                <div className="content">

                    <section className="menu_rodape">

                        <Image src="/imagens/img_logo.png" alt="Logo" width={150} height={100}></Image>

                        <span>Copyright © 2024 InovaTech | Powered by InovaTech.</span>

                        <nav className="links_rodape">
                            
                            <h3>Links Úteis</h3>

                            <div className="container_links_rodape">

                                <ul>
                                    <li>
                                        <Link href="">Página Inicial</Link>
                                    </li>
                                    <li>
                                        <Link href="">Corinthians</Link>
                                    </li>
                                    <li>
                                        <Link href="">Santos</Link>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Link href="">São Paulo</Link>
                                    </li>
                                    <li>
                                        <Link href="">Palmeiras</Link>
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