export const orderArr =(arr,category,type='asc')=>{
    arr.sort((a,b)=>{
        const itemA = a[category]
        const itemB = b[category]
        let comparison = 0;
        if(itemA > itemB) {comparison =1}
        if(itemA < itemB) {comparison =-1}
        if(type==='des'){
            return comparison * -1
        }else{
            return comparison
        }
        
    })
    return arr
}