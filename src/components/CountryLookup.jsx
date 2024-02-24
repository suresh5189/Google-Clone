"use client";
import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState('India');

  useEffect(() => {
    const getCountry = async () => {
      console.log(process.env.NEXT_PUBLIC_IP_API_KEY)
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      // console.log(response)
      setCountry(response);
    };
    getCountry();
  }, []);

  return <div>{country}</div>;
}

