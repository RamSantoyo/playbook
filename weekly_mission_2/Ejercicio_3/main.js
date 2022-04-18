
class twitter {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(user, trending_topic, hashtag){
    this.user = user
    this.trending_topic = trending_topic
    this.hashtag = hashtag
	}
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const user_twitter = new twitter("@SantoyoRamsess", "Series S", "#ParamountPlus")


/*----------------------------------
SECCION
-------------------------------------*/

class facebook {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(user, post, biography){
    this.user = user
    this.post = post
    this.biography = biography
	}
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const user_facebook = new facebook("Ramsess Santoyo", "Feliz cumpleaños guapo que la pases muy bien", "Lo que se mide, mejora")

/*----------------------------------
SECCION
-------------------------------------*/


class uber {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(profile, travel){
    this.profile = profile
    this.travel = travel
	}
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const user_uber = new uber("Ramsess Santoyo", "CDMX")

/*----------------------------------
SECCION
-------------------------------------*/


class git {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
    this.name = name
    this.author = author
    this.language = language
    this.numberOfCommits = numberOfCommits
    this.stars = stars
    this.forks = forks
    this.issues_open = issues_open
    this.issues_close = issues_close
	}
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const user_git = new git("LaunchX", "carlogilmar", "JavaScript", 100, 199, 299, 10, 10)


console.log(user_git)
console.log(user_twitter)
console.log(user_facebook)
console.log(user_uber)