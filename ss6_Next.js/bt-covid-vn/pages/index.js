import styles from '../styles/Home.module.css'
import axios from "axios"

export default function CovidList({covid}) {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <h1>Vietnam's COVID-19 Information</h1>
            </div>
            <main className={styles.main}>
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Date</th>
                        <th className={styles.th}>Confirmed</th>
                        <th className={styles.th}>Active</th>
                        <th className={styles.th}>Recovered</th>
                        <th className={styles.th}>Deaths</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        covid.map((list) => (
                        <tr className={styles.tr} key={list.Date}>
                            <td className={styles.td}>{list.Date}</td>
                            <td className={styles.td}>{list.Confirmed}</td>
                            <td className={styles.td}>{list.Active}</td>
                            <td className={styles.td}>{list.Recovered}</td>
                            <td className={styles.td}>{list.Deaths}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
export const getStaticProps = async () =>
{
    const res = await axios.get("http://localhost:8000/covid")
    console.log(res.data)
    return {
        props:{
            covid: res.data
        }
    }
}
