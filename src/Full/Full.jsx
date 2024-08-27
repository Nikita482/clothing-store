import NewItem from "./NewItem/NewItem"
import Layout from "./Layout/Layout"
import Accessories from "./Accessories/Accessories"
import Fotter from "./fotter/fotter"

export default function Full(){
    return(
        <>
            <NewItem/>
            <Layout />
            <Accessories/>
            <Fotter/>
        </>
    )
}