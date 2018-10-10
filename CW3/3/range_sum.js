

function range(x,y,a=1){
let list = [];
if(x>y){
let tmp = x;
x= y ;
y=tmp;
if(a<0){
a=-a;

}
}
for (let i =x ; i<=y ; i=i+a){
list.push(i);
 }
return list;
}


function sum(list){
	let sum=list[0];
for(let i of list){
sum+=i;
}
return sum;
}