import React, { useEffect } from 'react';
import './style.css';
import { observer } from 'mobx-react';
import Store from './store';
import { autorun } from 'mobx';
import useMobxStateObserver from './useMobxStateObserver';
import useObserveMobxStateByKeys from './useObserveMobxStateByKeys';
// import useWrap from './useWrap';

const App = () => {
  // const [geo] = useMobxStateObserver(Store, 'geo');
  // const [dest] = useMobxStateObserver(Store, 'dest');
  // const [geo, dest] = useWrap(Store, ['geo', 'dest']);

  ['dest'].forEach((v) => {
    const [value] = useMobxStateObserver(Store, v);
    console.log(value);
  });

  // const { geo, dest } = useObserveMobxStateByKeys(Store, ['geo', 'dest']);
  // const [geo, dest] = useObserveMobxStateByKeys(Store, ['geo', 'dest']);
  // useEffect(() => {
  //   console.log({ geo, dest });
  // }, [geo, dest]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('%c' + JSON.stringify(geo), 'background: red;');
  //   }, 800);
  // }, [geo]);
  // useEffect(() => {
  //   console.log('%c' + JSON.stringify(dest), 'background: yellow;');
  //   if (dest === 'hongqiao') {
  //     Store.setGeo({
  //       latitude: 3.14,
  //       logitude: 3.2134,
  //     });
  //   }
  // }, [dest]);
  useEffect(() => {
    Store.fetchRealtimeTicketPrice();
  }, []);
  // useEffect(() => {
  //   autorun(() => {
  //     if (Store.dest === 'hongqiao') {
  //       Store.setGeo({
  //         latitude: 3.14,
  //         logitude: 3.2134,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <div style={{ backgroundColor: Store.bgColor }}>
      <button onClick={() => Store.setDest('hongqiao')}>
        目的地：虹桥机场
      </button>
      <div>{JSON.stringify(Store.geo)}</div>
      <div>price: {Store.price}</div>
      <div>dest: {Store.dest}</div>
      <button onClick={() => Store.setBgColor('green')}>设置背景色</button>
    </div>
  );
};

export default observer(App);
