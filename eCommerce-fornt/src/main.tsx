import { createRoot } from 'react-dom/client'
import AppRouter from './routers/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import {store, persist} from '@store/index'
import { PersistGate } from "redux-persist/integration/react";
import './services/axios-global.js'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <AppRouter />
    </PersistGate>
  </Provider>
)
