import { useEffect, useState } from "react";
import { searchGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
     
    const [gifImages, setGifImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // obtenemos y almacenamos todas las imagenes por categoria
    const getImages = async () => {
        const newGifsByCategory = await searchGif(category);
        setGifImages(newGifsByCategory);
        setIsLoading(false);
    }

    // mediante useEffect() obtenemos la categoría ingresada y npo renderizamos todo nuevamente.
    useEffect( () => {
        getImages();
    }, [ ])

    return {
        images: gifImages,
        isLoading: isLoading
    }
}
