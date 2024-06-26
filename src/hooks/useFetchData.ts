import { useState, useEffect } from "react";

interface CardContent {
  id: string;
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
}

interface LinkContent {
  Logo?: string;
  Guia?: string;
  aboutUs?: string;
  Contact?: string;
  Help?: string;
  Btn?: string;
  Instagram?: string;
  mail?: string;
}

interface NavigationText {
  Guide: string;
  AboutUs: string;
  Contact: string;
  Help: string;
}

interface HeaderText {
  h1: string,
  complete: string;
  Part1: string;
  Part2: string;
}

interface HelpAreaText {
  title: string;
  button: string;
}

interface FooterText {
  Developed: string;
  PET: string;
  MobileIFSP: string;
  IFSP: string;
}

interface TextContent {
  Navigation: NavigationText;
  Header: HeaderText;
  HelpArea: HelpAreaText;
  Footer: FooterText;
}

interface FetchData {
  Card: CardContent[];
  Links: LinkContent;
  Texts: TextContent;
}

export default function useFetchData(pathToData: string): FetchData | null {
  const [data, setData] = useState<FetchData | null>(null);

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
        console.error("Não foi possível encontrar os dados");
      }
    };
    fetchData();
  }, [pathToData]);

  return data;
}
