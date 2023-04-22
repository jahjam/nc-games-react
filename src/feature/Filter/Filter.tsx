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

const Filter = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [categories, setCategories] = useState<Array<Category>>([
    {
      description: '',
      slug: '',
    },
  ]);
  const [input, setInput] = useState('');
  const categoryValue = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { sendRequest } = useRequest();

  const filteredListValues = categories
    ?.map(category => category.slug)
    .filter(value => value.toLowerCase().includes(input.toLowerCase()));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowCategories(true);
    setInput(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget?.nodeName === 'LI') {
      return;
    }

    setShowCategories(false);
  };

  const handleListItemClick = (e: any) => {
    setShowCategories(false);

    navigate(`/reviews/${e.target.innerText}`);
  };

  const handleFocus = () => {
    setShowCategories(true);
  };

  useEffect(() => {
    const ref = (data: ResponseT) => {
      setCategories(data.categories);
    };

    sendRequest('GET', '/categories', ref);
  }, []);

  return (
    <Styled.Container>
      <Styled.Filter justify="space-between" gap={1.2}>
        <Styled.ListDiv>
          {!showCategories && <Styled.MagnifyIcon />}
          <input
            type="text"
            placeholder="Category"
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            ref={categoryValue}
          />
          {showCategories && (
            <Styled.List>
              {filteredListValues.map((category, i) => (
                <li key={i} tabIndex={0} onClick={handleListItemClick}>
                  {category}
                </li>
              ))}
            </Styled.List>
          )}
        </Styled.ListDiv>
        <div>
          {!showSort && <Styled.MagnifyIcon />}
          <input type="text" placeholder="Sort" />
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
