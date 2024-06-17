import Button from "./button";
import styles from "./app.module.css";
function App() {
  return (
    <div>
      <h1 className={styles.title}> Welcome Back</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
