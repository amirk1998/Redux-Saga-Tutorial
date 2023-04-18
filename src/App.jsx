import { Provider } from 'react-redux';
import CakeContainer from './Components/CakeContainer/CakeContainer';
import CakeWithPayload from './Components/CakeWithPayload/CakeWithPayload';
import HookCakeContainer from './Components/HookCakeContainer/HookCakeContainer';
import HookIceCreamContainer from './Components/IceCreamContainer/HookIceCreamContainer';
import UserContainer from './Components/UserContainer/UserContainer';
import store from './Redux/Store';
import PostSaga from './Components/PostSaga/PostSaga';

function App() {
  return (
    <Provider store={store}>
      <div className='App bg-gray-100 flex flex-col items-center gap-y-8 w-full h-screen py-10'>
        {/* <CakeContainer /> */}
        {/* <CakeWithPayload />
        <HookCakeContainer />
        <HookIceCreamContainer /> */}
        {/* <UserContainer /> */}
        <PostSaga />
      </div>
    </Provider>
  );
}

export default App;
