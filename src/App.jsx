import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import { HomePage } from './routes/HomePage'
import { SillasPage } from './routes/SillasPage'
import { MesasPage } from './routes/MesasPage'
import { EscritoriosPage } from './routes/EscritoriosPage'
import { ContactoPage } from './routes/ContactoPage'
import NotFoundPage from './routes/NotFound'
import { useEffect, useState } from 'react'
import Loading from './hook/Loading'
import ItemDetalle from './components/Item/Item'
import { Layout } from './components/Layout/Layout'


const AppMain = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
          setLoading(false);
      }, 1500); // Simula una carga de 3 segundos

      return () => clearTimeout(timer);
  }, [location]);

  return (
      <>
          {loading ? (
              <Loading />
          ) : (
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path='/' element={<Layout />}>
                    <Route path="/sillasCatalog" element={<SillasPage />} />
                    <Route path="/mesasCatalog" element={<MesasPage />} />
                    <Route path="/escritoriosCatalog" element={<EscritoriosPage/>} />
                    <Route path="/contacto" element={<ContactoPage />} />
                    <Route path="/silla/:id" element={<ItemDetalle />} />
                  </Route>
                  <Route path="*" element={<NotFoundPage />} />
              </Routes>
          )}
      </>
  );
};

const App = () =>{
  return(
    <Router>
      <AppMain />
    </Router>
  )
}

export default App;
