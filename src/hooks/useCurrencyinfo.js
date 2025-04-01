import { useEffect, useState } from "react";
const useCurrencyInfo = (fromCurrency , toCurrency)=>{

    const [conversionRate , setconversionRate] = useState()

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await fetch(`https://api.fxratesapi.com/convert?from=${fromCurrency}&to=${toCurrency}&places=5`,
                    {
                        method:'GET',
                    }
                );

                const data = await response.json();
                setconversionRate(data.result)
            } 
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [fromCurrency, toCurrency]);
    
    return conversionRate;
}

export default useCurrencyInfo;
