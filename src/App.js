import AddSection from "./components/addSection/addSection";
import Header from "./components/header/header";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.div}>
      <Header />
      <AddSection />
    </div>
  );
}

export default App;
