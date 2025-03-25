import React, { useState } from 'react';
import { mockApiCall, DisneyCharacter } from './services/api';
import SearchComponent from './components/SearchComponent';

const App: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState<DisneyCharacter[]>([]);

    const handleFormSubmit = async (input: string) => {
        try {
            setIsLoading(true);
            setError(null);
            const results = await mockApiCall(input);
            setCharacters(results);
        } catch (err) {
            setError('An error occurred while searching. Please try again.');
            setCharacters([]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Disney Characters Search</h1>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            <SearchComponent onSubmit={handleFormSubmit} isLoading={isLoading} />
            
            {/* Results Section */}
            <div className="mt-8">
                {characters.length > 0 ? (
                    <div className="grid gap-4">
                        {characters.map(character => (
                            <div key={character.id} className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold text-lg">{character.name}</h3>
                                <p className="text-gray-600">Movie: {character.movie}</p>
                                <p className="text-gray-500 text-sm">Year: {character.year}</p>
                            </div>
                        ))}
                    </div>
                ) : !isLoading && (
                    <p className="text-center text-gray-500">No characters found</p>
                )}
            </div>
        </div>
    );
};

export default App;