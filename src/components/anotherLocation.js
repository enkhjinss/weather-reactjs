import { SearchCountry } from "../components/searchCountry";

export const AnotherLocaton = () => {
    return (
        <div className="anotherLocationContainer flex column align-center">
            <SearchCountry />
            <div className="countriesContainer flex column space-around">
                <article>hi</article>
                <article>hi</article>
                <article>hi</article>
            </div>
        </div>
    )
}