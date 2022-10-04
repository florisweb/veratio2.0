
export default class User {
    id: string;
    name: string;
    permissions: 0 | 1 | 2 | 3;

    constructor({id, name, permissions}: {id: string, name: string, permissions: 0 | 1 | 2 | 3}) {
        this.id = id;
        this.name = name;
        this.permissions = permissions;
    }
}
