( function( blocks, editor, components, i18n, element ) {

	var el = wp.element.createElement;

	blocks.registerBlockType( 'gutenberg-block-basic6/hello-world-basic6', {
		title: i18n.__( 'Latest Post Ajax' ),
		icon: 'megaphone',
		category: 'widgets',
		
		edit: function( props ) {
			// ensure the block attributes matches this plugin's name
			return (
				el(components.ServerSideRender, {
					block: "gutenberg-block-basic6/hello-world-basic6",
					attributes:  props.attributes
				})
			);
		},
		

		save: function() {
			// Rendering in PHP
			return null;
		},
	} );
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
);