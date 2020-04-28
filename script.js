let CatWinner={name:"Boris",
age:3,
IsBlack:true,
origin:{country:"Belarus",
place:"Minsk",
}
};
let justACat={name:"Lidia",
age:2,
IsBlack:false,
origin:{country:"Russia",
place:"Moskow",
}
};
let CatLooser={name:"Victor",
age:5,
IsBlack:false,
origin:{country:"Poland",
place:"Lodz",
}
};
let Cats=[CatWinner, justACat, CatLooser];
console.log(Cats);
/*for (let i = 0; i < Cats.length; i++) {
    console.log( Object.entries(Cats[i]))
}
Cats.forEach( Cat => console.log(Cat));*/