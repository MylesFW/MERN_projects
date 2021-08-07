
console.log(hello);
var hello = 'world';

//var hello;
//console.log(hello);
//hello = 'world';

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//print magnet as the var is reassigned and .log is inside the funct

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//print 'super cool' because the function print() was never called

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//chicken;
//half chicken;
// the var is logged then eat() is called where it changes the var and prints it again

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//mean is called before the function is presented. therefor mean() is undefined.

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//undefined
//rock
//r&b
//disco
//the first time genre is logged it has not yet been defined. therefor prints undefined.

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//san jose
//seattle
//burbank
//san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//{name: "Chicago", students: 65, hiring: true}




