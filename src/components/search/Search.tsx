import React, { ReactNode, useEffect, useRef, useState } from "react";
import "./search.css";
import { IoSearch } from "react-icons/io5";
import useFilterSearch from "../../hooks/useFilterSearch";
import SearchResult from "./SearchResult";

interface CardContentI {
  id: string;
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
}

interface iData {
  data: CardContentI[];
}

export default function Search({data}: iData) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchResult = useFilterSearch({data, inputValue});

  useEffect( () => {
    if (isModalOpen) {
      inputRef.current?.focus();
    }
  })

  function OpenModal() {
      setModalOpen(true);
  }

  function closeModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((event.target as HTMLDivElement).id === 'modalBackground') 
      setModalOpen(false);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return ( 
    <>
      <div className="searchArea">
        <div className="searchConteiner" onClick={OpenModal}>
          <div className="conteiner">
            <div className="buttonConteiner">
              <button className="searchBtn" aria-label="Search Icon">
                <IoSearch className="searchIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
          <>
            <div id="modalBackground" onClick={closeModal}>
                <div className="modal">
                    <div className="searchBar">
                      <IoSearch className="searchIconModal" />
                      <input type="text" id="searchInput" className="input"
                        placeholder="Search..."
                        value={inputValue}
                        onChange={handleInputChange}
                        ref={inputRef}
                      />
                    </div>     
                    {inputValue ? 
                        <SearchResult data={searchResult}/>
                        :
                        <></>
                    } 
                       
                </div>
            </div>
          </>
        )}
    </>
  );
}
