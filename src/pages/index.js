import React from 'react';
import styles from "./index-css-modules.module.css";
import { CarouselProvider, Slider, Slide, Dot, DotGroup, Image } from 'pure-react-carousel';
import slide1 from "../images/slide-2.png";
import logoHeig from "../images/heig-vd.png";
import logoHeigBlack from "../images/heig-vd-black.png";
import goDown from "../images/go-down.png";
import skill1 from "../images/GCI-pictos-competences-01.png";
import skill2 from "../images/GCI-pictos-competences-02.png";
import skill3 from "../images/GCI-pictos-competences-03.png";
import skill4 from "../images/GCI-pictos-competences-04.png";
import skill5 from "../images/GCI-pictos-competences-05.png";
import skill6 from "../images/GCI-pictos-competences-06.png";
import skill7 from "../images/GCI-pictos-competences-07.png";
import skill8 from "../images/GCI-pictos-competences-08.png";
import skill9 from "../images/GCI-pictos-competences-09.png";
import skill10 from "../images/GCI-pictos-competences-10.png";
import skill11 from "../images/GCI-pictos-competences-11.png";
import 'pure-react-carousel/dist/react-carousel.es.css';
import YouTube from 'react-youtube';
console.log(styles)

export default class extends React.Component {

  render() {
    return (
      <div>
      <img className={styles.heigLogo} src={logoHeig} alt="Logo HEIG-VD" />
      <Nav/>
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={16}
        totalSlides={3}
        style={{position:"relative"}}
      >
        <Slider style={{height:'100vh'}}>
          <Slide index={0} style={{backgroundColor:'#42a155'}}><div className={styles.slidesImageContainer}><Image className={styles.slidesImageContainerImage} src={slide1} hasMasterSpinner={true}/></div></Slide>
          <Slide index={1} style={{backgroundColor:'blue'}}>I am the second Slide.</Slide>
          <Slide index={2} style={{backgroundColor:'green'}}>I am the third Slide.</Slide>
        </Slider>
        <div className={styles.slidesFixedContent}>
          <h2>Bachelors</h2>
          <h2>construction &amp; infrastructures</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing, magnis turpis porta rhoncus sociosqu senectus. Feugiat ullamcorper egestas ent tempus magnis</p>
          <a className={styles.downloadButton} href="#">Télécharger la brochure</a>
          <div>
            <Dot slide={0} className={styles.sliderDot} />
            <Dot slide={1} className={styles.sliderDot} />
            <Dot slide={2} className={styles.sliderDot} />
          </div>
        </div>
        <a href="#section2" className={styles.goDown}>
          <img style={{height:'50px'}} src={goDown} alt="Logo HEIG-VD" />
        </a>
      </CarouselProvider>
      <AdvantagesSection anchor="section2"/>
      <PaletteSection anchor="section3"/>
      <InformationsSection anchor="section4"/>
      <ContactFormSection anchor="section5"/>
      </div>
    );
  }
}

const Nav = props => (
  <nav className={styles.mainNav}>
    <ul className={styles.mainNavUl}>
      <li><a href="#section1">Accueil</a></li>
      <li><a href="#section2">Formation</a></li>
      <li><a href="#section3">Plan d'études</a></li>
      <li><a href="#section4">Nous contacter</a></li>
    </ul>
  </nav>
);

class ContactFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <section className={[styles.gridContainer,styles.contactFormContainer].join(' ')} id={this.props.anchor}>
        <section className={styles.gridRow}>
          <article className={styles.gridCol6}>
            <h1>prenez directement contact avec nous !</h1>
            <p>Si vous avez des interrogations concernant la formation ou l’école, n’hésitez pas à prendre contact avec nous via le formulaire ou par téléphone, nous nous ferons un plaisir de répondre à vos questions. </p>
            <img className={styles.contactFormHeigLogo} src={logoHeigBlack} alt="Logo HEIG-VD" />
            <ul className={styles.contactList}>
              <li>
                Campus de Cheseaux
              </li>
              <li style={{marginTop:'10px'}}>
                Route de Cheseaux 1
              </li>
              <li>
                1401 Yverdon-les-Bains
              </li>
              <li style={{marginTop:'10px'}}>
                +41 (0)24 557 63 30
              </li>
            </ul>
          </article>
          <article className={styles.gridCol6}>
            <p>Merci de remplir les champs ci-dessous :</p>
            <form className={styles.contactForm} onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.handleChange} required placeholder="VOTRE NOM ET PRÉNOM *" />
              <input type="text" value={this.state.value} onChange={this.handleChange} required placeholder="VOTRE EMAIL *" />
              <input type="text" value={this.state.value} onChange={this.handleChange} required placeholder="VOTRE TÉLÉPHONE *" />
              <textarea value={this.state.value} onChange={this.handleChange} required placeholder="VOTRE MESSAGE *" />
              <input type="submit" value="Envoyer" />
            </form>
          </article>
        </section>
      </section>
    );
  }
}

