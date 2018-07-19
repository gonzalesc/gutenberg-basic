
( function( blocks, components, i18n, element ) {
	var el = element.createElement;
	var blockStyle = { backgroundColor: '#900', color: '#fff', padding: '20px' };

	blocks.registerBlockType( 'gutenberg-block-basic2/hello-world-basic2', {
		title: i18n.__( 'Hello World (Basic 2)' ),
		
		icon: 'universal-access-alt',

		category: 'layout',

		edit: function( props ) {
			return el( 'p', { className: props.className }, 'Hello editor.' );
		},

		save: function( props ) {
			return el( 'p', { className: props.className }, 'Hello saved content.' );
		},
	} );
} )(
	window.wp.blocks,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
);