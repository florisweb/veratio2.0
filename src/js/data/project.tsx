import User from './user';

export default class Project {
    id: string;
    title: string;


    constructor({id, title}: {id: string, title: string}) {
        this.id = id;
        this.title = title;
    }
    
    get users(): (User)[] {
        return [];
    }
}
