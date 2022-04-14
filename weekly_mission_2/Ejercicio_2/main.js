const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]   
   
//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH   
explorers.forEach((element) => console.log("Nombre: "+ element.name))
//Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach((element) => console.log("Nombre: "+ element.name + ", " + "Stack: "+ element.stack))
//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const nuevalista = explorers.map(function(list){ return list.stack})
console.log(nuevalista)
//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const filtro = explorers.filter((score) => score.stack.includes('js'))
console.log(filtro)
//Busca el primer explorer que sea de la CDMX, usa FIND
const buscar = explorers.find((buscar) => buscar.city.includes('CDMX'))
console.log(buscar)
//Obtén la suma de todos los exercises_completed, usa REDUCE
const suma = explorers.reduce((acomulador, element) => acomulador + element.exercises_completed, 0)
console.log("La suma de todos los exercises_completed")
console.log(suma)
//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const cumple = explorers.some((b) =>  b.missions.frontend.exercisesFinished === true)
console.log("Al menos uno cumple con true?" + " " + cumple) //true
//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const condicion = explorers.every((name) => typeof name.missions.onboarding.isFinished === true) // every
console.log("Todos los explorers tienen la propiedad isFinished del onboarding como true? " + condicion)