import { useState } from 'react';
import FilterComponent from './FilterComponent';
import StatusIndicator from './StatusIndicator';
import axios from 'axios';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [filters, setFilters] = useState({
        owner: '',
        lawFirm: '',
        attorney: '',
        status: ''
    });
    const [results, setResults] = useState([]);
    const [status, setStatus] = useState(''); // Status: Searching, No Results Found, Error

    const handleSearch = async () => {
        setStatus('Searching');
        try {
            const response = await axios.get('API_ENDPOINT_HERE', {
                params: {
                    query,
                    owner: filters.owner,
                    lawFirm: filters.lawFirm,
                    attorney: filters.attorney,
                    status: filters.status
                }
            });
            setResults(response.data);
            setStatus(response.data.length > 0 ? '' : 'No Results Found');
        } catch (error) {
            setStatus('Error');
        }
    };

    return (
        <div className="search-component">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2"
            />
            <FilterComponent filters={filters} setFilters={setFilters} />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2 mt-2">
                Search
            </button>

            {/* Display status */}
            <StatusIndicator status={status} />

            {results.length > 0 && (
                <div className="results">
                    {results.map((result, index) => (
                        <div key={index} className="border p-2 mt-2">
                            <h3>{result.name}</h3>
                            <p>{result.owner}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchComponent;
