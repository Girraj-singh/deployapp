import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Pagination = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page')) || 1;

    const goToPage = (newPage) => {
        setSearchParams({ page: newPage });
    };
    return (
        <div>
            <p>Current Page: {page}</p>
            <button onClick={() => goToPage(page - 1)} disabled={page <= 1}>Previous</button>
            <button onClick={() => goToPage(page + 1)}>Next</button>
        </div>
    )
}

export default Pagination