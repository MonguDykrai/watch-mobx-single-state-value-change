import { makeAutoObservable, action } from 'mobx';

class Store {
  geo = {
    latitude: '-',
    logitude: '-',
  };
  price = Date.now();
  dest = '';
  constructor() {
    makeAutoObservable(this, {
      fetchRealtimeTicketPrice: action,
      setGeo: action,
      setDest: action,
    });
  }
  fetchRealtimeTicketPrice() {
    setInterval(() => {
      this.price = Date.now();
    }, 5000);
  }
  setGeo(geo) {
    this.geo = geo;
  }
  setDest(dest) {
    this.dest = dest;
  }
}

export default new Store();
