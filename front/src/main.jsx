import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import { Home } from './Home'
import { Tx } from './Tx'
import { Balance } from './Balance'
import { Bloque } from './Bloque'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="balance/:address" element={<Balance></Balance>}></Route>
          <Route path="tx/:tx" element={<Tx></Tx>}></Route>
          <Route path="bloque/:bloque" element={<Bloque></Bloque>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
