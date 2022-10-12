import { useState, useEffect } from 'react';
import { toJS, autorun } from 'mobx';
export default function useObserveMobxStateByKeys(__store__, keys = []) {
  const [value, setValue] = useState(keys.map((key) => toJS(__store__)[key]));
  useEffect(() => {
    autorun(() => {
      const jsStore = toJS(__store__);
      value[0] = jsStore[keys[0]];
      setValue(value);
    });
  }, []);
  return value;
}
