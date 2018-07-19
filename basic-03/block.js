( function( blocks, editor, components, i18n, element ) {

	var el = wp.element.createElement;

	blocks.registerBlockType( 'gutenberg-block-basic3/hello-world-basic3', {
		title: 'Hello World (Basic 3)',

		icon: 'universal-access-alt',

		category: 'layout',

		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			}
		},

		edit: function( props ) {
			var content = props.attributes.content;

			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			return el(
				editor.RichText,
				{
					tagName: 'p',
					className: props.className,
					onChange: onChangeContent,
					value: content,
				}
			);
		},

		save: function( props ) {
			var content = props.attributes.content;

			return el( editor.RichText.Content, {
				tagName: 'p',
				className: props.className,
				value: content
			} );
		},
	} );
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
);