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

// getPostTitle(1);

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

// getPost(1);



/* 🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un
 numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject. */

function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const incastroChance = Math.random() < 0.2;
            if (incastroChance) {reject(console.error("Dado incastrato"))}
            else {
                const numeroRandom = Math.floor(Math.random() * 6) + 1;
                resolve(console.log(numeroRandom));
            }
        }, 1000)
    })
}

lanciaDado();