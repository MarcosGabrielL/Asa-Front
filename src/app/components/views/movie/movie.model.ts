export interface MovieDetails{
      
     adult: boolean;
     backdrop_path: String;
     budget: number;
     credits: Credits;
     genres: Genre[];
     homepage: String;
     id: number;  
     imdb_id: String;
     original_language: String;
     original_title: String;
     overview: String;
     popularity: number;
     poster_path: Object;
     production_companies: ProductionCompany[];
     production_countries: ProductionCountry[];
     release_date: String;
     release_dates: String[];
     revenue: number;
     runtime: number;
     spoken_languages: SpokenLanguage[];
     status: String;
     tagline: String;
     title: String;
     video: boolean;
     vote_average: number;
     vote_count: number;
}

 export interface Genre{
      id: number;
      name: String;
}

 export interface ProductionCompany{
      id: number;
      logo_path: String;
      name: String;
      origin_country: String  ;
}

 export interface ProductionCountry{
      iso_3166_1: String ;
      name: String;
}

 export interface SpokenLanguage{
      iso_639_1: String ;
      name: String;
}

export interface Credits{
     cast: Cast[];
     crew: Crew[];
}

export interface Cast{
     adult: boolean ;
     gender: number ;
     id: number ;
     known_for_department: String ;
     name: String ;
     original_name: String ;
     popularity: number ;
     profile_path: String ;
     cast_id: number ;
     character: String ;
     credit_id: String ;
     order: number ;
}

export interface Crew{
     adult: boolean;
     gender: number;
     id: number;
     known_for_department: String ;
     name: String ;
     original_name: String ;
     popularity: number ;
     profile_path: String ;
     credit_id: String ;
     department: String ;
     job: String ;
}
export interface ReleaseDate{
     certification: String ;
     iso_639_1: String ;
     note: String ;
     release_date: String ;
     type: number ;
}

export interface ReleaseDateResult{
     iso_3166_1: String ;
     release_dates: ReleaseDate[];
}

export interface Video{
     iso_639_1: String ;
     iso_3166_1: String ;
     name: String ;
     key: String ;
     site: String ;
     size: number ;
     type: String ;
     official: boolean ;
     published_at: String ;
     id: String ;
}

export interface ResultVideo{
     videos: Video[] ;
}

export interface Comentario{
      
          id: number;
       //@Column(nullable = false)
         critica: string;
       //@Column(nullable = false)
        idmovie: string;
       //@Column(nullable = false)
        idcinefilo: string;
       //@Column(nullable = false)
        data?: string;
       //@Column(nullable = false)
        avaliação?: String;
        curtidas_1_estrela?: String;
        curtidas_2_estrela?: String;
        curtidas_3_estrela?: String;
        curtidas_4_estrela?: String;
        curtidas_5_estrela?: String;
        score?: String ;
}

export interface Torrent {
	
	  idioma: String
	  url: String;
	  type:String;
	  name: String;
	  uploaded: String;
	 tamanho: String;
	 seeders: String;
}
	
	
	