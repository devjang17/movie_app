//import React, {Component} from 'react';
import React from 'react';
import './Movie.css';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

// class Movie extends Component{		
	
// 	static propTypes = {
// 		title: PropTypes.string.isRequired,
// 		poster: PropTypes.string.isRequired,
// 		genres: PropTypes.array.isRequired,
// 		synopsis: PropTypes.string.isRequired
// 	}

// 	render(){		
// 		return(
// 			<div className="Movie">
// 				<div className="Movie_Columns">
// 					<MoviePosters poster={this.props.poster}/>
// 				</div>
// 				<div className="Movie_Columns">
// 					<h1>{this.props.title}</h1>
// 				</div>
// 			</div>
// 		)
// 	}	
// }

// class MoviePosters extends Component{
	
// 	static propTypes = {
// 		poster: PropTypes.string.isRequired
// 	}
	
// 	render(){		
// 		return(
// 			<img src={this.props.poster} alt=""/>
// 		)		
// 	}
	
// }

function Movie({title, poster, genres, synopsis}){
	return(
			<div className="Movie">
				<div className="Movie__Column">
					<MoviePosters poster={poster} alt={title}/>
				</div>
				<div className="Movie__Column">
					<h1>{title}</h1>
					<div className="Movie__Genres">
						{genres.map((genres, index) => <MovieGenres genres={genres} key={index}/>)}
					</div>	
					<div className="Movie__Synopsis">					
						<LinesEllipsis
							text={synopsis}
							maxLine='3'
							ellipsis='...'
							trimRight
							basedOn='letters'
							/>
					</div>
				</div>					
			</div>
		)	
}

function MoviePosters({poster, alt}){
	return(
			<img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
		)	
	
}

function MovieGenres({genres}){
	return(
		<span className="Movie__Genre" >{genres}</span>
		)	
	
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	synopsis: PropTypes.string.isRequired
}

Movie.MoviePosters = {
	poster: PropTypes.string.isRequired,	
	alt: PropTypes.string.isRequired
}

Movie.MovieGenres = {	
	genres: PropTypes.array.isRequired
}

			
export default Movie;