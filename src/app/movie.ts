export class Movie {
    _id:Number;
    name: String;
    rating: number;
    watchAgain: boolean;
    updated_at: Date;
    constructor(id, name, rating, watchAgain, updated_at){
        this._id = id;
        this.name = name;
        this.rating = rating;
        this.watchAgain = watchAgain;
        this.updated_at = updated_at;
    }
}
