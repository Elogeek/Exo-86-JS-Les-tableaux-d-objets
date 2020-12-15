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
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
     collectionArray = [citroen,peugeot,ford];// Dans un tableau, ajouter les différentes voitures que vous possédez.
     collectionArray.citroen;
     collectionArray.peugeot;
     collectionArray.ford; // Vos voitures dans cette propriété !
}

// je parcours les objets avec la boucle for in
let collectionArray = [citroen,peugeot,ford];

for (let value in collectionArray) {
    console.log(value + collectionArray);
}


// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.


