export class Movie {
    name: String;
    rating: number;
    watchAgain: boolean
    constructor(name, rating, watchAgain){
        this.name = name;
        this.rating = rating;
        this.watchAgain = watchAgain;
    }
}
