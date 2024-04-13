import React, { useState } from 'react';
import { Country, State, City }  from 'country-state-city';
import Search from './search.jsx'
import Input from './input.jsx';
import './index.css'

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('delhi');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(true);


  // const country = Country.getCountryByCode()
  // const state = State.getStateByCode('UK')
  // console.log("state", state.name);
  const cities = City.getAllCities()
  // console.log(cities);

  const options = cities.map((item) => item.name)
  // console.log(cityName);
  // searchTermpt(searchTerm);

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm.toLowerCase());

    const filteredOptions = options
      .filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFilteredOptions(filteredOptions.slice(0, 5000));
  };

  const handleSelectOption = (option) => {
    setSearchTerm(option);
    setFilteredOptions([]);
  };

  const handleRightClickOption = (event, option) => {
    event.preventDefault();
    window.open(`http://localhost:5173/`, "_blank");
  };

  const toggleSearch = () => {
    isSearchOpen? searchTerm === ""? setIsSearchOpen(false) : null  : setIsSearchOpen(true);
  };

  return (
    <div>
        <div className='sh scrh absolute border w-80 mt-4'>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onClick={toggleSearch}
            placeholder="Search..."
            className="rounded-lg"
            autoComplete="off"
          />
          {isSearchOpen && (<ul style={{ maxHeight: '200px', overflowY: 'auto', cursor:'pointer' }}>
            {filteredOptions.map((option, index) => (
              <li key={index} onClick={() => handleSelectOption(option)} onContextMenu={(event) => handleRightClickOption(event, option)}>
                {option}
              </li>
            )) }
          </ul>)}
        </div>
        <Search dat={searchTerm}/>
    </div>
  );
};

export default SearchBar;
