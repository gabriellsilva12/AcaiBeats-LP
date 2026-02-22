import SideBar from "../../components/SideBar";
import LogoHeader from "../../components/LogoHeader";
import styles from "./styles.module.css"

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <LogoHeader />
      <SideBar />
      {/* <AboutPage /> */}
    </div>
  );
}
