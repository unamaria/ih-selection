var PokemonComponent = function (container, pokemon, router) {
	this.pokemon = pokemon
	this.container = container
	this.router = router
}


PokemonComponent.prototype.template = function (pokemon) {
	var pokeInfo = '<h2>' + pokemon.name + '</h2>' +
									'<ul><li>Height: ' + pokemon.height + '</li>' +
									'<li>Weight: ' + pokemon.weight + '</li>' +
									'<li>Speed: ' + pokemon.speed + '</li></ul>';
	var pokeListLink = '<a href="javascript:;" class="js-pokelink">See all pokemons</a>'; 

	return pokeInfo + pokeListLink;
}

PokemonComponent.prototype.render = function () {
	this.container.html(this.template(this.pokemon))
	var pokemon = this
	$('.js-pokelink').on('click', function () {
		// $('.js-pokedex-list').fadeIn();
		debugger
		pokemon.router.renderPokedexComponent()
	})
}


module.exports = PokemonComponent;