import { SideBar } from './sideBar';
import { Server } from './data/server';

export const App = new class {
  constructor() {
    console.log('hey', Server);
    console.log(SideBar.y, SideBar.x);
  }
}
