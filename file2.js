//  JSON => Javascript Object Notation, JSON is a text format for storing & transporting data.
//  Language Independent & supports (Array, object, string, number), services communicates



let student = {
    name: "Ankit",
    age: 20
};

 let ans = JSON.stringify(student); // convert javascript value to javascript object notation.
 console.log(ans);

 let str = '{"name":"Ankit","age":20}';
 let ob = JSON.parse(str);             //convert javascript object notation string into an object.
 console.log(ob);