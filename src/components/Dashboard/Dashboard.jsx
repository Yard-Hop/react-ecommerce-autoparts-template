/* eslint-disable */
import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './Dashboard.css';
import Main from './Main';
import Sidebar from './Sidebar';
import ProductForm from './ProductForm';
import Purchases from './Purchases/Purchases';
import { useStateValue } from '../../StateProvider';
import Inventory from './Inventory/Inventory';
import Messages from './Messages/Messages';

function getCookie(name) {
  const dc = document.cookie;
  const prefix = `${name}=`;
  let end;
  let begin = dc.indexOf(`; ${prefix}`);
  if (begin === -1) {
    begin = dc.indexOf(prefix);
    if (begin !== 0) return null;
  } else {
    begin += 2;
    end = document.cookie.indexOf(';', begin);
    if (end === -1) {
      end = dc.length;
    }
  }
  // because unescape has been deprecated, replaced with decodeURI
  // return unescape(dc.substring(begin + prefix.length, end));
  // eslint-disable-next-line no-undef
  return decodeURI(dc.substring(begin + prefix.length, end));
}

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  // eslint-disable-next-line no-console
  console.log('dashboard');

  useEffect(() => {
    const ssid = getCookie('ssid');
    console.log('ssid', ssid);
    // if (!user) {
    //   history.push('/');
    // }
  }, []);
  return (
    <div className="dashboard">
      <Sidebar />
      <Switch>
        <Route exact path="/dashboard">
          <Main />
        </Route>
        <Route exact path="/dashboard/newProduct">
          <ProductForm />
        </Route>
        <Route exact path="/dashboard/inventory">
          <Inventory />
        </Route>
        <Route exact path="/dashboard/purchases">
          <Purchases />
        </Route>
        <Route exact path="/dashboard/messages">
          <Messages />
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
