var PokedexComponent = function (container, pokedex, router) {
	this.pokedex = pokedex
	this.container = container
	this.router = router
}

PokedexComponent.prototype.template = function (pokedex) {
 	var names = "";
 	for (var pokemon in pokedex) {
 		if(pokedex[pokemon].resource_uri){
	 		var resource = pokedex[pokemon].resource_uri.substring(15);
	 		var id = parseInt(resource);
			names = names + 
							'<li><a class="js-pokemon" href="javascript:;" ' +
							'data-id="' + id + '" >' + 
							pokedex[pokemon].name + 
							'</a></li>'
 		}
 	}	
 	return names
}

PokedexComponent.prototype.render = function () {
	this.container.html(this.template(this.pokedex))
	var pokedex = this

	$('.js-pokemon').on('click', function (event) {
		event.preventDefault();
		$('.pokedex-list').fadeOut();
		pokedex.router.renderPokemonComponent($(this).data('id'));
	})
}



module.exports = PokedexComponent;