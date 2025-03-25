interface DisneyCharacter {
    id: number;
    name: string;
    movie: string;
    year: number;
}

const disneyCharacters: DisneyCharacter[] = [
    { id: 1, name: "Mickey Mouse", movie: "Steamboat Willie", year: 1928 },
    { id: 2, name: "Snow White", movie: "Snow White and the Seven Dwarfs", year: 1937 },
    { id: 3, name: "Cinderella", movie: "Cinderella", year: 1950 },
    { id: 4, name: "Ariel", movie: "The Little Mermaid", year: 1989 },
    { id: 5, name: "Simba", movie: "The Lion King", year: 1994 },
    { id: 6, name: "Belle", movie: "Beauty and the Beast", year: 1991 },
    { id: 7, name: "Aladdin", movie: "Aladdin", year: 1992 },
    { id: 8, name: "Mulan", movie: "Mulan", year: 1998 },
    { id: 9, name: "Elsa", movie: "Frozen", year: 2013 },
    { id: 10, name: "Moana", movie: "Moana", year: 2016 },
    { id: 11, name: "Peter Pan", movie: "Peter Pan", year: 1953 },
    { id: 12, name: "Buzz Lightyear", movie: "Toy Story", year: 1995 },
    { id: 13, name: "Woody", movie: "Toy Story", year: 1995 },
    { id: 14, name: "Stitch", movie: "Lilo & Stitch", year: 2002 },
    { id: 15, name: "Pocahontas", movie: "Pocahontas", year: 1995 },
    { id: 16, name: "Tiana", movie: "The Princess and the Frog", year: 2009 },
    { id: 17, name: "Donald Duck", movie: "The Wise Little Hen", year: 1934 },
    { id: 18, name: "Goofy", movie: "Mickey's Revue", year: 1932 },
    { id: 19, name: "Daisy Duck", movie: "Mr. Duck Steps Out", year: 1940 },
    { id: 20, name: "Bambi", movie: "Bambi", year: 1942 },
    { id: 21, name: "Minnie Mouse", movie: "Steamboat Willie", year: 1928 },
    { id: 22, name: "Jerry Mouse", movie: "The Cat Concerto", year: 1947 },
];

export const mockApiCall = async (input: string): Promise<DisneyCharacter[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (input.toLowerCase() === 'error') {
        throw new Error('Simulated error');
    }
    
    const filteredCharacters = disneyCharacters.filter(character => 
        character.name.toLowerCase().includes(input.toLowerCase()) ||
        character.movie.toLowerCase().includes(input.toLowerCase())
    );
    
    return filteredCharacters;
};

export type { DisneyCharacter };