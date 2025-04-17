import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setiImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages =  () => {
        setTimeout( async () => {
            const newImages = await getGifs(category);
            setiImages(newImages);
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        isLoading,
        images,
    }

}
