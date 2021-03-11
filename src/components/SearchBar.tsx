import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import '../sass/SearchBar.scss';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreedId, setSelectedBreedId] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const history = useHistory();
  const firstUpdate = useRef(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.currentTarget.value) {
      setList([]);
    }
    setSearchQuery(e.currentTarget.value);
  }

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const searchBreed = async (searchQuery: string): Promise<void> => {
      if (!searchQuery) {
        return;
      }
      axios.get(`/api/cats/search?q=${searchQuery}`).then(
        (res) => {
          const { data: { success, searchList, message }} = res;
          if (success) {
            if (searchList.length === 1 && searchList[0].name === searchQuery) {
              setSelectedBreedId(searchList[0].id);
              setList([]);
            } else {
              setList(searchList);
            }
          } else {
            setError(message);
          }
        },
        (err) => {
          setError(
            err.response.data.message ||
              `${err.response.status}: ${err.response.statusText}`,
          );
        },
      );
    };
    searchBreed(searchQuery);
  }, [searchQuery]);

  const selectBreed = (breedName:string, breedId:string, e?: React.KeyboardEvent): void => {
    if (e && e.charCode !== 13) {
      return;
    }
    setSearchQuery(breedName);
    setSelectedBreedId(breedId);
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 40 && list.length !== 0) {
      console.log('Hey')
    }
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    history.push(`/breeds/${selectedBreedId}`);
  }

  const nameList = list.map((cat: { name: string, id: string }): any => (
    <li onClick={() => selectBreed(cat.name, cat.id)} onKeyDown={(e) => selectBreed(cat.name, cat.id, e)} key={cat.id} className="search__item">{cat.name}</li>
  ))

  return (
    <div className="search">
      <form className="search__bar" onSubmit={handleSubmit}>
        <input placeholder="Enter your breed" className="search__bar-input" onChange={handleChange} value={searchQuery}  type="text" onKeyDown={(e) => handleKeyDown(e)}/>
        <button type="submit" className="search__icon"><span className="material-icons">search</span></button>
      </form>
      <div className="search__panel">
        <button className="search__btn"><span className="material-icons search__icon--close">close</span></button>
        {list.length > 0 && <ul className="search__list">
          {nameList}
        </ul>}
      </div>
    </div>
  );
};

export default SearchBar;