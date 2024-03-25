import Image from "next/image"

const Corinthians = () => {
    return (
        <>
            {/* aqui você so vai alterar a imagem e o texto */}
            <section className="banner">
                <Image src="/imagens/logo_corinthians.png" alt="Logo do Corinthians" width={500} height={500}></Image>
                <div className="txt-banner">
                    <h1>O Sport Club Corinthians Paulista, fundado em 1910 na cidade de São Paulo,
                        é um dos clubes mais tradicionais e populares do Brasil.
                        Sua história é marcada por uma rica trajetória de conquistas e momentos memoráveis.</h1>
                </div>
            </section>

            <section className="titulos">
                <div className="txt_titulo">
                <h2>Titulos</h2>
                <p>O Corinthians já conquistou o Campeonato Brasileiro em sete ocasiões,
                    sendo os títulos de 1990, 1998, 1999, 2005, 2011, 2015 e 2017.
                    Além disso, o clube é conhecido por suas vitórias em competições internacionais,
                    como a Copa Libertadores da América, conquistada pela primeira vez em 2012, quando derrotou o Boca Juniors na final.

                    Outro título de destaque na história do Corinthians é o Mundial de Clubes da FIFA,
                    vencido em 2000 após uma vitória sobre o Vasco da Gama. O clube também ganhou o Mundial novamente em 2012,
                    após derrotar o Chelsea na final.

                    A nível estadual, o Corinthians é um dos clubes mais bem-sucedidos,
                    tendo vencido o Campeonato Paulista em inúmeras ocasiões, sendo um dos recordistas de títulos do torneio.

                    Além dessas conquistas, o Corinthians também possui uma vasta coleção de títulos em outras competições,
                    tanto nacionais quanto internacionais, consolidando sua posição como um dos clubes mais respeitados e temidos do futebol brasileiro e mundial.</p>
                    </div>
                    <Image src="/imagens/img_titulos_corinthians.png" width={500} height={500} ></Image>

            </section>


        </>
    )
}
export default Corinthians;