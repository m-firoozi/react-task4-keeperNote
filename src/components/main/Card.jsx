import styles from "./card-style.module.css"
const Card=(props)=>{
    return(
       <>
       <div className={styles.border}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        </div>
       </> 
    )
}
export default Card;