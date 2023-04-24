import * as Styled from './styles';

import Header from './feature/Header/Header';
import Home from './pages/Home/Home';
import Review from './pages/Review/Review';
import Footer from './feature/Footer/Footer';
import SignIn from './pages/Sign-In/SignIn';
import Account from './pages/Account/Account';
import ReviewsByCategory from './pages/ReviewsByCategory/ReviewsByCategory';
import WrongPath from './pages/WrongPath/WrongPath';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Styled.App direction="column" justify="flex-start">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate replace to="/reviews" />} />
        <Route path="/reviews" element={<Home />} />
        <Route
          path="/reviews/category/:categoryQuery"
          element={<ReviewsByCategory />}
        />
        <Route path="/reviews/:reviewId" element={<Review />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/me" element={<Account />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>

      <Footer />
    </Styled.App>
  );
}

export default App;
