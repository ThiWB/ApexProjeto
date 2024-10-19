// ProfileScript.js
window.onload = function() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const address = localStorage.getItem('address');
    const bloodType = localStorage.getItem('bloodType');
    const disabilities = localStorage.getItem('disabilities');
    const allergies = localStorage.getItem('allergies');

    // Exibir informações no perfil
    document.getElementById('nameDisplay').innerText = name ? name : 'Não informado';
    document.getElementById('phoneDisplay').innerText = phone ? phone : 'Não informado';
    document.getElementById('addressDisplay').innerText = address ? address : 'Não informado';
    document.getElementById('bloodTypeDisplay').innerText = bloodType ? bloodType : 'Não informado';
    document.getElementById('disabilitiesDisplay').innerText = disabilities ? disabilities : 'Não informado';
    document.getElementById('allergiesDisplay').innerText = allergies ? allergies : 'Não informado';
};
