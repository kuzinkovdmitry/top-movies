import {INameId} from './name-id.interface';


export interface IMovies {
    title: string;
    year: string;
    releaseDate: string;
    directors: INameId[];
    writers: INameId[];
    runtime: string;
    urlPoster: string;
    countries: string[];
    languages: string[];
    genres: string[];
    plot: string;
    simplePlot: string;
    idIMDB: string;
    urlIMDB: string;
    rating: string;
    metascore: string;
    rated: string;
    votes: string;
    type: string;
    ranking: number;
    selected?: boolean;
}
