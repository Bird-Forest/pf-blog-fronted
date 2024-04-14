import AppBar from './routing/AppBar';
import { Container } from 'pages/Page.styled';
import React, { useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { base } from './baseTheme';
import CustomRouting from './routing/CustomRouting';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './redux/selectors';
import { getUser } from './redux/servise';

export default function App() {
  // const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const id = user.id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    console.log('CURRENT', id);
    dispatch(getUser(id));
  }, [dispatch, id]);
  return (
    <ThemeProvider theme={base}>
      <Container>
        <AppBar />
        <CustomRouting />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
