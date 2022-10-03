// import { SideBar, HTML } from './sideBar';

export const App = new class {
  constructor() {
    console.log('hey');

    let a = <div>test</div>;
    console.log(a);
  }
}

function createElement() {
  console.log(...arguments);
  return false;
}