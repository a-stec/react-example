{
    class User {
        id: number;
        name: string;
        getInfo(): string {
            return "id:" + this.id + " name:" + this.name;
        }
    }
    let tom: User = new User();
    tom.id = 1;
    tom.name = "Tom";
    console.log(tom.getInfo());
}


class User {
    id: number;
    name: string;
    constructor(userId: number, userName: string) {
        this.id = userId;
        this.name = userName;
    }
}

let tom: User = new User(1, "Tom");
console.log(tom.id);
