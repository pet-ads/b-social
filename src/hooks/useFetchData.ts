// External Libraries
import { useState, useEffect } from "react"

interface CardContent {
  id: string
  cardImg: string
  bgColor: string
  cardText: string
  cardTitle: string
}

interface LinkContent {
  logo?: string
  guia?: string
  btn?: string
  mail?: string
  help?: string
  aboutUs?: string
  contact?: string
  instagram?: string
}

interface NavigationText {
  help: string
  guide: string
  aboutUs: string
  contact: string
}

interface HeaderText {
  h1: string,
  part1: string
  part2: string
  complete: string
}

interface HelpAreaText {
  title: string
  button: string
}

interface FooterText {
  pet: string
  ifsp: string
  developed: string
  mobileIFSP: string
}

interface TextContent {
  header: HeaderText
  footer: FooterText
  helpArea: HelpAreaText
  navigation: NavigationText
}

interface FetchData {
  links: LinkContent
  texts: TextContent
  card: CardContent[]
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
