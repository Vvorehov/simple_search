import React, { useState } from 'react';
import { sanitizeInput } from '../utils/sanitize';

interface SearchComponentProps {
    onSubmit: (input: string) => Promise<void>;
    isLoading: boolean;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSubmit, isLoading }) => {
    const [input, setInput] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const sanitized = sanitizeInput(input);
        if (!sanitized) return;
        await onSubmit(sanitized);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    id="search"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your search term"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className={`px-6 py-2 text-white rounded-md transition
                        ${isLoading || !input.trim() 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </div>
        </form>
    );
};

export default SearchComponent;