import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (searchValue) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        setTimeout(() => {
            getGifs(searchValue)
                .then(gifs => setState({
                    data: gifs,
                    loading: false
                }));
        }, 2000);

    }, [searchValue]);

    return state;
}
