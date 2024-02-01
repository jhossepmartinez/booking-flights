import Header from "../Header/Header";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import SearchForm from "../SearchForm/SearchForm";

export default function Home() {
    return (
        <div className="m-3 font-montserrat">
            <Header />
            <div className="mb-6">
                <SearchForm />
            </div>
            <PopularDestinations />
        </div>
    );
}
