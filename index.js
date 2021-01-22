// console.log(document);


// console.log(document.querySelector("h1"))

// console.log(document.querySelector(".value"))

// console.log(document.querySelector("button"))

// console.log(document.querySelector(".stat div"))

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

const descriptions = document.querySelectorAll(".description");

for(let desc of descriptions.values()){
    let content = desc.innerText;

    if(content.length > 250){
        content = content.slice(0,250);
        content = content + `<a href="#">...</a>`;
    }
    desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating .value");

for(let rating of ratings){
    let ratingValue = parseFloat(rating.innerText);
    
    if(ratingValue > 4.7){
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}

const parks = document.querySelectorAll(".park");

const numberParks = parks.length;

const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);

const main = document.querySelector("main");

const park = main.querySelector(".park");

main.removeChild(park);


// const ratingList = document.querySelectorAll("div .rating");
// for(let element of ratingList.values()){
//     console.log(element)
// }

// const areaList = document.querySelectorAll("div .area");
// for(let i=0;i<areaList.length;i++){
//     const element = areaList[i];
//     console.log(element)
// }