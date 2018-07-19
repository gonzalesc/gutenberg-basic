( function( blocks, editor, components, i18n, element ) {

	var el = wp.element.createElement;

	blocks.registerBlockType( 'gutenberg-block-basic4/hello-world-basic4', {
		title: i18n.__( 'Hello World (Basic 4)' ),

		icon: 'universal-access-alt',

		category: 'layout',

		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			alignment: {
				type: 'string',
			},
		},

		edit: function( props ) {
			var content = props.attributes.content,
				alignment = props.attributes.alignment;

			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
			}

			return [
				el(
					editor.BlockControls,
					{ key: 'controls' },
					el(
						editor.AlignmentToolbar,
						{
							value: alignment,
							onChange: onChangeAlignment
						}
					)
				),
				el(
					editor.RichText,
					{
						key: 'editable',
						tagName: 'p',
						className: props.className,
						style: { textAlign: alignment },
						onChange: onChangeContent,
						value: content,
					}
				)
			];
		},

		save: function( props ) {
			var content = props.attributes.content,
				alignment = props.attributes.alignment;

			return el( editor.RichText.Content, {
				className: props.className,
				style: { textAlign: alignment },
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