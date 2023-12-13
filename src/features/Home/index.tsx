"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import {
  ArrowRightOutlined,
  PauseOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import Solidproof from "@/assets/solidproof.png";
import Dextools from "@/assets/dextools.png";
import Dexscreener from "@/assets/dexscreener.png";
import Uniswap from "@/assets/uniswap.png";

import "./style.css";

interface Props {}

const contractAddress = process.env.NEXT_PUBLIC_VENTURA_CONTRACT_ADDRESS ?? "-";
const pairAddress = process.env.NEXT_PUBLIC_VENTURA_CONTRACT_ADDRESS ?? "-";

const Home: React.FC<Props> = () => {
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  const visionRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisionVisible(entry.isIntersecting);
    });

    observer.observe(visionRef.current as HTMLDivElement);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsFeaturesVisible(entry.isIntersecting);
    });

    observer.observe(featuresRef.current as HTMLDivElement);
  }, []);

  return (
    <div className="homepage-container">
      <div id="welcome" className="h-10" />
      <div className="w-full">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 flex items-baseline xs:text-xl">
          <span className="mr-1">
            <PauseOutlined
              className="text-green-500 animate-pulse"
              style={{ fontSize: "1.25em" }}
            />
          </span>
          EMBRACING A PARADIGM SHIFT IN DIGITAL INNOVATION
        </div>
        <div className="h-6" />
        <div
          className={`w-full sm:w-4/5 lg:w-2/3 text-xl xs:text-3xl sm:text-4xl font-extrabold animate-typingBasic`}
        >
          Ventura Chain revolutionizes transactions with a streamlined,
          accessible blockchain fostering decentralization and inclusivity.
        </div>
        <div className="mt-4 text-sm sm:text-base">{contractAddress}</div>

        <Button
          rightIcon={<SearchOutlined />}
          className="mt-6 text-white bg-lush-green hover:bg-forest-green active:bg-forest-green focus:bg-forest-green"
        >
          Explore
        </Button>
      </div>
      <div className="h-16 sm:h-24" />

      <div id="about" className="h-20 sm:h-24" />
      <h1
        ref={visionRef}
        className={`vision-title ${
          isVisionVisible && "animate-slideInTopBasic"
        }`}
      >
        Our Vision
      </h1>
      <div className="w-full md:w-10/12 lg:w-2/3 xl:w-1/2 text-lg xs:text-xl sm:text-2xl font-bold mt-3">
        By leveraging a decentralized framework, Ventura aims to dismantle the
        hierarchies of control that traditionally govern societies. Ventura
        envisions a future where transparency is not just a feature but a
        fundamental principle guiding interactions.
      </div>

      <div className="h-20 lg:h-24" />
      <div className="w-full sm:w-3/4 flex flex-wrap justify-between items-center relative px-2 mx-auto">
        <Link
          href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[22.5%] my-2 sm:my-0 h-16"
        >
          <Image
            src={Uniswap}
            alt="uniswap"
            className="object-contain w-full h-full"
          />
        </Link>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[22.5%] mb-2 sm:mb-0 h-16"
        >
          <Image
            src={Solidproof}
            alt="solidproof"
            className="object-contain w-full h-full"
          />
        </Link>
        <Link
          href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[22.5%] my-2 sm:my-0 h-[20vw] xs:h-[15vw] sm:h-full"
        >
          <Image
            src={Dextools}
            alt="dextools"
            className="object-contain w-full h-full"
          />
        </Link>
        <Link
          href={`https://dexscreener.com/ethereum/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[22.5%] h-20"
        >
          <Image
            src={Dexscreener}
            alt="dextools"
            className="object-contain w-full h-full"
          />
        </Link>
      </div>

      <div id="features" className="h-20 sm:h-24" />
      <h1
        ref={featuresRef}
        className={`features-title ${
          isFeaturesVisible && "animate-slideInTopBasic"
        }`}
      >
        EXPERIENCE VENTURA CHAIN: A JOURNEY THROUGH INNOVATIVE FEATURES
      </h1>
      <div className="w-full md:w-11/12 flex flex-wrap justify-between mx-auto my-10">
        <Card className="bg-transparent border border-white w-full sm:w-[47.5%] xl:w-[23.5%] mb-3 xl:mb-0">
          <CardHeader className="text-green-500  font-semibold text-lg sm:text-2xl">
            Ventura Testnet
          </CardHeader>
          <CardBody className="text-white pt-0">
            In Ventura's Testnet, the Proof of Authority (PoA) consensus
            mechanism stands as the backbone, ensuring the network's reliability
            and performance. This PoA-based Testnet offers a trusted and
            efficient environment for testing and validating blockchain
            functionalities.
            {/* With designated authorities validating
            transactions, Ventura's Testnet maintains stability, allowing
            developers and users to experiment, refine, and innovate within a
            secure and controlled ecosystem */}
          </CardBody>
          <CardFooter className="pt-0">
            <Link
              href="https://explorer.ventura-chain.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                rightIcon={<ArrowRightOutlined />}
                className="text-white bg-lush-green hover:bg-forest-green active:bg-forest-green focus:bg-forest-green"
              >
                Let's go!
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-transparent border border-white w-full sm:w-[47.5%] xl:w-[23.5%] mb-3 xl:mb-0">
          <CardHeader className="text-green-500  font-semibold text-lg sm:text-2xl">
            Ventura Dex Swap
          </CardHeader>
          <CardBody className="text-white pt-0">
            The Ventura DEX Swap introduces a seamless and secure decentralized
            exchange within the Ventura Chain ecosystem. Powered by cutting-edge
            technology, this innovative feature enables users to effortlessly
            swap various digital assets with enhanced privacy and efficiency.
            {/* Experience swift transactions, transparent processes, and greater
            control over your assets, all within the Ventura DEX Swap
            environment */}
          </CardBody>
          <CardFooter className="pt-0">
            <Link
              href="https://swap.ventura-chain.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                rightIcon={<ArrowRightOutlined />}
                className="text-white bg-lush-green hover:bg-forest-green active:bg-forest-green focus:bg-forest-green"
              >
                Let's go!
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-transparent border border-white w-full sm:w-[47.5%] xl:w-[23.5%] mb-3 xl:mb-0">
          <CardHeader className="text-green-500  font-semibold text-lg sm:text-2xl">
            Ventura Audit Tools
          </CardHeader>
          <CardBody className="text-white pt-0">
            Ventura's blockchain audit tools and token scanners serve as vital
            instruments for ensuring transparency, security, and reliability
            within the blockchain ecosystem. These tools enable comprehensive
            audits and verifications of smart contracts, transactions, and
            tokens circulating within the Ventura Chain.
            {/* Offering real-time
            insights and analysis, Ventura's audit tools and scanners empower
            users with the ability to validate and secure their assets,
            providing a robust layer of assurance and trust in the decentralized
            environment */}
          </CardBody>
          <CardFooter className="pt-0">
            <Link
              href="https://audit.ventura-chain.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                rightIcon={<ArrowRightOutlined />}
                className="text-white bg-lush-green hover:bg-forest-green active:bg-forest-green focus:bg-forest-green"
              >
                Let's go!
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-transparent border border-white w-full sm:w-[47.5%] xl:w-[23.5%] mb-3 xl:mb-0">
          <CardHeader className="text-green-500  font-semibold text-lg sm:text-2xl">
            Ventura Mainnet
          </CardHeader>
          <CardBody className="text-white pt-0">
            In Ventura's Mainnet, the Proof of Authority (PoA) consensus
            mechanism continues to be the foundation, ensuring the network's
            robustness and stability. Governed by designated authorities to
            validate transactions, the PoA-based Mainnet maintains efficiency
            and security, facilitating swift and secure transactions while
            upholding network integrity.
            {/* This PoA consensus model on Ventura's
            Mainnet fosters a reliable and predictable environment for users to
            engage in secure transactions and decentralized applications */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              rightIcon={<ArrowRightOutlined />}
              className="text-white bg-lush-green hover:bg-forest-green active:bg-forest-green focus:bg-forest-green disabled:forest-green"
            >
              Let's go!
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Home;

// Ventura Chain, a transformative force in the digital landscape, redefines societal transactions by simplifying asset tokenization. Rooted in decentralization, transparency, and inclusivity, Ventura envisions a future where coding expertise is unnecessary for users to engage with its innovative blockchain platform
