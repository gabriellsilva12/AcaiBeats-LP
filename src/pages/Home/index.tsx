import HeroSection from "../../components/HeroSection";
import LogoHeader from "../../components/LogoHeader";
import SideBar from "../../components/SideBar";
import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <LogoHeader/>
      <HeroSection/>
      <SideBar/>
    </div>
  );
}
