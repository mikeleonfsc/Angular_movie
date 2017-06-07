import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let movies = [
            {id:1, name: 'Mr. Nice', rating:3, watchAgain:false},
            {id:2,  name: 'Mr. Nice 2', rating: 2, watchAgain: true },
            {id:3, name: 'Mr. Nice 3', rating: 3, watchAgain: false },
            
        ];
        return { movies };
    }
}
