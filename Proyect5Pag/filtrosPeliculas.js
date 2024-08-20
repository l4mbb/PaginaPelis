//FILTROS GENERO PELICULA
// Obtener todos los botones de filtro
const filterBtns = document.querySelectorAll('.filter-btn');
// Obten|er todos los elementos de película
const movieItemsFilter = document.querySelectorAll('.movie-item');

// Agregar un evento de clic a cada botón de filtro
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const genre = btn.dataset.genre; // Obtener el género del botón

        // Ocultar todas las películas
        movieItemsFilter.forEach(item => {
            if (genre === 'all' || item.dataset.genre === genre) {
                item.style.display = 'block'; // Mostrar solo las películas del género seleccionado o todas si es "Todos"
            } else {
                item.style.display = 'none'; // Ocultar las películas que no coincidan con el género seleccionado
            }
        });
    });
});

//BUSCADOR
const searchInput = document.getElementById('searchInput');
const movieItemsSearch = document.querySelectorAll('.movie-item'); // Renombrar la variable para el buscador


searchInput.addEventListener('input', function() {
    const searchTextValue = this.value.toLowerCase(); // Convertir el texto ingresado a minúsculas

    
    movieItemsSearch.forEach(item => {
        const movieTitle = item.querySelector('img').getAttribute('alt').toLowerCase(); // Obtener el título de la película en minúsculas

        // Verificar si el título de la película incluye el texto de búsqueda
        if (movieTitle.includes(searchTextValue)) {
            item.style.display = 'block'; // Mostrar la película si hay coincidencia
        } else {
            item.style.display = 'none'; // Ocultar la película si no hay coincidencia
        }
    });
});

