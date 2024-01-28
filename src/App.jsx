import './App.css'
import Header from './components/Header/Header'
import PopularDestinations from './components/PopularDestinations/PopularDestinations'
import SearchForm from './components/SearchForm/SearchForm'

function App() {
    return (
        <div className="font-montserrat m-3">
            <Header />
            <div className="mb-6">
                <SearchForm />
            </div>
            <PopularDestinations />
        </div>
    )
}

export default App
