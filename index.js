/* 🏆 Snack 1
Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo
 di un post dal link https://dummyjson.com/posts/{id} */

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => resolve(console.log(data.title)))
            .catch(reject);
    });
}

getPostTitle(1);