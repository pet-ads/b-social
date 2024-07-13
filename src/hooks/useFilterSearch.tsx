interface CardContent {
    id: string
    cardImg: string
    bgColor: string
    cardText: string
    cardTitle: string
  }

  interface filterSearchInterface {
    inputValue: string
    data: CardContent[]
  }


export default function useFilterSearch({data, inputValue}: filterSearchInterface): CardContent[] {
    const filterResult = data.filter(card => card.cardTitle.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
    
    return filterResult
}