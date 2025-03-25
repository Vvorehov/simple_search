import React from "react";

interface SearchInputProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search Disney Characters..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-4 py-3 pl-10 text-gray-700 bg-white border 
                         border-gray-300 rounded-lg shadow-sm focus:outline-none 
                         focus:ring-2 focus:ring-blue-400 focus:border-transparent
                         transition duration-300 ease-in-out"
            />
            <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    );
};

export default SearchInput;