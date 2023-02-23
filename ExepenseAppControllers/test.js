const s='this is shiva'
const arr=s.split(' ')
console.log(arr)
let l=''
const a=arr.map((ele)=>{
   
    const m= ele.split('').reverse().join('')
    l+=m
    return m
    
})
console.log(l)
