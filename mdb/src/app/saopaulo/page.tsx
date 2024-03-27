import Image from "next/image"

const Saopaulo = () => {
    return (
        <>

            <section className="banner">

                <Image src="/imagens/saopaulo/logo_sao_paulo.png" alt="Logo do Sao paulo" width={500} height={500}></Image>
            
                <div className="txt-banner">

                    <h1>O São Paulo Futebol Clube, comumente conhecido como São Paulo FC ou simplesmente São Paulo,
                        é um dos clubes mais emblemáticos e vitoriosos do futebol brasileiro. Fundado em 1930,
                        o clube tem sua sede na cidade de São Paulo e sua história é marcada por uma trajetória de conquistas e glórias.</h1>

                </div>

            </section>

            <section className="titulos">

                <div className="txt_titulo">

                    <h2>Titulos</h2>

                    <p>O São Paulo Futebol Clube é uma das equipes mais vitoriosas do futebol brasileiro,
                        acumulando ao longo de sua história uma impressionante lista de títulos em competições nacionais e internacionais.
                        Fundado em 1930, o clube se destacou como uma potência do futebol, conquistando troféus que marcaram época e consagraram grandes jogadores.
                        No cenário nacional, o São Paulo FC acumula títulos importantes, incluindo seis Campeonatos Brasileiros da Série A,
                        conquistados nos anos de 1977, 1986, 1991, 2006, 2007 e 2008. Além disso, o clube possui uma extensa lista de títulos estaduais,
                        destacando-se com 22 títulos do Campeonato Paulista.
                        Internacionalmente, o São Paulo FC também ostenta uma trajetória de sucesso. O clube é tricampeão da Copa Libertadores da América,
                        erguendo o troféu em 1992, 1993 e 2005. Além disso, foi campeão mundial em três ocasiões, vencendo a Copa Intercontinental em 1992 e 1993 e o Mundial de Clubes da FIFA em 2005.</p>
                </div>

                <Image src="/imagens/SaoPaulo/titulos_sp" alt="" width={500} height={500} ></Image>

            </section>

            <section className="estadio">

                <h2>Estádio Cícero Pompeu de Toledo</h2>

                <Image src="/imagens/saopaulo/morumbis.webp" alt="Vila belmiro estádio do Santos" width={1000} height={500}></Image>

                <p> O estádio Cícero Pompeu de Toledo, também conhecido como "Morumbis", localizado na cidade de São Paulo (SP),
                    é um dos estádios mais emblemáticos do futebol brasileiro e uma verdadeira casa para o São Paulo Futebol Clube.
                    Localizado na zona sul da cidade de São Paulo, o Morumbi foi inaugurado em 1960 e possui uma capacidade para mais de 67 mil espectadores,
                    tornando-se um dos maiores estádios do Brasil.
                    </p>

            </section>

            <section className="idolos">

                <h2>Ídolos</h2>

                <div className="idolo1">

                    <Image src="/imagens/saopaulo/rogerio_ceni.jpg"
                        alt="Rogério ceni com a taça da libertadores"
                        width={500} height={500}></Image>

                    <p> Rogério Ceni é uma lenda viva do São Paulo FC. Ele é considerado um dos maiores goleiros da história do futebol brasileiro e mundial.
                        Além de suas habilidades como goleiro, Ceni também era conhecido por sua capacidade de marcar gols, sendo o goleiro com mais gols na história do futebol,
                        graças às suas cobranças de falta e pênaltis precisas. Durante sua carreira no São Paulo FC, ele conquistou inúmeros títulos,
                        incluindo três Copas Libertadores da América e três Campeonatos Brasileiros.</p>

                </div>

                <div className="idolo2">

                    <p> Raí é outro ídolo do São Paulo FC, tendo desempenhado um papel crucial na conquista dos títulos da Copa Libertadores
                        e do Mundial de Clubes em 1992 e 1993. Como capitão da equipe, Raí era conhecido por sua liderança em campo,
                        além de sua habilidade técnica e visão de jogo.</p>

                    <Image src="/imagens/saopaulo/rai.jpg"
                        alt="Rai contra koeman"
                        width={500} height={500}></Image>
                </div>

            </section>

            <section className="torcida">

                <h2>Torcida Organizada</h2>

                <p> A torcida organizada do São Paulo Futebol Clube, conhecida como "Torcida Independente",
                    é uma das principais e mais antigas torcidas organizadas do Brasil. Fundada em 1972,
                    a Torcida Independente rapidamente se tornou uma parte integral do apoio apaixonado ao tricolor paulista.
                    Além de apoiar o time em campo, a Torcida Independente também desempenha um papel ativo na vida social e cultural do clube,
                    organizando eventos, caravanas e ações de solidariedade para fortalecer o vínculo entre os torcedores e promover o espírito são-paulino.</p>

                <Image src="/imagens/saopaulo/independente.jpg"
                    alt="Independente no morumbi"
                    width={1000} height={400}></Image>

            </section>

        </>
    )
}
export default Saopaulo;