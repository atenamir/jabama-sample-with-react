import React, { createContext, useEffect } from "react";
import { useState } from "react";
import data from "../data.js";

export const HomeContext = createContext();

function HomeContextProvider({ children }) {
  const [Data, setData] = useState(data);
  const [Type, setType] = useState("انتخاب نوع خانه");
  const [Types, setTypes] = useState([]);
  const [City, setCity] = useState("انتخاب مقصد");
  const [Cities, setCities] = useState([]);
  const [Price, setPrice] = useState("محدوده قیمت ");
  const [Prices, setPrices] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const myCities = Data.map((item) => {
      setLoading(false)
      return item.city;
    });
    const allCitis = ["مقاصد (همه)", ...new Set(myCities)];
    setCities(allCitis);
  }, []);
  // ===
  useEffect(() => {
    const myTypes = Data.map((type) => {
      return type.type;
    });

    const allTypes = ["تایپ ها (همه)", ...new Set(myTypes)];
    setTypes(allTypes);
  }, []);

  useEffect(() => {
    const myPrice = Data.map((prices) => {
      return prices.rent.toLocaleString();
    });

    const allPrice = [" قیمت ها (همه)", ...new Set(myPrice)];
    setPrices(allPrice);
  }, []);

  // === filtering options
  const searchOption = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.includes("(همه)");
    };

    const filterHome = data.filter((home) => {
      if (home.rent == Price && home.city == City && home.type == Type) {
        return home;
      }
      if (!isDefault(City) && !isDefault(Type) && !isDefault(Price)) {
        return home.city === City && home.type === Type && home.rent === Price;
      }
      if (isDefault(City) && isDefault(Type) && isDefault(Price)) {
        return home;
      }
      if (!isDefault(City) && isDefault(Type) && isDefault(Price)) {
        return home.city === City;
      }
      if (isDefault(City) && !isDefault(Type) && isDefault(Price)) {
        return home.type === Type;
      }
      if (isDefault(City) && isDefault(Type) && !isDefault(Price)) {
        return home.rent === Price;
      }
      if (!isDefault(City) && !isDefault(Type) && isDefault(Price)) {
        return home.city === City && home.type === Type;
      }
      if (!isDefault(City) && isDefault(Type) && !isDefault(Price)) {
        return home.city === City && home.rent === Price;
      }
      if (isDefault(City) && !isDefault(Type) && !isDefault(Price)) {
        return home.type === Type && home.rent === Price;
      }
    });
// for emulate the user's device
    setTimeout(() => {
      return (
        filterHome.length < 1 ? setData([]) : setData(filterHome),
        setLoading(false)
      );
    }, 3000);
  };

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
        Data,
        Loading,
        setLoading,
        searchOption,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;
