{
    enum Season { Winter, Spring, Summer, Autumn };
    let current: Season = Season.Summer;
    // let current: Season = Season[Object.keys(Season).length / 2 + 3];
    // console.log(Object.keys(Season).length)
    console.log(current);
    // current = Season.Autumn;
}

{
    enum Season { Winter=0, Spring=1, Summer=2, Autumn=3 };
    var current: string = Season[2]; // 2 - значение Summer
    console.log(current); // Summer

    console.log(Season)
    console.log(typeof Season);
}
