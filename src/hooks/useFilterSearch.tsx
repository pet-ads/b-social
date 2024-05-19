interface CardContent {
    id: string;
    CardImg: string;
    CardTitle: string;
    CardText: string;
    bgColor: string;
  }

  interface filterSearchInterface {
    data: CardContent[];
    inputValue: string;
  }


export default function useFilterSearch({data, inputValue}: filterSearchInterface): CardContent[] {
    const filterResult = data.filter(card => card.CardTitle.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));
    return filterResult;
}