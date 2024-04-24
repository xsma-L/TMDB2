"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { styled, keyframes } from "styled-components";


const Main = styled.main`
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
  height: 100%;`;

const TitleContainer = styled.div`
  padding-right: 5%;
  align-self: flex-start;`; 

const Titlte = styled.h1`
  font-family: 'Anton', sans-serif;
  color: #ffffff;
  font-size: 2.5rem;`;

const Paragraph = styled.p`
  font-family: 'Oswald', sans-serif;
  color: #ffffff;
  font-size: 1.5rem;`;

const Slogan = styled.p`
  font-family: 'Oswald', sans-serif;
  color: #ffffff;
  font-size: 1.5rem;
  align-self: flex-start;`;

const AnimationContainer = styled.div`
  width: 50px;
  height: 80px;
  &:hover {
    cursor: pointer;
  }`;

const downAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }`;

const secondDownAnimation = keyframes`
  0% {
    transform: translateY(3);
  }
  50% {
    transform: translateY(35px);
  }
  100% {
    transform: translateY(3);
  }`;

const FirstDownContainer = styled.div`
  position: relative;
  animation: ${downAnimation} 5s infinite;
  width: 100%;
  height: 20px;`;

const SecondDownContainer = styled.div`
  position: relative;
  animation: ${secondDownAnimation} 5s infinite;
  width: 100%;
  height: 20px;`;

  const SecondSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;`;

  const SecondSectionPContainer = styled.div`
  width: 90%;
  align-self: flex-start;`;

  const SecondSectionLinkContainer = styled.div`
  width: 90%;
  align-self: flex-start;
  display: flex;
  align-items: center;`;

  const Button = styled.button`
  font-family: 'Oswald', sans-serif;
  color: #000000;
  font-size: 1.5rem;
  background-color: #ffffff;
  border-radius: 50px;
  padding: 0.2rem 0.5rem;
  margin-right: 1px;
  &:hover{
    cursor: pointer;
  }`;

  const Span = styled.span`
  font-family: 'Oswald', sans-serif;
  color: #ffffff;
  font-size: 1.5rem;
  margin-left: 5px;`;

export default function Home() {

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (navbar)
    setNavHeight(navbar.clientHeight);
  }, []);

  const [navHeight, setNavHeight] = useState(0);

  const FirstSection = styled.section`
  width: 100%;
  height: calc(100vh - ${navHeight}px - 1px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000000;`;

  return (
    <Main>
      <FirstSection>
        <TitleContainer>
          <Titlte>Bienvenue sur CineMagic, votre univers cinématographique personnalisé.</Titlte>
        </TitleContainer>
        <SecondSectionPContainer>
          <Paragraph>
            Découvrez une vaste sélection de films et séries, des grands classiques intemporels aux dernières nouveautés, tous disponibles au bout de vos doigts. Sur CineMagic, plongez dans des mondes où l'imagination n'a pas de limites, et trouvez le divertissement parfait adapté à votre humeur.
          </Paragraph>
        </SecondSectionPContainer>
        <Slogan>Explorez, Regardez, Plongez.</Slogan>
        <AnimationContainer>
          <FirstDownContainer>
            <Image src="/down-icon.png" fill={true} alt="First Down Arrow" />
          </FirstDownContainer>
          <SecondDownContainer>
            <Image src="/down-icon.png" fill={true} alt="Second Down Arrow" />
          </SecondDownContainer>
        </AnimationContainer>
      </FirstSection>
      <SecondSection>
        <SecondSectionPContainer>
          <Paragraph>
            Explorez notre riche bibliothèque mise à jour en continu, organisée intelligemment pour vous aider à trouver vos favoris, que vous soyez d'humeur pour une comédie légère ou un thriller haletant.
          </Paragraph>
        </SecondSectionPContainer>
        <SecondSectionPContainer>
          <Paragraph>
            Visionnez vos films et séries avec une qualité de streaming inégalée, disponibles sur tous vos appareils, où que vous soyez et quand vous le souhaitez. Ajoutez vos titres préférés à votre bibliothèque personnelle pour les retrouver facilement et reprendre la lecture à tout moment. Nos recommandations personnalisées s'adaptent à vos goûts et enrichissent constamment votre collection avec de nouvelles découvertes.
          </Paragraph>
        </SecondSectionPContainer>
        <SecondSectionPContainer>
          <Paragraph>
            Plongez dans les détails de chaque titre, avec des résumés, critiques et bandes-annonces qui enrichissent votre expérience de visionnage.
          </Paragraph>
        </SecondSectionPContainer>
        <SecondSectionPContainer>
          <Paragraph>
            CineMagic n'est pas juste une plateforme de streaming. C'est votre partenaire cinéphile, qui transforme chaque soirée film en une expérience unique. Avec une interface utilisateur élégante et une navigation intuitive, accéder au meilleur du cinéma mondial n'a jamais été aussi simple.
          </Paragraph>
        </SecondSectionPContainer>
        <SecondSectionLinkContainer>
          <Button>Rejoignez la communauté CineMagic aujourd'hui</Button>
          <Span>et transformez chaque visionnage en aventure.</Span>
        </SecondSectionLinkContainer>
      </SecondSection>
    </Main>
  );
}
