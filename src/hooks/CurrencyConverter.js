// import {useEffect, useState} from "react"
// function useCurrencyConverter(currency){
//     let [data,setData]=useState({})
//     useEffect(()=>
//         fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setData(res[currency])),
//     [currency,])
//     console.log("Fetched data",data);
//     return data;
// }
// export default useCurrencyConverter;
import { useEffect, useState } from "react";

const useCurrencyConverter = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://open.er-api.com/v6/latest/${currency}`
                );
                if (!response.ok) throw new Error("Failed to fetch data");
                const result = await response.json();
                setData(result["rates"] || {}); // Avoid undefined values
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchData();
    }, [currency]); // Dependency array ensures re-fetching when `currency` changes

    console.log("Fetched data:", data); // Debugging

    return data;
};

export default useCurrencyConverter;
