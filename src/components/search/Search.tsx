// External Libraries
import { IoSearch } from "react-icons/io5"
import React, { useEffect, useRef, useState } from "react"

// Components
import SearchResult from "./searchResult"


// Hooks
import useFilterSearch from "../../hooks/useFilterSearch"

// Types
import CardProps from "../../interfaces/cardprops"


// Styles
import "./search.css"

interface CardContent{
  id: string
  cardImg: string
  bgColor: string
  cardText: string
  cardTitle: string
}

interface Props {
  data: CardContent[]
  setIsCardModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedCard: React.Dispatch<React.SetStateAction<CardProps | null>>
}

export default function Search({ data, setIsCardModalOpen, setSelectedCard }: Props) {
  // Refs
  const inputRef = useRef<HTMLInputElement>(null)

  // States
  const [inputValue, setInputValue] = useState("")
  const [isModalOpen, setModalOpen] = useState(false)

  // Hooks
   const searchResult = useFilterSearch({ data, inputValue })
 
  // Effects
  useEffect(() => {
    if (isModalOpen) {
      inputRef.current?.focus()
    }
  })

  // Functions
  function onSearchIconClick() {
    setModalOpen(true)
  }

  function closeModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((event.target as HTMLDivElement).id === "modal-background") setModalOpen(false)
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  return (
    <>
      <div className="search-area">
        <div className="search-conteiner" onClick={onSearchIconClick}>
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
                  ref={inputRef}
                  id="searchInput"
                  className="input"
                  value={inputValue}
                  placeholder="Search..."
                  onChange={handleInputChange}
                />
              </div>
              {inputValue ? <SearchResult data={searchResult} setModalOpen={setModalOpen} setIsCardModalOpen={setIsCardModalOpen} setSelectedCard={setSelectedCard}/> : <></>}
              
            </div>
          </div>
        </>
      )}
    </>
  )
}
