const categories = ["Юмор", "Ужастики", "Фантастика", "Драма", "Триллер"];

const films = [];

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

function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    films.forEach(film => {
        const newEl = document.createElement("div");
        newEl.classList.add("film");
        newEl.innerText = film.name;
        document.querySelector(".films").appendChild(newEl);
    });
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