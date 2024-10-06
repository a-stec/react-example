let userInfo: [string, number];
userInfo = ["Tom", 28];
//userInfo = [28, "Tom"]; // Ошибка

console.log(userInfo[1]); // 28
userInfo[1] = 37;
console.log(userInfo[1])

userInfo[0] = "Barry";
console.log(userInfo)
