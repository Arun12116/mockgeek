import React, { useEffect, useState } from 'react'
import axios from "axios"
import Show from './Show';
const Home = () => {
    const [data, setData] = useState([]);
    // console.log(data);

    useEffect(_ => {
        axios.get("https://kontests.net/api/v1/all")
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
            })

    }, [])
    return (
        <>


            <div className="main-Container">
                <div className="main">
                    <h1>Coding Contest Calender</h1>

                </div>
                <div className="card-flex">
                    {data.map((cur, idx) => {
                        return <Show data={cur} key={idx} />

                    })}
                </div>

            </div>

        </>
    )
}

export default Home