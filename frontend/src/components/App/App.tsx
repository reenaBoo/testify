import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import SideBar from '../SideBar/SideBar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { Container } from '../Containers/Containers.styles';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import { mainApi } from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  interface test {
    email: string;
    password: string;
  }

  function handleSignIn(data: test) {
    mainApi
      .login(data)
      .then(() => {
        setIsLoggedIn(true);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log('err', err.message);
      });
  }

  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn)
    mainApi
      .getUserInfo()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => {});
  }, [isLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        {isLoggedIn && <SideBar setIsLoggedIn={setIsLoggedIn} />}
        <Routes>
          <Route path="/dashboard" element={<Dashboard title={'dashboard'} />} />
          <Route path="/signup" element={<SignUp onSubmit={handleSignIn} />} />
          <Route path="/" element={<SignIn onSubmit={handleSignIn} />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
