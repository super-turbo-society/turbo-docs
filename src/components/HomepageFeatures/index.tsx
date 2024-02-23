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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
