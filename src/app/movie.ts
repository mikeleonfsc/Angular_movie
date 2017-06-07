export class Movie {
    id:Number;
    name: String;
    rating: number;
    watchAgain: boolean
    constructor(id, name, rating, watchAgain){
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.watchAgain = watchAgain;
    }
}
