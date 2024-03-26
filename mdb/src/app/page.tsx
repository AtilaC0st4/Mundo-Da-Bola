import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <main>

      <section className="banner_home">
        <div className="content">
          <h1>Os Gigantes de São Paulo: Pilares do Futebol Brasileiro</h1>
          <p>Explore a história e o legado dos quatro maiores times de São Paulo - São Paulo FC,
            Palmeiras, Corinthians e Santos - e descubra como eles moldaram o cenário do futebol brasileiro ao longo dos anos.
            Desde conquistas gloriosas até rivalidades memoráveis, esses clubes não apenas representam paixões locais,
            mas também são pilares fundamentais que contribuíram para a rica tapeçaria do futebol nacional.
            Junte-se a nós em uma jornada através das páginas do futebol brasileiro e descubra o impacto duradouro dessas lendárias instituições.</p>
        </div>
      </section>

      <section className="Clubes">

        <h2>CLubes</h2>

        <div className="area_cards">

          <div className="cards">
            <h3>Santos</h3>
            <Link href=""><Image src="/imagens/santos_card.png" width={300} height={450} alt="Logo Santos" ></Image></Link>
          </div>

          <div className="cards">
            <h3>Corinthians</h3>
            <Link href=""><Image src="/imagens/corinthians_card.png" width={300} height={450} alt="Logo Corinthians"></Image></Link>
          </div>

          <div className="cards">
            <h3>São Paulo</h3>
            <Link href=""><Image src="/imagens/saopaulo_card.png" width={300} height={450} alt="Logo São Paulo"></Image></Link>
          </div>

          <div className="cards">
            <h3>Palmeiras</h3>
            <Link href=""><Image src="/imagens/palmeiras_card.png" width={300} height={450} alt="Logo Palmeiras"></Image></Link>
          </div>

        </div>

      </section>

    </main>

  )
}