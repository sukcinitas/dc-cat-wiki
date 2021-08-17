import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import '../sass/SearchBar.scss';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreedId, setSelectedBreedId] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const firstUpdate = useRef(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.currentTarget.value);
    setError('');
  }

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const searchBreed = async (searchQuery: string): Promise<void> => {
      axios.get(`/api/cats/search?q=${searchQuery}`).then(
        (res) => {
          const { data: { success, searchList, message }} = res;
          if (success) {
            if (searchList.length === 1 && searchList[0].name.toLowerCase() === searchQuery.toLowerCase()) {
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
          setSearchQuery('');
        });
    };
    searchBreed(searchQuery);
  }, [searchQuery]);

  const selectBreed = (breedName:string, breedId:string, e?: React.KeyboardEvent): void => {
    if (e && e.key !== '13') {
      return;
    }
    setSearchQuery(breedName);
    setSelectedBreedId(breedId);
    history.push(`/breeds/${breedId}`);
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!selectedBreedId) {
      return;
    }
    history.push(`/breeds/${selectedBreedId}`);
  }

  const closeModal = () => {
    setIsModalVisible(false);
    setSearchQuery('');
    setList([]);
  }

  const nameList = list.map((cat: { name: string, id: string }): React.ReactElement => (
    <li tabIndex={0} onClick={() => selectBreed(cat.name, cat.id)} onKeyDown={(e) => selectBreed(cat.name, cat.id, e)} key={cat.id} className="search__item">{cat.name}</li>
  ));

  return (
    <div className="search">
      <form className="search__bar" onSubmit={handleSubmit}>
        <input 
          placeholder={error ? error : 'Enter your breed'}
          className="search__bar-input"
          onChange={handleChange} value={searchQuery}
          type="text"
          onClick={() => setIsModalVisible(true)}
        />
        <button type="submit" className="search__icon"><span className="material-icons">search</span></button>
      </form>
      <button className="search__button" onClick={() => setIsModalVisible(true)}>Search
        <span className="material-icons search__button-icon">search</span>
      </button>
      <div className="search__panel">
        {list.length > 0 && <ul className="search__list">
          {nameList}
        </ul>}
      </div>
      <div className={isModalVisible ? 'modal' : 'modal--hidden'}>
        <button onClick={closeModal} className="modal__btn"><span className="material-icons search__icon--close modal__icon--close">close</span></button>
        <form className="modal__bar search__bar" onSubmit={handleSubmit}>
          <input 
            placeholder={error ? error : 'Enter your breed'}
            className="modal__bar-input search__bar-input"
            onChange={handleChange} value={searchQuery}
            onFocus={handleChange}
            type="text"
          />
          <button type="submit" className="modal__icon search__icon"><span className="material-icons">search</span></button>
        </form>
      <div className="modal__panel search__panel">
        {list.length > 0 && <ul className="modal__list search__list">
          {nameList}
        </ul>}
      </div>
    </div>
    </div>
  );
};

export default SearchBar;