// POST

// Link API: "https://jsonplaceholder.typicode.com/posts"

// async function createPost(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify({
//                 title: "Testing123",
//                 body: "Contoh POST",
//                 userId: 1
//             })
//         })  

//         const data = await response.json()
//         console.log("POST: ", data)

//     }
//     catch(error){
//         console.log("Error: ", error)
//     }
// }

// createPost();



// PUT

// async function updatePost(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{ 
//             method: "PUT",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify({
//                 id: 1,
//                 title: "Updated Title",
//                 body: "Update Body",
//                 userId: 1
//             })
//         })

//         const data = await response.json()
//         console.log("PUT:", data)
//     }
//     catch (error){
//         console.log("Error:", error)
//     }
// }

// updatePost();

// DELETE

async function deletePost(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        })

        if(response.ok){
            console.log("DELETE: data berhasil di hapus");
        }
    }
    catch(error){
        console.log("Error: ", error);
    }
}

deletePost();