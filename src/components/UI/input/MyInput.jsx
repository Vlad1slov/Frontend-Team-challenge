import styles from "./MyInput.module.css";

const MyInput = () => {
    return (
        <input
            className={styles.input}
            placeholder="What are you looking for?"
        ></input>
    );
};

export default MyInput;
