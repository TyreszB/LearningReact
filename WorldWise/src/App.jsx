
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import City from './components/City';
import Form from './components/Form';
import CountryList from './components/CountryList'

// const BASE_URL = 'http://localhost:8000';


function App() {

    const [cities,setCities] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(function (){
        async function fetchCities(){
            try{
                setIsLoading(true);
                const res = await fetch(`http://localhost:8000/cities`)
                const data = await res.json();
                console.log(data)
                setCities(data)
            } catch {
                alert("There was an Error loading data...");
            }finally {
                setIsLoading(false);
            }
        }
        fetchCities()
    },[])

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="pricing" element={<Pricing/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="app" element={<AppLayout/>}>
                    <Route index element={<Navigate replace to='cities' />} />
                    <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
                    <Route path="cities/:id" element={<City />} />
                    <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
                    <Route path="form" element={<Form />} />
                </Route>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
