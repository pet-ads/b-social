import "./search.css";
import { IoSearch } from "react-icons/io5";
export default function Search() {
  return (
    <div className="searchArea">
      <div className="searchConteiner">
        <div className="conteiner">
          <div className="buttonConteiner">
            <button className="searchBtn" aria-label="Search Icon">
              <IoSearch className="searchIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
