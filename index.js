// console.log(document);


// console.log(document.querySelector("h1"))

// console.log(document.querySelector(".value"))

// console.log(document.querySelector("button"))

console.log(document.querySelector(".stat div"))

// console.log(document.querySelector(".hello"))

// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// const heading3List = document.querySelectorAll("h3");
// for (let element of heading3List.values()) {
//     console.log(element);
//   }

// console.log(heading3List)

// // for (let index in heading3List.values()){
// //     console.log(index);
// // }


const ratingList = document.querySelectorAll("div .rating");
for(let element of ratingList.values()){
    console.log(element)
}

const areaList = document.querySelectorAll("div .area");
for(let i=0;i<areaList.length;i++){
    const element = areaList[i];
    console.log(element)
}