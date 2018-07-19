( function( blocks, editor, components, i18n, element ) {

	var el = wp.element.createElement;

	blocks.registerBlockType( 'gutenberg-block-basic5/hello-world-basic5', {
		title: i18n.__( 'Latest Post API' ),
		icon: 'megaphone',
		category: 'widgets',

		edit: components.withAPIData( function() {
			return {
				posts: '/wp/v2/posts?per_page=1'
			};
		} )( function( props ) {
			if ( ! props.posts.data ) {
				return "loading !";
			}
			if ( props.posts.data.length === 0 ) {
				return "No posts";
			}
			var className = props.className;
			var post = props.posts.data[ 0 ];

			return el(
				'a', 
				{ className: className, href: post.link },
				post.title.rendered + ' ( From API)'
			);
		} ),
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