export const getGifs = async (searchValue) => {

    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&limit=12&api_key=nuEDEhvBpRFk3AylDg9ivcYWsgUOusve`);
    const { data } = await res.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    return gifs;
}