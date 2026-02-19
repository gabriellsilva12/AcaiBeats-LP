import HeroSection from "../HeroSection";
import LogoHeader from "../LogoHeader";
import SideBar from "../SideBar";
import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <LogoHeader/>
      <SideBar/>
      <HeroSection/>
    </div>
  );
}
