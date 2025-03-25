import React from "react";

interface CharacterListProps {
    characters: string[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
    return (
        <div className="mt-6">
            {characters.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No characters found</p>
            ) : (
                <ul className="space-y-2">
                    {characters.map((character, index) => (
                        <li
                            key={index}
                            className="p-4 bg-white rounded-lg shadow-sm border border-gray-100
                                     hover:shadow-md hover:border-blue-200 transition-all 
                                     duration-200 cursor-pointer flex items-center"
                        >
                            <span className="h-8 w-8 flex items-center justify-center 
                                         bg-blue-100 rounded-full mr-3 text-blue-500">
                                {character[0]}
                            </span>
                            <span className="text-gray-700">{character}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CharacterList;