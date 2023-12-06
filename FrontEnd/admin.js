// creation page admin
//Apparition de modes en Admin

function PageAdmin() {
    // Récupérer le token du local storage
    const token = localStorage.getItem('token');
    

    // Vérif si le token est présent
    if (token) {
        // Le token est présent, afficher la div
        const bandeau = document.querySelector('.bandeau');
        const LogOut = document.querySelector('.logout');
        const modifier = document.querySelector('.modalbtn');
        const bouton = document.querySelector('.btnS');
        
        if (bandeau && LogOut && modifier && bouton) {
            bandeau.style.display = 'flex';
            LogOut.style.display = 'flex';
            modifier.style.display = 'flex';
            bouton.style.display = 'none';

        } 
    } 
}
document.addEventListener('DOMContentLoaded', PageAdmin);
