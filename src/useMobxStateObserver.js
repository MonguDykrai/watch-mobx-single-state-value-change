import { useState, useEffect } from 'react';
import { toJS, autorun } from 'mobx';
export default function useMobxStateObserver(__store__, key) {
  const [value, setValue] = useState();
  useEffect(() => {
    autorun(() => {
      setValue(toJS(__store__[key]));
    });
  }, []);
  return [value];
}
