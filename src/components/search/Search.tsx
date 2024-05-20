import "./search.css";
import SearchResult from "./SearchResult";
import { IoSearch } from "react-icons/io5";
import useFilterSearch from "../../hooks/useFilterSearch";
import React, { useEffect, useRef, useState } from "react";
import CardProps from "../../Interfaces/CardProps";

interface CardContent{
  id: string;
  CardImg: string;
  CardTitle: string;
  CardText: string;
  bgColor: string;
}

interface Data {
  data: CardContent[];
  setIsCardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCard: React.Dispatch<React.SetStateAction<CardProps | null>>
}

export default function Search({ data, setIsCardModalOpen, setSelectedCard  }: Data) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchResult = useFilterSearch({ data, inputValue });

  useEffect(() => {
    if (isModalOpen) {
      inputRef.current?.focus();
    }
  });

  function OpenModal() {
    setModalOpen(true);
  }

  function closeModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((event.target as HTMLDivElement).id === "modal-background") setModalOpen(false);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="search-area">
        <div className="search-conteiner" onClick={OpenModal}>
          <div className="conteiner">
            <div className="button-conteiner">
              <button className="search-btn" aria-label="Search Icon">
                <IoSearch className="search-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div id="modal-background" onClick={closeModal}>
            <div className="modal">
              <div className="search-bar">
                <IoSearch className="search-icon-modal" />
                <input
                  type="text"
                  id="searchInput"
                  className="input"
                  placeholder="Search..."
                  value={inputValue}
                  onChange={handleInputChange}
                  ref={inputRef}
                />
              </div>
              {inputValue ? <SearchResult data={searchResult} setModalOpen={setModalOpen} setIsCardModalOpen={setIsCardModalOpen} setSelectedCard={setSelectedCard}/> : <></>}
              
            </div>
          </div>
        </>
      )}
    </>
  );
}
