/**
 * Busqueda de gif mediante termino - Utiliza fre API de sitio https://api.giphy.com
 * code API - iHVfdasChztoHkt5LrF1C9G9L4173727 (18.08.2022)
 */
const apiKey = 'iHVfdasChztoHkt5LrF1C9G9L4173727';

export const searchGif = async (category) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=10`;
    const resp = await fetch(apiUrl);
    const { data } = await resp.json();

    const searchGifs = data.map( (value) =>({
        id: value.id,
        title: value.title,
        url: value.images.downsized_medium.url
    }));
    
    return searchGifs;
}