import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx("container", styles.cover)}>
        <section className={clsx(styles["shooting-stars"])}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <img src="/img/turbo_light.svg" />
        <Heading as="h1" className="hero__title" style={{ marginBottom: 0 }}>
          <span style={{ position: "relative" }}>
            {siteConfig.title}
            <super
              style={{
                fontSize: "1rem",
                position: "absolute",
                top: ".5rem",
              }}
            >
              v0.2.7
            </super>
          </span>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Download
          </Link>
          &nbsp; &nbsp; &nbsp; &nbsp; */}
          <Link
            className="button button--primary button--lg"
            to="/docs/quick-start"
          >
            Press Start &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="A next-gen 2D game engine built for making games fast. We aim to make it possible for anyone to create a game in any genre in < 24h that can run on any platform or device.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
