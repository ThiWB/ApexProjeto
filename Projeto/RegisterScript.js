function saveRegistrationData() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const bloodType = document.getElementById('bloodType').value;
    const disabilities = document.getElementById('disabilities').value;
    const allergies = document.getElementById('allergies').value;

    // Salva as informações no localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('bloodType', bloodType);
    localStorage.setItem('disabilities', disabilities);
    localStorage.setItem('allergies', allergies);

    alert('Registro salvo com sucesso!');
    window.location.href = 'Home.html'; // Redireciona para a página Home
}
