//Ceci est un commentaire JS, rien de ce qui est écrit ici n'est interprété par le navigateur
/**
 * Mais c'est mieux d'écrire ça dans un bloc
 * Bref la ligne 6 permet de sélectionner le contenu de ton HTML, à partir de là tu peux influer dessus
 */
document.addEventListener('DOMContentLoaded', (event) => {
    // "let" est une manière de déclarer une variable en JS, ici on l'appelle value et on lui attribue 0
    let value = 0;
    /**
     * Ici on créer une constante avec "const", tu déclare les valeurs qui ne sont pas sensé changer dans le futur avec const
     * Cette const est la selection de la balise <p> qu'on a vu avant
     * Dans ce fichier la balise <p> est maintenant cette constante 
     */
    const valueElement = document.getElementById('value');
    // On attribue la valeur créée précédement à la balise <p>
    valueElement.innerHTML = value;
    // Ces const sont la selection des deux boutons dans l'HTML
    const buttonAdd = document.getElementById('addButton');
    const buttonMult = document.getElementById('multButton');

    // Ce bloc selectionne le bouton d'addition et lui attribue un comportement qui se déclenche quand on clique dessus
    buttonAdd.addEventListener('click', () => {
        /**
         * shortcut pour faire:
         * value = value + 1;
         */
        value++;
        valueElement.textContent = value;
        // Maintenant, le bouton ajoute +1 à la variable "value" si tu clique sur ce bouton
    });

    // Littéralement pareil que le bloc au dessus mais pour le *2
    buttonMult.addEventListener('click', () => {
        /**
         * shortcut pour faire:
         * value = value * 2;
         */
        value *= 2;
        valueElement.textContent = value;
    });
    // Fin du bloc commencé ligne 6
});

/**
 * hésite pas a modifier des trucs pour essayer et supprimer les commentaires et quand t'as fini passe à l'exercice
 */