type Student = {
    name: string,
    lastname: string,
    age: number,
    city: string,
    hasEducation: boolean,
    stack: string[],
}

const student: Student = {
    name: 'Andrej',
    lastname: 'Stec',
    age: 26,
    city: 'Tyumen',
    hasEducation: true,
    stack: ['C++', 'PHP', 'JS'],
}

const addLanguageInStack = (student: Student, value: string) => {
    return student.stack.push(value);
}

addLanguageInStack(student, "TS");
console.log(student.stack);

// Создать список людей. Выявить количество человек, которые являются совершенолетними
console.log(student)