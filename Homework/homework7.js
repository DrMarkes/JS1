const categories = ["Юмор", "Ужастики"];

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

        return (this.comments.length > 0)? sumStars / this.comments.length: 0;
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

films.push(new Film("Мальчишник в Вегасе", 0));
films[0].addComment("Очень смешная комедия", "user1", 4);
films[0].addComment("Мне фильм не понравился", "user3", 2);
films.push(new Film("Один дома", 0));
films[1].addComment("старая добрая комедия", "user2", 5);

console.log(films[0].comments);

console.log(getFilmsByCategory("Юмор"));