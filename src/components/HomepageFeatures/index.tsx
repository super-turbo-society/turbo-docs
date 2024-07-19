import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Beginner Friendly",
    Svg: require("@site/static/img/beginner_friendly.svg").default,
    description: (
      <>
        Turbo was designed from the ground up to help you make 2D games quickly.
        Our <strong>live-coding Rust runtime</strong>,{" "}
        <strong>GPT gamedev assistant</strong>, and{" "}
        <strong>collection of demos</strong> will help you get started.
      </>
    ),
  },
  {
    title: "Cross-Platform",
    Svg: require("@site/static/img/cross_platform.svg").default,
    description: (
      <>
        Turbo lets you focus on your game while do the dirty work of getting it
        to run on any device. You can easily{" "}
        <strong>publish your games as progressive web apps</strong> or{" "}
        <strong>native executables</strong>.
      </>
    ),
  },
  {
    title: "Solana Superpowers",
    Svg: require("@site/static/img/update_instantly.svg").default,
    description: (
      <>
        Want to make an on-chain game? We got you! Read and write data to the
        blockchain through the SDK's <strong>Solana RPC APIs</strong>. Turbo
        games can <strong>connect to Solana wallets</strong> in the browser.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={styles.stickyScrollContainer}>
      <section className={styles.heroContainer}>
        <div className={styles.navbar}>
          <div>
            <img
              src="motion-t.svg"
              style={{ height: 30 }}
              alt="Turbo 't' icon"
            />
          </div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <a
              href="https://github.com/super-turbo-society/"
              target="_blank"
              className={styles.navbarLink}
              style={{ display: "flex", alignItems: "center", marginRight: 20 }}
            >
              <img
                src="github-logo.svg"
                style={{ height: 24 }}
                alt="Turbo 't' icon"
              />
              <span>&nbsp; Github</span>
            </a>
            <a
              href="https://discord.gg/Xb3tgSZGgD"
              target="_blank"
              className={styles.navbarLink}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <img
                src="discord-logo.svg"
                style={{ height: 24 }}
                alt="Turbo 't' icon"
              />
              <span>&nbsp; Discord</span>
            </a>
            <a
              href="https://twitter.com/makegamesfast"
              target="_blank"
              className={styles.navbarLink}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <img
                src="x-logo.svg"
                style={{ height: 24 }}
                alt="Turbo 't' icon"
              />
              <span>&nbsp; Social</span>
            </a>
          </div>
        </div>
        <div>
          <img
            src="turbo-wordmark.png"
            alt="turbo logo"
            style={{
              display: "flex",
              imageRendering: "pixelated",
              mixBlendMode: "plus-lighter",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 225,
              maxHeight: 258,
              padding: "0 30px",
            }}
          />
        </div>
        <a href="/docs/quick-start" className={styles.startButton}>
          Press Start
        </a>
        <sup className={styles.versionNumber}>v0.4.0</sup>
      </section>
      <section id="features" className={styles.featuresContainer}>
        <img src="pointer-down.svg" style={{ width: 64 }} />
        <p className={styles.summary}>
          Turbo is built specifically for making low-res,{" "}
          <span className={styles.silkscreen}>sprite-based</span> 2D games as
          fast as possible.
        </p>
        <ul className={styles.features}>
          <li>
            <div className={styles.featureImageContainer}>
              <img
                src="beginner-friendly.svg"
                alt="Two lil guys hanging. One is on a laptop. The other is watching from atop a stack of books."
              />
            </div>
            <div className={styles.featureText}>
              <h3>Beginner Friendly</h3>
              <p>
                Turbo was designed from the ground up to help you make 2D games
                quickly. Our live-coding Rust runtime, GPT gamedev assistant,
                and collection of demos will help you get started.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.featureText}>
              <h3>Cross Platform</h3>
              <p>
                Turbo lets you focus on your game while do the dirty work of
                getting it to run on any device. You can easily publish your
                games as progressive web apps or native executables.
              </p>
            </div>
            <div className={styles.featureImageContainer}>
              <img
                src="cross-platform.svg"
                alt="A Pacman ghost-looking dude holding a joystick controller next to a large tv with a pixel smiley face."
              />
            </div>
          </li>
          <li>
            <div className={styles.featureImageContainer}>
              <img
                src="solana-superpowers.svg"
                alt="Three different glasses of beer"
              />
            </div>
            <div className={styles.featureText}>
              <h3>Solana Superpowers</h3>
              <p>
                Want to make an on-chain game? We got you! Read and write data
                to the blockchain through the SDK's Solana RPC APIs. Turbo games
                can connect to Solana wallets in the browser.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.callToActionContainer}>
        <div />
        <p>
          Start <span>Building</span> with Turbo. Create a game that can run on
          any <span>platform</span> or <span>device</span> now.
        </p>
        <a href="/docs/quick-start" className={styles.startButtonInverted}>
          Press Start
        </a>
      </section>
      <section className={styles.footerContainer}>
        <div className={styles.innerGrid}>
          <div className={styles.logoContainer}>
            <img
              src="motion-t.svg"
              style={{ width: 300 }}
              alt="Turbo 't' icon"
            />
          </div>
          <div className={styles.listGrid}>
            <div>
              <h3>Docs</h3>
              <ul>
                <li>
                  <a href="/docs/introduction">Introduction</a>
                </li>
                <li>
                  <a href="/docs/quick-start">Quick Start</a>
                </li>
                <li>
                  <a href="/docs/tutorials">Tutorials</a>
                </li>
                <li>
                  <a href="/docs/reference">Reference</a>
                </li>
                <li>
                  <a href="/docs/how-to">How to</a>
                </li>
                <li>
                  <a href="/docs/resources">Resources</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Community</h3>
              <ul>
                <li>
                  <a href="https://discord.gg/Xb3tgSZGgD" target="_blank">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/makegamesfast" target="_blank">
                    Twitter
                  </a>
                </li>
              </ul>
              <h3>More</h3>
              <ul>
                <li>
                  <a
                    href="https://github.com/super-turbo-society/"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4>Make Games Fast</h4>
          <p>Copyright © 2024 TURBO.</p>
        </div>
      </section>
    </div>
  );
}
