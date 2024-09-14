import React from 'react';

const FilterComponent = ({ filters, setFilters }) => {
    return (
        <div className="filters">
            <div className="filter-item">
                <label htmlFor="owner" className="block text-sm font-medium text-gray-700">Owner</label>
                <input
                    type="text"
                    id="owner"
                    value={filters.owner}
                    onChange={(e) => setFilters({ ...filters, owner: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="Enter owner name"
                />
            </div>
            <div className="filter-item">
                <label htmlFor="lawFirm" className="block text-sm font-medium text-gray-700">Law Firm</label>
                <input
                    type="text"
                    id="lawFirm"
                    value={filters.lawFirm}
                    onChange={(e) => setFilters({ ...filters, lawFirm: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="Enter law firm"
                />
            </div>
            <div className="filter-item">
                <label htmlFor="attorney" className="block text-sm font-medium text-gray-700">Attorney</label>
                <input
                    type="text"
                    id="attorney"
                    value={filters.attorney}
                    onChange={(e) => setFilters({ ...filters, attorney: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="Enter attorney name"
                />
            </div>
            <div className="filter-item">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                <input
                    type="text"
                    id="status"
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="Enter trademark status"
                />
            </div>
        </div>
    );
};

export default FilterComponent;
