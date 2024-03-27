import Image from "next/image"
import Link from "next/link"

const Cabecalho = () => {
    return (
        <>
            <header className="cabecalho">

                <div className="content">

                    <nav className="menu">

                    <Link href="/" > <Image src="/imagens/img_logo.png" alt="Logo" width={75} height={50}></Image></Link>


                        <ul className="menu_rotas">

                            <li>
                                <Link href="/" >Página Inicial</Link>
                            </li>
                            <li>
                                <Link href="/corinthians" >Corinthians</Link>
                            </li>

                            <li>
                                <Link href="/santos" >Santos</Link>
                            </li>

                            <li>
                                <Link href="/saopaulo">São Paulo</Link>
                            </li>

                            <li>
                                <Link href="/palmeiras">Palmeiras</Link>
                            </li>

                        </ul>

                    </nav>

                </div>

            </header>
        </>
    )
}
export default Cabecalho;