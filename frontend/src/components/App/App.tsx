import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import SideBar from '../SideBar/SideBar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import { Container } from '../Containers/Containers.styles';
import SignUp from '../SignUp/SignUp';
import { useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    navigate('/signup');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        {pathname === '/dashboard' && <SideBar />}
        <Routes>
          <Route path="/dashboard" element={<Dashboard title={'dashboard'} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
