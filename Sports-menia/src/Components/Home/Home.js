import React, { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4328&s=2014-2015').then(res=>res.json()).then(data=>console.log("data")).catch(error=>console.log(error))
     },[])
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;