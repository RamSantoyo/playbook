const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }

   const twitter = {
    user: "@SantoyoRamsess",
    trending_topic: "Series S",
    hashtag: "#ParamountPlus",
    getNombre: function(){
      return this.user 
    },
    getInfo: function(){
      return `Tranding topic del dia es "${this.trending_topic}" y el hashtag promocionado es "${this.hashtag}"`
    }
}

const facebook = {
    user: "Ramsess Santoyo",
    post: "Feliz cumpleaños guapo que la pases muy bien",
    biography: "Lo que se mide, mejora",
    getNombre: function(){
      return this.user 
    },
    getInfo: function(){
      return `Post del dia "${this.post}" Biografia "${this.biography}"`
    }
}

const uber = {
    profile: "Ramsess",
    travel: "CDMX",

    getNombre: function(){
      return this.user 
    },
    getInfo: function(){
      return `${this.profile} viajo el dia de hoy a ${this.travel}`
    }
}

console.log("Usuario: "+ twitter.getNombre());
console.log(twitter.getInfo());

console.log("Facebook: "+ facebook.user);
console.log(facebook.getInfo());

console.log("Usuario: "+ uber.profile);
console.log(uber.getInfo());
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())