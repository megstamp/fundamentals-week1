// V. Objects

// Like other variables, objects are used to store data. THERE IS NO ORDER.

// Instead of having multiple variables to represent a single entity, we can store
// key-value pairs in an object, collected in curly braces like so:

// const person = {
//   firstName: "Jiho",
//   lastName: "Sohn",
//   age: 46,
//   ethnicity: "Korean",
//   awesome: true, 
// }

// // destructuring

// We refer to each key-value pair as a property. For example, the person above has a
// firstName property that is equal to "Jiho".

// We can reference each property with bracket notation, like we do an array, or with
// dot notation. Dot notation is the most common, but occasionally, we need to use brackets.

// console.log(person.firstName) // dot notation (most common)

// console.log(person["lastName"]) // bracket notation (used rarely)

// // We can add a new property to an object using either notation:

// person.hair = "black"

// // we can CHANGE a property the same way:

// person.lastName = "SOHN"

// console.log(person)


// ~~~~ PRACTICE ~~~~

// 1. Create an object called car. Add the following keys: make, model, year, miles,
//    and color and set each.

const car = {
  make: "Audi",
  model: "Q3",
  year: 2017,
  miles: 40_000,
  color: "black",
}

// 2. Create an object called movie and add the title, year, and genre of your favorite
//    movie.

const movie = {
  title: "Gone With the Wind",
  year: 1945,
  genre: "documentary",
  actor: "Vivian Leigh",
}

// 3. Using the movie above, print out the title and year of the movie with the year
//    in parenthesis, like "Star Wars (1977)".

console.log(movie.title + " (" +  movie.year +")")
console.log(movie.title + " was produced in " + movie.year)
console.log(movie.title + " is a " + movie.genre)
console.log(movie.actor + " was in a " + movie.genre + " called " + movie.title)





console.log(`${movie.title} (${movie.year})`)

// 4. Add a new property to the movie object called rating and give it a numeric rating.

movie.rating = 95
console.log (movie)



