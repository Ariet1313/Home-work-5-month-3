document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');

    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&')
        .then(response => response.json())
        .then(data => {
            data.forEach(cat => {
                const img = document.createElement('img');
                img.src = cat.url;
                img.alt = 'Cat image';
                img.addEventListener('click', () => {
                    img.classList.toggle('enlarged');
                });
                gallery.appendChild(img);
            });
        })
        .catch(error => console.error('Error:', error));
});