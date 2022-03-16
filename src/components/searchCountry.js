import { useState } from "react";

export const SearchCountry = ({ addNewCountry }) => {
    const [country, setCountry] = useState("");
    

    const onChange = (e) => {
        setCountry(e.target.value);
    };

    const onButton = () => {
        if(country === "") return;
        addNewCountry({ country: country });
        setCountry('');
    };

    return (
        <>
            <div className="flex container align-center">
                <input className="searchInput" onChange={onChange} />
                <button className="addButton" onClick={onButton}>
                    add
                </button>
            </div>

        </>
    );
};
