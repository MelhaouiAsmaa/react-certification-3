import { useState, useEffect } from 'react';

export default function FilterDropdown({ options = [], labelKey = 'name', placeholder = 'Search...', valueChange }) {
    const [search, setSearch] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        // Update filteredOptions when props.options or search changes
        setFilteredOptions(
            options.filter(opt =>
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
        valueChange(option);  // Call the callback to return the full selected object
    }

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <input
                type="text"
                value={search}
                onChange={handleInputChange}
                onFocus={() => setShowDropdown(true)}
                placeholder={placeholder}
                style={{
                    width: '100%',
                    padding: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                }}
            />

            {showDropdown && filteredOptions.length > 0 && (
                <ul style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    border: '1px solid #ccc',
                    borderTop: 'none',
                    position: 'absolute',
                    width: '100%',
                    maxHeight: '150px',
                    overflowY: 'auto',
                    background: '#fff',
                    zIndex: 1
                }}>
                    {filteredOptions.map((option, index) => {
                        const matchIndex = option[labelKey].toLowerCase().indexOf(search.toLowerCase());
                        const matchLength = search.length;

                        if (matchIndex === -1) return null;

                        const before = option[labelKey].slice(0, matchIndex);
                        const match = option[labelKey].slice(matchIndex, matchIndex + matchLength);
                        const after = option[labelKey].slice(matchIndex + matchLength);

                        return (
                            <li
                                key={index}
                                onClick={() => handleSelect(option)}
                                style={{
                                    padding: '8px',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid #eee'
                                }}
                            >
                                {before}<strong>{match}</strong>{after}
                            </li>
                        );
                    })}
                </ul>
            )}

            {filteredOptions.length === 0 && search && (
                <div style={{
                    position: 'absolute',
                    background: '#fff',
                    border: '1px solid #ccc',
                    borderTop: 'none',
                    width: '100%',
                    padding: '8px',
                    zIndex: 1
                }}>
                    No results found
                </div>
            )}
        </div>
    );
}
