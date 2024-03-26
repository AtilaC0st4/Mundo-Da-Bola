import Image from "next/image"

const Santos = () => {
    return (
        <>

            <section className="banner">

                <Image src="/imagens/santos/logo_santos.png" alt="Logo do Santos" width={500} height={500}></Image>
            
                <div className="txt-banner">

                    <h1>O Santos Futebol Clube é uma das equipes mais emblemáticas do futebol brasileiro, 
                        conhecida por sua rica história e conquistas. Fundado em 1912 na cidade de Santos, 
                        no estado de São Paulo, o clube tornou-se um dos mais vitoriosos do país.</h1>

                </div>

            </section>

            <section className="titulos">

                <div className="txt_titulo">

                    <h2>Titulos</h2>

                    <p>Uma das épocas mais gloriosas do Santos foi durante a década de 1960, quando o time contava com um dos maiores jogadores de todos os tempos, Pelé. 
                        Nesse período, o Santos conquistou diversos títulos importantes, incluindo a Copa Libertadores da América em 1962 e 1963, 
                        além de vencer o Campeonato Brasileiro em 1961, 1962, 1963 e 1964.
                        Outro momento significativo na história recente do clube foi em 2011, quando o Santos conquistou sua última Copa Libertadores da América, 
                        com uma equipe liderada por Neymar e Ganso. Além desses títulos, o Santos acumula diversas conquistas estaduais, 
                        tendo vencido o Campeonato Paulista em inúmeras ocasiões ao longo de sua história, sendo um dos clubes com mais títulos do torneio.</p>
                </div>

                <Image src="/imagens/santos/liberta.jpg" alt="" width={500} height={500} ></Image>

            </section>

            <section className="estadio">

                <h2>Vila Belmiro</h2>

                <Image src="/imagens/caldeirao.webp" alt="Vila belmiro estádio do Santos" width={1000} height={500}></Image>

                <p> Estádio Urbano Caldeira, também conhecido como "Vila belmiro" e "Caldeirão", localizado na cidade de Santos, estado de São Paulo, no Brasil.
                    A Vila Belmiro é considerada um patrimônio histórico do futebol brasileiro. Sua inauguração na data 1916, 
                    o torna uma das arenas mais antigas ainda em atividade no país e tem capacidade para aproximadamente 16.798 espectadores. 
                    O nome foi dado em homenagem a Belmiro Ribeiro de Morais e Silva, que se destacou na vida social, econômica e política de Santos.</p>

            </section>

            <section className="idolos">

                <h2>Ídolos</h2>

                <div className="idolo1">

                    <Image src="/imagens/santos/pele_coroado.jpg"
                        alt="pele sendo coroado"
                        width={500} height={500}></Image>

                    <p> Pelé é idolatrado pelo Santos FC e pelos fãs de futebol em geral devido às suas conquistas esportivas extraordinárias,
                        sua dedicação ao clube, sua representação do futebol brasileiro e seu impacto social e cultural duradouro.
                        Ele é verdadeiramente o ícone do esporte mundial, conquistando os mundiais de 62 e 63, goleando o Liverpool e marcando o único gol no jogo entre Santos e Milan.</p>

                </div>

                <div className="idolo2">

                    <p> Neymar, o menino de ouro. Um garoto que esbanjou talento entre suas pedaladas e carretilhas,
                        dribles insanos de deixar os oponentes no chão. O raio que caiu pela segunda vez na Vila Belmiro,
                        o mesmo raio que fez Pelé.
                        Neymar foi um dos, se não o melhor jogador do futebol brasileiro, conquistando uma libertadores com apenas 19 anos,
                        sendo protagonista e marcando o gol do título. Conquistou tambem 3 campeonatos paulistas seguidos (2010,2011 e 2012), marcando 7 gols em 6 jogos (ida e volta);
                        artilheiro e campeão da Copa do Brasil com gol na final; Recopa Sul Americana com gol na final e Copa Libertadores da América, marcando o gol do título.
                    </p>

                    <Image src="/imagens/santos/neymar.jpg"
                        alt="Neymar com a taça da libertadores"
                        width={500} height={500}></Image>
                </div>

            </section>

            <section className="torcida">

                <h2>Torcida Organizada</h2>

                <p>A torcida organizada do Santos é conhecida como Torcida Jovem. Fundada em 1969,
                    é uma das mais antigas e influentes torcidas organizadas do Brasil.
                    Ela surgiu como uma manifestação do apoio entusiástico dos jovens torcedores do Santos,
                    buscando aumentar a atmosfera nos estádios e proporcionar um ambiente de apoio fervoroso à equipe.
                    A torcida Jovem têm uma história marcante dentro e fora dos estádios.
                    Além de apoiar o time durante as partidas, a torcida está envolvida em diversas atividades sociais,
                    culturais e políticas. Eles organizam eventos, como festas e shows, e também participam ativamente de campanhas sociais,
                    como arrecadação de alimentos, agasalhos, doação de marmitas, doação de sangue.</p>

                <Image src="/imagens/santos/organizada_santos.jpg"
                    alt="torcida do corinthians estendendo o bandeirão da gaviões da fiel"
                    width={1000} height={400}></Image>

            </section>

        </>
    )
}
export default Santos;