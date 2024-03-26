import Image from "next/image"

const Corinthians = () => {
    return (
        <>
            {/* aqui você so vai alterar as imagens, os texto e os nomes */}

            <section className="banner">

                <div className="content">

                    <div className="container_banner">

                        <Image src="/imagens/corinthians/logo_corinthians.png" alt="Logo do Corinthians" width={400} height={400}></Image>

                        <div className="txt_banner">

                            <h1>O Sport Club Corinthians Paulista, fundado em 1910 na cidade de São Paulo,
                                é um dos clubes mais tradicionais e populares do Brasil.
                                Sua história é marcada por uma rica trajetória de conquistas e momentos memoráveis.</h1>

                        </div>

                    </div>

                </div>


            </section>

            <section className="titulos">

                <div className="content">

                    <h2>Titulos</h2>

                    <div className="container_titulos">

                        <div className="txt_titulos">

                            <p>O Corinthians já conquistou o Campeonato Brasileiro em sete ocasiões,
                                sendo os títulos de 1990, 1998, 1999, 2005, 2011, 2015 e 2017.
                                Além disso, o clube é conhecido por suas vitórias em competições internacionais,
                                como a Copa Libertadores da América, conquistada pela primeira vez em 2012, quando derrotou o Boca Juniors na final.
                            </p>
                            <p>
                                Outro título de destaque na história do Corinthians é o Mundial de Clubes da FIFA,
                                vencido em 2000 após uma vitória sobre o Vasco da Gama. O clube também ganhou o Mundial novamente em 2012,
                                após derrotar o Chelsea na final.
                            </p>
                            <p>
                                A nível estadual, o Corinthians é um dos clubes mais bem-sucedidos,
                                tendo vencido o Campeonato Paulista em inúmeras ocasiões, sendo um dos recordistas de títulos do torneio.
                            </p>
                            <p>
                                Além dessas conquistas, o Corinthians também possui uma vasta coleção de títulos em outras competições,
                                tanto nacionais quanto internacionais, consolidando sua posição como um dos clubes mais respeitados e temidos do futebol brasileiro e mundial.</p>

                        </div>

                        <Image src="/imagens/corinthians/img_titulos_corinthians.png" alt="taças dos mundiais do corinthians" width={400} height={400} ></Image>

                    </div>

                </div>

            </section>

            <section className="estadio">

                <div className="content" >

                    <h2>Neo Quimica Arena</h2>

                    <Image src="/imagens/corinthians/estadio_corinthians.png" alt="Neo Quimica arena estádio do corinthians" width={1000} height={500}></Image>

                    <p>A Neo Química Arena, conhecida como "Casa do Corinthians", é um estádio em Itaquera, São Paulo, inaugurado em 2014.
                        Além de sediar jogos do Corinthians, o estádio recebe diversos eventos esportivos e culturais.
                        Sua estrutura moderna e capacidade para mais de 48 mil pessoas oferece uma experiência única aos torcedores.
                        O nome é uma homenagem ao patrocinador máster. Para os corintianos,
                        a arena representa mais do que um estádio de futebol; é um símbolo de paixão e orgulho,
                        onde a história do clube se desenrola a cada partida.</p>

                </div>

            </section>

            <section className="idolos">

                <div className="content">

                    <h2>Idolos</h2>

                    <div className="idolo1">

                        <Image src="/imagens/corinthians/idolo_cassio.png"
                            alt="cassio isolo do corinthians beijando a taça do mundial de 2012"
                            width={500} height={500}></Image>

                        <p>Cássio e Sócrates são figuras icônicas no Corinthians,
                            representando diferentes períodos e contribuições para o clube.
                            Cássio é reverenciado como um dos maiores goleiros da história corintiana,
                            famoso por suas defesas decisivas em momentos cruciais,
                            como na conquista da Copa Libertadores e do Mundial de Clubes em 2012.</p>

                    </div>

                    <div className="idolo2">

                        <p>Sócrates, por outro lado, é lembrado não apenas por seu talento em campo,
                            mas também por sua influência como líder e pensador,
                            sendo uma figura central na Democracia Corinthiana nos anos 1980.
                            Ambos deixaram um legado duradouro e inspirador para os torcedores do Corinthians,
                            cada um contribuindo de maneira única para a história e identidade do clube.</p>

                        <Image src="/imagens/corinthians/idolo_socrates.png"
                            alt="Socratres idolo do corinthians com o punho serrado para cima"
                            width={500} height={500}></Image>
                    </div>

                </div>

            </section>

            <section className="torcida">

                <h2>Torcida Organizada</h2>

                <p>A torcida organizada do Corinthians é conhecida como Gaviões da Fiel. Fundada em 1969,
                    é uma das mais antigas e influentes torcidas organizadas do Brasil.
                    Seu nome é uma referência ao apelido dado à torcida do Corinthians, "Fiel".
                    Os Gaviões da Fiel têm uma história marcante dentro e fora dos estádios.
                    Além de apoiar o time durante as partidas, a torcida está envolvida em diversas atividades sociais,
                    culturais e políticas. Eles organizam eventos, como festas e shows, e também participam ativamente de campanhas sociais,
                    como doações de sangue e arrecadação de alimentos.
                    No entanto, como muitas outras torcidas organizadas no Brasil,
                    os Gaviões da Fiel também enfrentaram problemas de violência e conflitos com outras torcidas ao longo dos anos.
                    Isso levou a medidas por parte das autoridades e do próprio clube
                    para tentar controlar esses episódios negativos e promover uma atmosfera mais segura nos estádios.
                    Apesar dos desafios, os Gaviões da Fiel continuam sendo uma parte essencial do cenário do futebol brasileiro,
                    representando não apenas o apoio apaixonado ao Corinthians, mas também uma expressão cultural e social para muitos de seus membros.</p>

                <Image src="/imagens/corinthians/torcida_corinthians.png"
                    alt="torcida do corinthians estendendo o bandeirão da gaviões da fiel"
                    width={1000} height={400}></Image>

            </section>

        </>
    )
}
export default Corinthians;