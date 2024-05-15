import { useEffect } from "react";

interface CardContentI {
    id: string;
    CardImg: string;
    CardTitle: string;
    CardText: string;
    bgColor: string;
  }

  interface filterSearchInterface {
    data: CardContentI[];
    inputValue: string;
  }


export default function useFilterSearch({data, inputValue}: filterSearchInterface): CardContentI[] {
    const filterResult = data.filter(card => card.CardTitle.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));
    return filterResult;
}