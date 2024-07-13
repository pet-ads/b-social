// External Libraries
import { useState, useEffect } from "react"

interface CardContent {
  id: string
  CardImg: string
  bgColor: string
  CardText: string
  CardTitle: string
}

interface LinkContent {
  Logo?: string
  Guia?: string
  Btn?: string
  mail?: string
  Help?: string
  aboutUs?: string
  Contact?: string
  Instagram?: string
}

interface NavigationText {
  Help: string
  Guide: string
  AboutUs: string
  Contact: string
}

interface HeaderText {
  h1: string,
  Part1: string
  Part2: string
  complete: string
}

interface HelpAreaText {
  title: string
  button: string
}

interface FooterText {
  PET: string
  IFSP: string
  Developed: string
  MobileIFSP: string
}

interface TextContent {
  Header: HeaderText
  Footer: FooterText
  HelpArea: HelpAreaText
  Navigation: NavigationText
}

interface FetchData {
  Links: LinkContent
  Texts: TextContent
  Card: CardContent[]
}

export default function useFetchData(pathToData: string): FetchData | null {
  // Constants
  const [data, setData] = useState<FetchData | null>(null)

  // Effects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(pathToData)
        
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        
        const jsonData = await response.json()
        setData(jsonData)
      } 
      catch (error) {
        console.error("Não foi possível encontrar os dados")
      }
    }
    
    fetchData()
  }, [pathToData])

  return data
}
