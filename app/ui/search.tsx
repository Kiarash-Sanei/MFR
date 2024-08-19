import { useState } from "react";

export default function Search({
  placeholder,
  onSearch,
  toggleSearch,
}: {
  placeholder: string;
  onSearch: boolean;
  toggleSearch: () => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className={`relative ${onSearch ? "" : "hidden"}`}>
      <button className="absolute end-2.5 bottom-2.5 font-medium px-2 py-2">
        <a target="_blank" href={`/search/${inputValue}`}>
          <img
            src="https://www.svgrepo.com/show/422521/magnifier-search-zoom.svg"
            alt="magnifier"
            className="w-5"
          />
        </a>
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="block p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-black-500"
        placeholder={placeholder}
      />
    </div>
  );
}
