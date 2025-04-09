document.getElementById('loadDataBtn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            return response.json();
        })
        .then(data => {
            const display = document.getElementById('dataDisplay');
            display.innerHTML = '';
            data.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.innerHTML = `<p><strong>${user.name}</strong>: ${user.email}</p>`;
                display.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Il y a eu une erreur lors de la récupération des données.');
        });
});
