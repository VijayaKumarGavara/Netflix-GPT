import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { placeholdersList } from "../utils/constants";
import useGetGptMovieResults from "../hooks/useGetGptMovieResults";
import { toggleSearchLoading } from "../utils/gptSlice";


export default function GptSearchbar() {
  const [index, setIndex] = useState(0);
  let len = placeholdersList.length;
  const searchText = useRef();
  const dispatch=useDispatch();
  const getGptMovieResults = useGetGptMovieResults();
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % len);
    }, 10000);

    return () => clearInterval(timer);
  }, [len]);

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  function handleSearchButtonClick(e) {
    e.preventDefault();
    if(!searchText.current.value.trim()) return;
    dispatch(toggleSearchLoading())
    getGptMovieResults(searchText.current.value.trim());
  }
  return (
    <div className="bg-[rgb(20,20,20)] w-7/12 mx-auto rounded-lg p-4 mt-32 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
      <form action="" className="flex items-end gap-3">
        <textarea
          ref={searchText}
          onInput={handleInput}
          name="search-input"
          placeholder={placeholdersList[index]}
          required
          spellCheck
          autoFocus
          className="w-full bg-transparent text-white resize-none overflow-x-scroll scrollbar-hide outline-none border-none min-h-[52px] max-h-[180px] p-3"
        ></textarea>
        <button
          type="button"
          onClick={handleSearchButtonClick}
          className="
bg-red-600 hover:bg-red-700  text-white  px-6 py-3  rounded-xl  font-semibold  transition "
        >
          Search
        </button>
      </form>
    </div>
  );
}
