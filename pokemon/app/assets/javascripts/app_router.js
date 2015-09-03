var PokemonComponent = require ("components/pokemon.js")
var Pokemon = require ("models/pokemon.js")
var PokedexComponent = require ("components/pokedex.js")
var Pokedex = require ("models/pokedex.js")

var Router = function () {}

Router.prototype.renderPokedexComponent = function () {
	console.log('rendering pokedex component')
	var pokedex = new Pokedex()
	var component = new PokedexComponent($(".pokedex-list"), pokedex, this)

	pokedex.fetch(component.render.bind(component))
}

Router.prototype.renderPokemonComponent = function (id) {
	var pokemon = new Pokemon(id)
	var component = new PokemonComponent($(".pokedex-container"), pokemon, this) 

	pokemon.fetch(component.render.bind(component))
}

module.exports = Router;
