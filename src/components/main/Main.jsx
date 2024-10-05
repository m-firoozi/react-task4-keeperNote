import Card from "./Card";
import styles from "./main-style.module.css";
import notes from "./notes"
const Main=()=>{
    const note=(item)=>{
        return(
        <Card
       title={item.title}
        content={item.content}
        />
        )
    }
    return(
        <>
        <div className={styles.display}>
        {notes.map(note)}
        </div>
        </>
    )
}
export default Main;