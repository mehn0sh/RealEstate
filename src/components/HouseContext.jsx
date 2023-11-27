import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";
export const HouseContext = createContext();
const HouseProvider = ({ children }) => {
  const [Housesdata, setHousesdata] = useState(housesData);

  const [country, setcountry] = useState("لیست کشور ها");
  const [countries, setcountries] = useState([]);

  const [property, setproperty] = useState("لیست انواع ملک");
  const [properties, setproperties] = useState([]);

  const [price, setprice] = useState(" لیست قیمت");

  const [loading, setloading] = useState(false);

  useEffect(() => {
    const allCountries = housesData.map((H) => H.country);
    let uniqueCountries = ["لیست کشور ها", ...new Set(allCountries)];
    setcountries(uniqueCountries);
  }, []);
  useEffect(() => {
    let allProperties = housesData.map((house) => house.type);
    let uniqueproperties = ["لیست انواع ملک", ...new Set(allProperties)];
    setproperties(uniqueproperties);
  }, []);
  const handleClick = () => {
    setloading(true)
    const isDefault = (str) => {
      return str.split(" ").includes("لیست");
    };
    let minPrice = parseInt(price.split(" ")[0]);
    let maxPrice = parseInt(price.split(" ")[2]);
    
    const newHouses = housesData.filter((house) => {
      let housePrice = parseInt(house.price);
      if (
        house.country == country &&
        house.type == property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if(isDefault(country)&&isDefault(price)&&isDefault(property)){
        return house
      }
      if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country==country
      }
      if(!isDefault(property)&&isDefault(country)&&isDefault(price)){
        return house.type==property
      }
      if(isDefault(country)&&isDefault(property)&&!isDefault(price))
      {
        if(housePrice<=maxPrice&& housePrice>=minPrice){
          return house
        }
      }
      if(!isDefault(country) && !isDefault(property)&&isDefault(price)){
        return house.country==country && house.type==property
      }
      if(!isDefault(country)&& !isDefault(price) && isDefault(property)){
        if(housePrice<=maxPrice&& housePrice>=minPrice){
          return house
        }
      }
      if(isDefault(country) && !isDefault(price) && !isDefault(property)){
        if(housePrice<=maxPrice&& housePrice>=minPrice){
          return house.type==property
        }
      }
    });
    setTimeout(()=>{
      if(newHouses.length<1){
        setHousesdata([])
      }else{
        setHousesdata(newHouses)
      }
      setloading(false)
    },1000)
  };
  return (
    <HouseContext.Provider
      value={{
        Housesdata,
        country,
        setcountry,
        countries,
        property,
        setproperty,
        properties,
        price,
        setprice,
        loading,
        setloading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseProvider;
