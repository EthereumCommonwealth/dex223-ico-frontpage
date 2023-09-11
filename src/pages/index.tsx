import Head from 'next/head';
import { useEffect, useState } from "react";
import NewBanner from "../components/NewBanner";
import Header from "../components/sections/Header";
import EcosystemProblems from "../components/EcosystemProblems";
import Philosophy from "../components/sections/Philosophy";
import Innovation from "../components/sections/Innovation";
import Tokenomics from "../components/sections/Tokenomics";
import InfoSection from "../components/sections/InfoSection";
import Competitors from "../components/sections/Competitors";
import BuildingTrust from "../components/sections/BuildingTrust";
import Fight from "../components/sections/Fight";
import MeetTheTeam from "../components/sections/MeetTheTeam";
import ContactUs from "../components/sections/ContactUs";
import Spacer from "../components/atoms/Spacer";
import Footer from "../components/sections/Footer";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if(!hasMounted) {
    return;
  }

  return (
    <>
      <Head>
        <title>ERC223 ICO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NewBanner />
      <EcosystemProblems />
      <Spacer height={40} />
      <Philosophy />
      <Spacer height={40} />
      <Innovation />
      <Spacer height={40} />
      <Tokenomics />
      <Spacer height={40} />
      <InfoSection />
      <Spacer height={40} />
      <Competitors />
      <Spacer height={40} />
      <BuildingTrust />
      <Spacer height={40} />
      <Fight />
      <Spacer height={40} />
      <MeetTheTeam />
      <Spacer height={40} />
      <ContactUs />
      <Spacer height={240} />
      {/*<PastAchievement />*/}
      {/*<Spacer height={240} />*/}
      {/*<div className={clsx(styles.gradientBlocks, "container")}>*/}
      {/*  <div className={styles.gradientBlock} />*/}
      {/*  <div className={styles.bottomGradients}>*/}
      {/*    <div className={styles.gradientBlock2}>*/}
      {/*      <div className={styles.greenGradient} />*/}
      {/*      <div className={styles.purpleGradient} />*/}
      {/*      <div className={styles.greenGradient} />*/}
      {/*      <div className={styles.purpleGradient} />*/}
      {/*      <div className={styles.greenGradient} />*/}
      {/*      <div className={styles.purpleGradient} />*/}
      {/*    </div>*/}
      {/*    <div className={styles.gradientBlock3} />*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<Spacer height={60} />*/}
      {/*<FAQ />*/}
      {/*<Spacer height={240} />*/}
      <Footer />
    </>
  )
}
