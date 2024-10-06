type Human = {
    name: string,
    lastname: string,
    age: number,
    gender: "male" | "female",
    type: string,
}

const people: Human[] = [
    {name: "Petr", lastname: "Petrov", age: 24, gender: "male", type: "employee"},
    {name: "Ivan", lastname: "Ivanov", age: 17, gender: "male", type: "student"},
    {name: "Maksim", lastname: "Maksimov", age: 20, gender: "male", type: "student"}
];

{
    function countAdultPeople(people: Human[]): number {
        return people.filter(human => human.age >= 18).length;
    }

    console.log(countAdultPeople(people));
}

{
    function countAdultPeople(people: Human[]): number {
        return people.reduce((count: number, human: Human) => {
            return count + Number(human.age >= 18);
        }, 0);
    }

    console.log(countAdultPeople(people));

    let count = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].age >= 18) {
            count++;
        }
    }
}

{
    function countAdultPeople(people: Human[]): number {
        return people.map(human => human.age).filter(age => age >= 18).length;
    }

    function arrAge(people: Human[]): number[] {
        return people.reduce((arr: number[], human: Human) => {
            arr.push(human.age);
            return arr;
        }, []);
    }

    console.log(countAdultPeople(people));
    console.log(arrAge(people));

    people.forEach(human => console.log(human.age));

}
