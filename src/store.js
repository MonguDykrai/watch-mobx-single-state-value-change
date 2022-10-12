import { makeAutoObservable, action, observable } from 'mobx';

class Store {
  geo = {
    latitude: '-',
    logitude: '-',
  };
  price = Date.now();
  dest = '';
  bgColor = 'transparent';
  constructor() {
    makeAutoObservable(this, {
      geo: observable,
      price: observable,
      dest: observable,
      bgColor: observable,
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
  setBgColor(color) {
    this.bgColor = color;
  }
}

export default new Store();
