/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}

/**
 * Votre code commence ici !
 */
let Voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    collectionArray: [citroen, peugeot, ford], // Dans un tableau, ajouter les différentes voitures que vous possédez
}

let p = document.querySelector('p');
for (let value of Voitures.collectionArray) {
    let span1 = document.createElement('span');
    span1.innerHTML = value.color;
    value.ouvrirPorte();
    p.append(span1);
}


// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.


