import React, { createContext, useEffect } from "react";
import { useState } from "react";
import data from "../data.js";

export   const HomeContext = createContext();

function HomeContextProvider({ children }) {

  const [Data, setData] = useState(data);
  const [Type, setType] = useState("انتخاب نوع خانه");
  const [Types, setTypes] = useState([]);
  const [City, setCity] = useState("انتخاب مقصد");
  const [Cities, setCities] = useState([]);
  const [Price, setPrice] = useState("محدوده قیمت ");
  const [Prices, setPrices] = useState([]);


  useEffect(() => {
   const myCities =  Data.map((item) => {
      return item.city;
    });
    const allCitis = ['تمامی مقاصد' , ... new Set(myCities)]
    setCities(allCitis)
  }, []);
// ===
  useEffect(()=>{
    const myTypes = Data.map(type =>{
        return type.type
    })

    const allTypes = ['تمامی تایپ ها' , ...new Set(myTypes)]
    setTypes(allTypes)
  } , [])

  
  useEffect(()=>{
    const myPrice = Data.map(prices =>{
      return prices.rent.toLocaleString()
    })

    const allPrice = ['تمامی قیمت ها' , ...new Set(myPrice)]
    setPrices(allPrice)
  } , [])
  return (
    <HomeContext.Provider
      value={{
       Type,
       Types,
        City,
        Cities,
        Prices,
        Price,
        setPrice,
        setPrice,
        setCities,
        setCity,
        setType,
        setTypes,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;
