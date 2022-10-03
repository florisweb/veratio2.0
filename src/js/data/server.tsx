
import Project from './project';

class server {
    
    get projects(): (Project)[] {
        return [];
    }

    constructor() {

    }
}

export const Server = new server();