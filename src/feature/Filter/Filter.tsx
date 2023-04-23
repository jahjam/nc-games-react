import { useEffect, useRef, useState } from 'react';
import { useRequest } from '../../hooks/use-request';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

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
};

const Filter = ({ handleFilter }: Props) => {
  const [showCategories, setShowCategories] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [categories, setCategories] =
    useState<Array<Category>>(defaultCategories);
  const [categoryInput, setCategoryInput] = useState('');
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget?.nodeName === 'LI') return;
    if (e.target.placeholder === 'Category') setShowCategories(false);
    if (e.target.placeholder === 'Sort') setShowSort(false);
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
    handleFilter(sortString);
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
  };

  useEffect(() => {
    const ref = (data: ResponseT) => {
      setCategories(data.categories);
    };

    sendRequest('GET', '/categories', ref);
  }, []);

  useEffect(() => {
    handleFilter(sortValue.current?.value || 'created_at');
  }, [handleFilter]);

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
                <li key={i} tabIndex={0} onClick={handleCategoryItemClick}>
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
                <li key={i} tabIndex={0} onClick={handleSortItemClick}>
                  {value}
                </li>
              ))}
            </Styled.List>
          )}
        </div>
        <div>
          {!showSearch && <Styled.MagnifyIcon />}
          <input type="text" placeholder="Search" />
        </div>
      </Styled.Filter>
    </Styled.Container>
  );
};

export default Filter;
