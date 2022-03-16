import axios from "axios";

export const CountryDetails = ({ country, setSelectedCountry }) => {
    const onClick = () => {
        const centerArray = country.center;
        axios
            .get(
                `https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${centerArray[1]},${centerArray[0]}`
            )
            .then((response) => {
                // console.log({ ...response.data, ...country });
                setSelectedCountry({ ...response.data, ...country });
            });
    };
    return <article onClick={onClick}>{country.place_name}</article>;
};
