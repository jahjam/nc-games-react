import { useEffect, useRef, useState } from 'react';
import { useRequest } from '../../hooks/use-request';
import * as Styled from './styles';
import { useNavigate, useParams } from 'react-router-dom';

type Category = {
  description: string;
  slug: string;
};

type ResponseT = {
  categories: Array<Category>;
};

const defaultCategories = [
  {
    description: '',
    slug: '',
  },
];

const sortValues = ['date', 'votes'];

type Props = {
  handleFilter: Function;
  handleSearch: Function;
};

const Filter = ({ handleFilter, handleSearch }: Props) => {
  const params = useParams();

  const categoryInputDefault = params.categoryQuery || '';

  const [showCategories, setShowCategories] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [order, setOrder] = useState('ASC');
  const [showSearch, setShowSearch] = useState(false);
  const [categories, setCategories] =
    useState<Array<Category>>(defaultCategories);
  const [categoryInput, setCategoryInput] = useState(categoryInputDefault);
  const [sortInput, setSortInput] = useState('');
  const categoryValue = useRef<HTMLInputElement>(null);
  const sortValue = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { sendRequest } = useRequest();

  const filteredCategoryValues = categories
    ?.map(category => category.slug)
    .filter(value => value.toLowerCase().includes(categoryInput.toLowerCase()));

  const filteredSortValues = sortValues.filter(value =>
    value.toLowerCase().includes(sortInput.toLowerCase())
  );

  const handleCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowCategories(true);
    setCategoryInput(e.target.value);
  };

  const handleSortInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowSort(true);
    setSortInput(e.target.value);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowSearch(false);
    handleSearch(e.target.value);
  };

  const handleCategoryItemClick = (e: any) => {
    setShowCategories(false);
    setCategoryInput(e.target.innerText);
    navigate(`/reviews/${e.target.innerText}`);
  };

  const handleSortItemClick = (e: any) => {
    setShowSort(false);

    let sortString = e.target.innerText;

    if (sortString === 'date') sortString = 'created_at';

    setSortInput(e.target.innerText);
    handleFilter(sortString, order?.toLowerCase());
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget?.nodeName === 'LI') return;
    if (e.target.placeholder === 'Category') setShowCategories(false);
    if (e.target.placeholder === 'Sort') setShowSort(false);
    if (e.target.placeholder === 'Search') setShowSearch(false);
  };

  const handleFocus = (e: any) => {
    if (e.target.placeholder === 'Category') {
      setShowCategories(true);
      setCategoryInput('');
    }
    if (e.target.placeholder === 'Sort') {
      setShowSort(true);
      setSortInput('');
    }
    if (e.target.placeholder === 'Search') {
      setShowSearch(true);
    }

    if (e.target.textContent === 'ASC' || e.target.textContent === 'DESC') {
      order === 'ASC' ? setOrder('DESC') : setOrder('ASC');
    }
  };

  useEffect(() => {
    const ref = (data: ResponseT) => {
      setCategories(data.categories);
    };

    sendRequest('GET', '/categories', ref);
  }, []);

  useEffect(() => {
    let sortString = sortValue.current?.value;

    if (sortString === 'date') sortString = 'created_at';

    handleFilter(sortString || 'created_at', order?.toLowerCase());
  }, [handleFilter, order]);

  return (
    <Styled.Container>
      <Styled.Filter justify="space-between" gap={1.2}>
        <Styled.ListDiv>
          {!showCategories && <Styled.MagnifyIcon />}
          <input
            type="text"
            placeholder="Category"
            onChange={handleCategoryInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={categoryInput}
            ref={categoryValue}
          />
          {showCategories && (
            <Styled.List>
              {filteredCategoryValues.map((category, i) => (
                <li key={i} tabIndex={i} onClick={handleCategoryItemClick}>
                  {category}
                </li>
              ))}
            </Styled.List>
          )}
        </Styled.ListDiv>
        <div>
          {!showSort && <Styled.MagnifyIcon />}
          <input
            type="text"
            placeholder="Sort"
            onChange={handleSortInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={sortInput}
            ref={sortValue}
          />
          {showSort && (
            <Styled.List>
              {filteredSortValues.map((value, i) => (
                <li key={i} tabIndex={i} onClick={handleSortItemClick}>
                  {value}
                </li>
              ))}
            </Styled.List>
          )}
        </div>
        <Styled.OrderDiv tabIndex={0} onClick={handleFocus}>
          <span>{order}</span>
        </Styled.OrderDiv>
        <div>
          {!showSearch && <Styled.MagnifyIcon />}
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchInput}
            onFocus={handleFocus}
          />
        </div>
      </Styled.Filter>
    </Styled.Container>
  );
};

export default Filter;
