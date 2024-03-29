import styles from './STYLES/home.module.css'

import Showcase from './COMPONENTS/Showcase';
import Footer from './COMPONENTS/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Showcase />
      <Footer />
    </main>
  );
}
