import { useState, useEffect, useRef } from "react";

export function highlightMatches(word, match) {
  const indexes = [];
  const lowerWord = word.toLowerCase();
  const lowerMatch = match.toLowerCase();
  const matchLength = lowerMatch.length;

  let index = lowerWord.indexOf(lowerMatch);

  if (matchLength === 0) return [word];

  // Collect all match indexes
  while (index !== -1) {
    indexes.push(index);
    index = lowerWord.indexOf(lowerMatch, index + 1);
  }

  const parts = [];
  let current = 0;

  indexes.forEach((matchIndex, i) => {
    if (matchIndex > current) parts.push(word.slice(current, matchIndex));

    parts.push(
      <strong key={i}>
        {word.slice(matchIndex, matchIndex + matchLength)}
      </strong>
    );

    current = matchIndex + matchLength;
  });

  if (current < word.length) parts.push(word.slice(current));

  return parts;
}

export default function FilterDropdown({
  options = [],
  labelKey = "name",
  placeholder = "Search...",
  valueChange,
}) {
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  //closing dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setShowDropdown(false);
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  //filterin options based on input search
  useEffect(() => {
    setFilteredOptions(
      options.filter((opt) =>
        opt[labelKey]?.toLowerCase().includes(search?.toLowerCase())
      )
    );
  }, [options, search, labelKey]);

  function handleInputChange(e) {
    const value = e.target.value;
    setSearch(value);
    setShowDropdown(true);
  }

  function handleSelect(option) {
    setSearch(option[labelKey]);
    setShowDropdown(false);
    valueChange(option); // Call the callback to return the full selected object
  }

  return (
    <div ref={dropdownRef} className="position-relative w-100">
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        placeholder={placeholder}
        className="form-control w-100"
      />

      {showDropdown && filteredOptions.length > 0 && (
        <ul
          className="list-unstyled position-absolute w-100 bg-white border border-top-0 overflow-auto"
          style={{ maxHeight: "200px"}}
        >
          {filteredOptions.map((option, index) => {
            return (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-2 py-2 border-bottom"
                style={{ cursor: "pointer"}}
              >
                {
                  highlightMatches(
                    option[labelKey],
                    search
                  ) /*highlight every occurrence of the matching part */
                }
              </li>
            );
          })}
        </ul>
      )}

      {filteredOptions.length === 0 && search && (
        <div
          className="position-absolute w-100 bg-white border border-top-0 p-2">
          No results found
        </div>
      )}
    </div>
  );
}
