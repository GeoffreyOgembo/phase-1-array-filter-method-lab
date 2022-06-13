// Code your solution here
function findMatching(drivers, driver){
let newArray= drivers.filter(val => driver === val || driver.toLowerCase () === val)
    return newArray
  
}
function fuzzyMatch(drivers,firstTwo){
let newArray1 = drivers.filter(rslt =>rslt.slice(0,2)===firstTwo)
return newArray1
}
const matchName = (drivers, str) => {
    const filterArr = drivers.filter((filtered) => {
        console.log(filtered.name);
        return filtered.name === str;
    });
    return filterArr;
} 