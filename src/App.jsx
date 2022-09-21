import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SidebarWithHeader from './Navigation/sidebar';
import Dashboard from './Pages/Dashboard/DashboardPage';
import Company from './Pages/Company/CompanyPage';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <SidebarWithHeader>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/company" element={<Company />} />
            </Routes>
          </SidebarWithHeader>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
