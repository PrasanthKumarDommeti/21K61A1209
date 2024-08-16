import React from 'react';

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div>
      <select onChange={(e) => onFilterChange('company', e.target.value)}>
        <option value="">All Companies</option>
        <option value="AMZ">AMZ</option>
        <option value="FLP">FLP</option>
        <option value="SNP">SNP</option>
        <option value="MYN">MYN</option>
        <option value="AZO">AZO</option>
      </select>
      <select onChange={(e) => onFilterChange('category', e.target.value)}>
        <option value="">All Categories</option>
        <option value="Phone">Phone</option>
        <option value="Computer">Computer</option>
        <option value="TV">TV</option>
        {/* Add other categories */}
      </select>
      {/* Add more filters such as rating, price range, etc. */}
    </div>
  );
};

export default Filters;
