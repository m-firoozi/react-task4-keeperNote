import Card from "./Card";
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
        {notes.map(note)}
        </>
    )
}
export default Main;