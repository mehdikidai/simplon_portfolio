// async function Test() {
//     return "Hello Simplon";
// }

async function Test(n) {
    if (n < 10) throw new Error("not valid");

    return "valid";
}

Test(11)
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    });

async function getData(uri) {
    const a = await fetch(uri);

    return await a.json();
}

// getData("https://jsonplaceholder.typicode.com/todos/1")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// try {
//     getData("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
//         console.log(data);
//     });
// } catch (err) {
//     console.log(err);
// }

async function getData(uri) {
    const a = await fetch(uri);
    return await a.json();
}

// --------------------------------------

async function Test_two(){

    try{
        const a = await getData("https://jsonplaceholder.typicode.com/todos/1")
        console.log(a)
    }
    catch(error){
        console.log(error)
    }
}

Test_two()