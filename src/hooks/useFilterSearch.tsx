interface CardContent {
    id: string
    CardImg: string
    bgColor: string
    CardText: string
    CardTitle: string
  }

  interface filterSearchInterface {
    inputValue: string
    data: CardContent[]
  }


export default function useFilterSearch({data, inputValue}: filterSearchInterface): CardContent[] {
    const filterResult = data.filter(card => card.CardTitle.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
    
    return filterResult
}