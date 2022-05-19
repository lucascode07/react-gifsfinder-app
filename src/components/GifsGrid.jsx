import { GifsGridItem } from "./GifsGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifsGrid = ({ searchValue }) => {

    const { data: gifs, loading } = useFetchGifs(searchValue);

    return (

        <>
            <h3>{searchValue}</h3>
            <div className="gifs__grid">

                { loading && 'Loading...' }

                {
                    gifs.map(gif => (
                        <GifsGridItem
                            key={gif.id}
                            {...gif}
                        />
                    ))
                }

            </div>
        </>

    )
}
