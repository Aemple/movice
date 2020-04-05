import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';
import './assets/css/common.less';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import Home from './routes/Home';
import MoviceAll from './routes/MoviceAll';
import Profile from './routes/Profile';
import Login from './routes/Login';
import AdminLogin from './routes/AdminLogin';
import Register from './routes/Register';
import SetInfo from './routes/SetInfo';
import AddMovice from './routes/AddMovice';
import Detail from './routes/Detail';
import Notfound from './routes/Notfound';
import { ConnectedRouter } from 'connected-react-router';
import history from './store/history';
// import './config.js';
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <ConfigProvider locale={zh_CN}>
                    <Tabs />
                    <main className="main-container">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/moviceAll" component={MoviceAll} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/login" component={Login}></Route>
                            <Route path="/adminlogin" component={AdminLogin}></Route>
                            <Route path="/register" component={Register}></Route>
                            <Route path="/setInfo" component={SetInfo}></Route>
                            <Route path="/addmovice" component={AddMovice}></Route>
                            <Route path="/detail/:id" component={Detail} />
                            <Route path="/notfound" component={Notfound} />
                            <Redirect to="/notfound" />
                        </Switch>
                    </main>
                    <Footer />
                </ConfigProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
