const canvas =
document.getElementById("caCanvas");

const ctx =
canvas.getContext("2d");


let grid=[];

let size=10;


function createGrid(){

let cols =
canvas.width/size;

let rows =
canvas.height/size;


for(let y=0;y<rows;y++){

grid[y]=[];

for(let x=0;x<cols;x++){

grid[y][x]=0;

}

}

}


function update(){

let next=[];


for(let y=0;y<grid.length;y++){

next[y]=[];

for(let x=0;x<grid[0].length;x++){


let neighbors=countNeighbors(x,y);


if(grid[y][x]==1){

next[y][x]=1;

}

else if(neighbors>2){

next[y][x]=1;

}

else{

next[y][x]=0;

}


}

}


grid=next;

draw();

}


function countNeighbors(x,y){

let count=0;


for(let dy=-1;dy<=1;dy++){

for(let dx=-1;dx<=1;dx++){

if(dx==0&&dy==0)
continue;


let nx=x+dx;
let ny=y+dy;


if(grid[ny]?.[nx])
count++;

}

}

return count;

}
