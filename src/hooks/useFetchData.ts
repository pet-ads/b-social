import { useState, useEffect } from "react";

interface CardContentI {
  id: string;
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
}

export default function useFetchData(pathToData: string, selectPath: string): CardContentI[] {
  const [data, setData] = useState<CardContentI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(pathToData);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Não foi possível encotrar os dados");
      }
    };
    fetchData();
  }, [pathToData, selectPath]);

  return data;
}
