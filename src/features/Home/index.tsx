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

import { useIsMounted } from "@/hooks/useIsMounted";

import Solidproof from "@/assets/solidproof.png";
import Dextools from "@/assets/dextools.png";
import Dexscreener from "@/assets/dexscreener.png";
import Uniswap from "@/assets/uniswap.png";

import "./style.css";

interface Props {}

const contractAddress = "GizMkhTQzVhicwbmPHLfmrWesg3c4acqbxFyjdfFpump";
// const pairAddress = "0x1e053b6d2f0a578505bfd8bfe344295a9a08bbd2";

const Home: React.FC<Props> = () => {
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  const visionRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsVisionVisible(entry.isIntersecting);
      });

      observer.observe(visionRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsFeaturesVisible(entry.isIntersecting);
      });

      observer.observe(featuresRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

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
          Ventura DAO transforms digital interactions by combining advanced AI
          with a decentralized framework, promoting adaptability, user-centric
          functionality, and inclusivity
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
        Driven by innovation and inclusivity, we aim to bridge the gap between
        human and digital communication, enabling smarter, more personalized
        engagements. Through adaptability and continuous improvement, Ventura
        DAO seeks to lead the future of conversational AI, making it accessible
        to all.
      </div>

      {/* <div className="h-20 lg:h-24" />
      <div className="w-full sm:w-3/4 flex flex-wrap justify-between items-center relative px-2 mx-auto">
        <Link
          href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[30%] my-2 sm:my-0 h-16"
        >
          <Image
            src={Uniswap}
            alt="uniswap"
            className="object-contain w-full h-full"
          />
        </Link>
        <Link
          href="https://app.solidproof.io/projects/ventura"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[30%] mb-2 sm:mb-0 h-16"
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
          className="w-full sm:w-[30%] my-2 sm:my-0 h-[20vw] xs:h-[15vw] sm:h-full"
        >
          <Image
            src={Dextools}
            alt="dextools"
            className="object-contain w-full h-full"
          />
        </Link>
      </div> */}

      <div id="features" className="h-20 sm:h-24" />
      <h1
        ref={featuresRef}
        className={`features-title ${
          isFeaturesVisible && "animate-slideInTopBasic"
        }`}
      >
        Experience Ventura DAO: Redefining Conversational AI Through Innovative
        Features
      </h1>

      <div className="my-10" />
      <h1
        ref={visionRef}
        className={`vision-title text-center ${
          isVisionVisible && "animate-slideInTopBasic"
        }`}
      >
        Conversational Intelligence Redefined
      </h1>
      <div className="w-full md:w-10/12 lg:w-2/3 xl:w-1/2 text-lg xs:text-xl sm:text-2xl font-bold mt-3 mx-auto text-center">
        A conceptual tool designed to elevate user interactions through advanced
        conversational AI. Whether integrated into products, platforms, or
        services, this feature harnesses AI to deliver seamless communication,
        intelligent automation, and unmatched support
      </div>
      {/* <div className="w-full md:w-11/12 flex flex-wrap justify-between mx-auto my-10">
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
                Learn more!
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-transparent border border-white w-full sm:w-[47.5%] xl:w-[23.5%] mb-3 xl:mb-0">
          <CardHeader className="text-green-500  font-semibold text-lg sm:text-2xl">
            Ventura Swap
          </CardHeader>
          <CardBody className="text-white pt-0">
            The Ventura Testnet Swap introduces a seamless and secure exchange
            mechanism within the Ventura Chain ecosystem. Utilizing advanced
            technology, this innovative feature allows users to effortlessly
            swap various digital assets in the testnet environment, ensuring
            enhanced privacy and efficiency during the testing phase.
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
                Learn more!
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
                Learn more!
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
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              rightIcon={<ArrowRightOutlined />}
              className="text-white bg-lush-green hover:bg-forest-green active:bg-forest-green focus:bg-forest-green disabled:forest-green"
            >
              Learn more!
            </Button>
          </CardFooter>
        </Card>
      </div> */}
      <div className="h-20 sm:h-24" />
    </div>
  );
};

export default Home;

// Ventura Chain, a transformative force in the digital landscape, redefines societal transactions by simplifying asset tokenization. Rooted in decentralization, transparency, and inclusivity, Ventura envisions a future where coding expertise is unnecessary for users to engage with its innovative blockchain platform
