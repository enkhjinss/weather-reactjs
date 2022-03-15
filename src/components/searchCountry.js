export const SearchCountry = () => {
    const onChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <input className="searchInput" onChange={ onChange }/>
        </>
    )
}