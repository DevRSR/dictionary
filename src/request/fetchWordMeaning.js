export async function fetchWordMeaning(word) {

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if(!response.ok) throw new Error('word no found')
    
        const result = await response.json();
        return result;

    } catch (error) {
        
    }

}