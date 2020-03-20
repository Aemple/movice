import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import reducers, { CombinedState } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import logger from 'redux-logger';
import thunk, { ThunkDispatch, ThunkAction } from 'redux-thunk';
import promise from 'redux-promise';
import { routerMiddleware } from 'connected-react-router';
import history from './history';
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
};
const myPersistReducer = persistReducer(persistConfig, reducers);
let store: Store<CombinedState, AnyAction> = createStore<CombinedState, AnyAction, {}, {}>(
    myPersistReducer,
    applyMiddleware(thunk, routerMiddleware(history), promise, logger)
);
export const persistor = persistStore(store);
export default store;
