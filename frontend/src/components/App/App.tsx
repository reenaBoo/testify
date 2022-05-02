import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import SideBar from '../SideBar/SideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { Container } from '../Containers/Containers.styles';
import SignUp from '../SignUp/SignUp';
import { useLocation } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

function App() {
  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        {pathname === '/dashboard' && <SideBar />}
        <Routes>
          <Route path="/dashboard" element={<Dashboard title={'dashboard'} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
