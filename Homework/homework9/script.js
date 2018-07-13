const categories = ["Юмор", "Ужастики", "Фантастика", "Драма", "Триллер"];

const films = [];

const opennedFilms = {};

document.addEventListener("DOMContentLoaded", function () {
    categories.forEach(category => {
        const newEl = document.createElement("div");
        newEl.classList.add("category");
        newEl.innerText = category;
        newEl.addEventListener("click", () => onCategoryChoice(category));
        document.querySelector(".categories").appendChild(newEl);
    });
});

class Film {
    constructor(name, cat) {
        this.name = name;
        this.category = categories[cat];
        this.budget = 0;
        this.expertStars = 3;
        this.comments = [];
    }

    addComment(comment, author, stars) {
        this.comments.push(new Comment(comment, author, stars));
    }

    getAverageStars() {
        let sumStars = 0;

        this.comments.forEach(c => sumStars += c.stars);

        return (this.comments.length > 0) ? sumStars / this.comments.length : 0;
    }
}

class Comment {
    constructor(text, author, stars) {
        this.text = text;
        this.author = author;
        this.stars = stars;
    }
}

function getFilmsByCategory(cat) {
    return films.filter(film => film.category === cat);
}

function getFilmComments(filmName) {
    const film = films.filter(f => f.name === filmName)[0];
    return film.comments;
}

function onAddCommentClick(film) {
    const author = document.getElementById("#author-" + film.author.value);
    const comment = document.getElementById("#comment-" + film.author.value);
    film.addComment(comment, author);
}

function renderCommentForm(film) {
    const content = '<div class="form-title">Добавьте отзыв фильму ' + film.name + '</div><div class="form-body">' +
        '<input id="author-' + film.name + '" placeholder="Ваше имя" class="form-author"><input id="comment-' + film.name + '" ' +
        'placeholder="Ваш отзыв" class="form-comment">' +
        '<button onclick="onAddCommentClick(film)">Отправить</button></div>';
    const form = document.createElement('form');
    form.classList.add('comment-form');
    form.innerHTML = content;
    form.addEventListener("click", (event) => {
        event.stopPropagation();
        form.classList.add('chosen');
    });
    return form;
}

function openFilm(film, newEl) {
    const comments = getFilmComments(film.name);
    let s = "";
    comments.forEach(c => {
        s += '<div class="comment"><span class="author">' + c.author + '</span>: ' + c.text + '</div>';
    });
    newEl.innerHTML += '<div class="film-comments">' + s + '</div>';

    const addCommentButton = document.createElement('button');
    addCommentButton.innerText = 'Добавить отзыв';
    addCommentButton.addEventListener("click", (event) => {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.removeChild(addCommentButton);
        newEl.appendChild(commentForm);
    });
    newEl.appendChild(addCommentButton);
    opennedFilms[film.name] = true;
}

function onFilmClick(film, newEl) {
    if (opennedFilms.hasOwnProperty(film.name) && opennedFilms[film.name] === true) {
        newEl.innerHTML = '<div class="film-name">' + film.name + '</div>';
        opennedFilms[film.name] = false;
    } else {
        openFilm(film, newEl);
    }
}

function renderFilm(film) {
    const newEl = document.createElement("div");
    newEl.classList.add("film");
    newEl.innerHTML = '<div class="film-name">' + film.name + '</div>';
    newEl.addEventListener("click", () => onFilmClick(film, newEl));
    document.querySelector(".films").appendChild(newEl);
}

function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    films.forEach(film => renderFilm(film));
}

films.push(new Film("Один дома 1", 0));
films.push(new Film("Один дома 2", 0));
films.push(new Film("Мальчишник в Вегасе", 0));
films[0].addComment("Очень смешная комедия", "user1", 4);
films[0].addComment("Мне фильм не понравился", "user3", 2);
films[1].addComment("старая добрая комедия", "user2", 5);

films.push(new Film("Пила 1", 1));
films.push(new Film("Ходячие мертвецы", 1));
films.push(new Film("Оно", 1));

films.push(new Film("Назад в будущее", 2));
films.push(new Film("Пассажир", 3));
films.push(new Film("Я сражаюсь с великанами", 4));