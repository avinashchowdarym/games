
const myArr = [10,20,30,40,50,10];
const k = 50;

const TargetNum = (arr,target) => {
    
    myArr.sort();
    const res = new Set();
    let mySet = new Set();
    for(let i=0;i<arr.length;i++){
        if(mySet.has(target-arr[i]) && !res.has(arr[i],target-arr[i])) res.add([arr[i],target-arr[i]]);
        mySet.add(arr[i]);
    }

    return res;
}
const TargetThree = (arr,target) => {
    myArr.sort();
    let i=0;
    let res = [];
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            for(let k=2;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]===target) res.push([arr[i],arr[j],arr[k]]); 
            }
        }
    }
    return res;
    
}



console.log(TargetThree(myArr,k));