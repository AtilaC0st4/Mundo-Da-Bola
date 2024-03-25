import Image from "next/image"
import Link from "next/link"

const Cabecalho = () => {
    return (
        <>
            <header className="cabecalho">

                <div className="content">

                    <nav className="menu">

                        <Image src="/imagens/img_logo.png" alt="Logo" width={75} height={50}></Image>


                        <ul className="menu_rotas">

                            <li>
                                <Link href="" >Corinthians</Link>
                            </li>

                            <li>
                                <Link href="" >Santos</Link>
                            </li>
                    
                            <li>
                                <Link href="">Palmeiras</Link>
                            </li>

                        </ul>

                    </nav>

                </div>
                
            </header>
        </>
    )
}
export default Cabecalho;