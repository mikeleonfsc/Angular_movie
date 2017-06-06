import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let movies = [
            { name: 'Mr. Nice', rating:3, watchAgain:false},
            { name: 'Mr. Nice 2', rating: 2, watchAgain: true },
            { name: 'Mr. Nice 3', rating: 3, watchAgain: false },
            
        ];
        return { movies };
    }
}
