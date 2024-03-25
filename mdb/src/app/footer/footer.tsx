import Image from "next/image"
import Link from "next/link"

const Rodape = () => {
    return (
        <>
            <footer className="rodape">

                <div className="content">

                    <nav className="menu_rodape">

                        <Image src="/imagens/img_logo.png" alt="Logo" width={75} height={50}></Image>

                        <span>Copyright © 2024 InovaTech | Powered by InovaTech.</span>

                        <ul className="links">
                        <li>
                            <Link href="">Página Inicial</Link>
                        </li>
                        <li>
                            <Link href="">Corinthians</Link>
                        </li>
                        <li>
                            <Link href="">Santos</Link>
                        </li>
                        <li>
                            <Link href="">São Paulo</Link>
                        </li>
                        <li>
                            <Link href="">Palmeiras</Link>
                        </li>
                        </ul>

                    </nav>

                </div>

            </footer>
        </>
    )
}
export default Rodape;