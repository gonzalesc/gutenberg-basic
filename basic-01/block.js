( function( blocks, components, i18n, element ) {
	var el = element.createElement;
	var blockStyle = { backgroundColor: '#900', color: '#fff', padding: '20px' };

	blocks.registerBlockType( 'gutenberg-block-basic1/hello-world-basic1', {
		title: i18n.__( 'Hello World (Basic 1)' ),

		icon: 'universal-access-alt',

		category: 'layout',

		edit: function() {
			return el( 'p', { style: blockStyle }, 'Hello editor.' );
		},

		save: function() {
			return el( 'p', { style: blockStyle }, 'Hello saved content.' );
		}
	});
} )(
	window.wp.blocks,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
);