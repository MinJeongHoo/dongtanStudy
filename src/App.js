import AddSection from "./components/addSection/addSection";
import Header from "./components/header/header";
import styles from "./App.module.css";
import AllPage from "./components/allPage/allPage";
import ActivePage from "./components/activePage/activePage";
import CompletedPage from "./components/completedPage/completedPage";
import { btnState } from "./atom";
import { useRecoilValue } from "recoil";

function App() {
  const btnValue = useRecoilValue(btnState);
  return (
    <div className={styles.div}>
      <Header />
      {(btnValue === "all" && <AllPage />) ||
        (btnValue === "active" && <ActivePage />) ||
        (btnValue === "completed" && <CompletedPage />)}
    </div>
  );
}

export default App;
