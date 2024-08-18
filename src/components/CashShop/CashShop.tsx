import { useState } from "react"
import styles from "./cashShop.module.css"
import type { Player } from "../../entities/Player"

type Props = {
    player : Player
}
 


const CashShop = ({player}: Props) => {
    const [section, setSection] = useState<"attack" | "defense" | "utility">("attack")
    return (
        <aside className={styles.window} >
            <div className={styles.wrapper}>
                <button type="button">Damage</button>
                <button type="button">Attack speed</button>
                <button type="button">Crit chance</button>
                <button type="button">Crit damage</button>
                <button type="button">Range</button>
                <button type="button">Dmg/Meter</button>
            </div>
            {/* <div className="wrapper">
                <button type="button">Health</button>
                <button type="button">Def%</button>
                <button type="button">Abs. Def</button>
                <button type="button">Health Regen</button>
            </div>
            <div className="wrapper">
                <button type="button">Gold bonus</button>
                <button type="button">Coin bonus</button>
                <button type="button">Gold per wave</button>
                <button type="button">Coin per wave</button>
            </div> */}

        </aside>
    )
}

export default CashShop