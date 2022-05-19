import { useState } from "react"

import { Header } from "./components/Header"
import { AddSearchValue } from "./components/AddSearchValue";
import { GifsGrid } from "./components/GifsGrid";

export const GifsFinderApp = () => {

    const [searchValues, setSearchValues] = useState(['Power Rangers']);

    return (

        <>
            <Header title="GifsFinderApp" />

            <main>
                <AddSearchValue setSearchValues={setSearchValues} />

                {
                    searchValues.map(searchValue => (
                        <GifsGrid
                            key={searchValue}
                            searchValue={searchValue}
                        />
                    ))
                }
            </main>

        </>

    )
}
