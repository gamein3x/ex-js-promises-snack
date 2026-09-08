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

/* 🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user
 che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */

function getPost(id) {
    return new Promise((resolve, reject) => {
        
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => resolve(console.log(`Post ${data.id} by ${data.userId}; "${data.title}": ${data.body};`)))
            .catch(reject);
    });
}

getPost(1);