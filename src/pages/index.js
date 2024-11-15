/*import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import React from 'react';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react';
/*
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
/*export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}*/

/*export default function Home() {
  return (
    <Layout
      title="Mouhamed Lamine LEYE - Curiculum Vitae (CV)"
      description="Curiculum Vitae (CV) de MLL, étudiant en Master - Sécurité des Systèmes d'Information">
      <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div style={{ color: 'blue' }} >
            <h1 color='blue'><u>Mon Curiculum Vitae (CV)</u></h1>
        </div>
        <img src="/img/ljr-picture.jpg" alt="Profile" style={{ borderRadius: '150%', width: '150px' }} />
        <h3>Mouhamed Lamine LEYE</h3>
          <p>Étudiant en Master - Sécurité des Systèmes d'Information.</p>
      </div>
    </Layout>

  );
}*/

// src/pages/index.js
import Layout from '@theme/Layout';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <Layout
      title="Mouhamed Lamine LEYE - Curriculum Vitae (CV)"
      description="Curriculum Vitae (CV) de MLL, étudiant en Master - Sécurité des Systèmes d'Information"
      link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRdUEdf+J7MWjUc3l5zzZ2+8IbRE5NP7b6Y6pg8rJ5" crossorigin="anonymous">

      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <br></br><br></br>
          <div style={{ color: 'blue' }}>
            <h1 style={styles.title}><u>Mon Curriculum Vitae en ligne</u></h1>
          </div>
          <img
            src="/img/ljr-picture.jpg"
            alt="Profile"
            style={styles.profileImage}
          />
          <h3>Mouhamed Lamine LEYE</h3>
          <p>Étudiant en Master - Sécurité des Systèmes d'Information</p>
        </div><br></br><br></br>

        <div className="animated-background">
        <div className="welcome-message">
          <h1>Bienvenue !!!</h1>
          <p className="subtitle-text" style={{ maxWidth: '500px', margin: 'auto' }}>
            Je me nomme Mouhamed Lamine LEYE, étudiant en Master I - Sécurité des Systèmes d'Information. Passionné par la cybersécurité et les systèmes
            d'information, découvrez mon parcours, mes compétences et mes expériences professionnelles.
          </p>
        </div>
        </div>


      </div>
    </Layout>
  );
}

const styles = {
  container: {
    perspective: '1000px', // Pour donner un effet 3D
    textAlign: 'center',
    padding: '2rem',
  },
  innerContainer: {
    display: 'inline-block',
    animation: 'rotate 30s infinite linear',
    transformStyle: 'preserve-3d', // Pour préserver la 3D
  },
  title: {
    color: 'blue',
  },
  profileImage: {
    borderRadius: '50%',
    width: '150px',
  },
};

// CSS pour l'animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`, styleSheet.cssRules.length);