const InformationsSection = props => (
  <section className={[styles.gridContainer,styles.informatonsContainer].join(' ')} id={props.anchor}>
    <section className={styles.gridRow}>
      <article className={styles.gridCol6}>
        <h1>informations pratiques</h1>
        <p>De nombreux défis, réservés à l'esprit inventif et créatif, que nos diplômé-e-s se feront le plaisir de relever. Découvrez la variété du plan d’études ainsi que les condissions d’admission et autres informations relatives à la formation proposée, ci-dessous:</p>
        <a className={styles.downloadButton} href="#">Plan d’études</a>
        <a className={styles.downloadButton} href="#">Admissions et autres infos</a>
      </article>
      <article className={styles.gridCol6}>
        <h1>Recherche & développement</h1>
        <p>L'institut d’ingénierie du territoire (insit) de la HEIG-VD a pour objectif principal de renforcer sa position de centre de compétences en ingénierie territoriale et ce, dans sa relation avec le tissu économique local, national et international.</p>
        <a className={styles.downloadButton} href="#">En savoir plus</a>
      </article>
    </section>
  </section>
);

const AdvantagesSection = props => (
  <section className={styles.gridContainer} id={props.anchor}>
    <section className={styles.gridRow}>
      <article className={styles.advantagesSectionContentLeft}>
        <h1>Les avantages de choisir cette formation plutôt qu’une autre</h1>
        <p>Devenir ingénieur-e dans les domaines de l'ingénierie civile, c'est devenir un acteur majeur dans la création, l'entretien et le développement de l'espace construit et de ses infrastructures dans le respect du développement économique durable.</p>
        <p>Notre orientation en construction et infrastructure répond aux exigences pluridisciplinaires liées à la conception, réalisation, rénovation et maintenance de nos infrastructures et de notre patrimoine immobilier</p>
      </article>
      <article className={styles.advantagesSectionContentRight}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={62}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}><div className={styles.videoContainer}><iframe src="https://www.youtube.com/embed/Y_hN-sp5bz4" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></Slide>
            <Slide index={1}><div className={styles.videoContainer}><iframe src="https://www.youtube.com/embed/AL7rPIuvLBY" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></Slide>
            <Slide index={2}><div className={styles.videoContainer}><iframe src="https://www.youtube.com/embed/jcrkrAh1nOc" allow="autoplay; encrypted-media" allowfullscreen></iframe></div></Slide>
          </Slider>
          <div>
            <Dot slide={0} className={styles.advantagesSectionSliderDots} />
            <Dot slide={1} className={styles.advantagesSectionSliderDots} />
            <Dot slide={2} className={styles.advantagesSectionSliderDots} />
          </div>
        </CarouselProvider>
      </article>
    </section>
  </section>
);

const PaletteSection = props => (
  <section className={[styles.gridContainer,styles.paletteContainer].join(' ')} id={props.anchor}>
    <section className={styles.gridRow}>
      <article className={styles.paletteSectionContentLeft}>
        <h1>la palette complète des compétences de la formation</h1>
      </article>
      <article className={styles.paletteSectionContentRight}>
        <p>Nos ingénieur-e-s en construction sont très apprécié-e-s par le marché du travail, par leurs compétences techniques et pratiques pointues, qui répondent aux exigences techniques du métier, et leurs compétences sociales qui leur permette d'œuvrer au sein d'équipes variées et interdisciplinaires.</p>
      </article>
    </section>
    <section className={styles.gridRow}>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill1} />
          <p>Concept, calcul et dimensionnement de structures et des ouvrages en bois, en béton, en acier ou en maçonnerie</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill2} />
          <p>Maintenance, remise en état, assainissement et rénovation des structures et des constructions</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill3} />
          <p>Dimensionnement et réalisation des ouvrages souterrains de la géotechnique</p>
        </div>
      </article>
    </section>
    <section className={styles.gridRow}>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill4} />
          <p>Conception et développement de projets de construction</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill5} />
          <p>Conception et développement de projets de construction</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill6} />
          <p>Planification et réalisation de petits et grands projets</p>
        </div>
      </article>
    </section>
    <section className={styles.gridRow}>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill7} />
          <p>Constructions hydrauliques, gestion des eaux et réalisation d'aménagements hydrauliques</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill8} />
          <p>Gestion des risques et dangers naturels</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill9} />
          <p>Transport, mobilité et constructions routières, maintenance et remise en état des voies de circulation </p>
        </div>
      </article>
    </section>
    <section className={styles.gridRow}>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill10} />
          <p>Transport, mobilité et constructions routières, maintenance et remise en état des voies de circulation </p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <img src={skill11} />
          <p>Maintenance, remise en état, assainissement et rénovation des structures et des constructions</p>
        </div>
      </article>
      <article className={styles.gridCol4}>
        <div className={styles.itemContainer}>
          <a className={styles.downloadShowButton} href="#">Télécharger la brochure</a>
        </div>
      </article>
    </section>
  </section>
);