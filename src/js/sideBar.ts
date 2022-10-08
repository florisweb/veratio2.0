



class sideBar {
  x: string;
  y: string = 'he';

  constructor(a: number) {
    this.x = 'a';
    this.y = 'he';
    console.log(...arguments);
  }
}



export const SideBar = new sideBar(1);
