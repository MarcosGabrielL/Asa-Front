import { Result } from './result.model';

export interface Root{
     page: number;
     results: Result[] ;
     total_results: number ;
     total_pages: number;
}