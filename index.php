<?php
/*
 * Plugin Name: Basic Block
 * Plugin URI: https://www.letsgodev.com/
 * Description: Basic
 * Version: 1.0.0
 *
 * Author:      Alexander Gonzales
 * Author URI:  https://vcard.gonzalesc.org
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package    Basic
 * @subpackage Root
 * @author     Alexander Gonzales <alex@gonzalesc.org>
 * @since      1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) )
	exit;

/**
 * Enqueue the block's assets for the editor.
 *
 * `wp-blocks`: Includes block type registration and related functions.
 * `wp-element`: Includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function gutenberg_custom_basic_block() {

	/**************
		BASIC1
	**************/
	wp_register_script(
		'gutenberg-custom-basic1',
		plugins_url( 'basic-01/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);

	register_block_type( 'gutenberg-block-basic1/hello-world-basic1',
						array( 'editor_script' => 'gutenberg-custom-basic1')
					);




	/**************
		BASIC2
	**************/
	/*	BACKEND	*/
	wp_register_script(
		'gutenberg-custom-basic2',
		plugins_url( 'basic-02/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);

	wp_register_style(
		'gutenberg-editor-basic2',
		plugins_url( 'basic-02/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'basic-02/editor.css' )
	);

	/*	FRONTEND	*/
	wp_register_style(
		'gutenberg-style-basic2',
		plugins_url( 'basic-02/style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'basic-02/style.css' )
	);

	/* REGISTER BLOCK */
	register_block_type( 'gutenberg-block-basic2/hello-world-basic2', array(
								'editor_script' => 'gutenberg-custom-basic2',
								'editor_style'	=> 'gutenberg-editor-basic2',
								'style'			=> 'gutenberg-style-basic2'
							)
						);



	/**************
		BASIC3
	**************/
	/*	BACKEND	*/
	wp_register_script(
		'gutenberg-custom-basic3',
		plugins_url( 'basic-03/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);


	/* REGISTER BLOCK */
	register_block_type( 'gutenberg-block-basic3/hello-world-basic3', array(
								'editor_script' => 'gutenberg-custom-basic3'
							)
						);



	/**************
		BASIC4
	**************/
	/*	BACKEND	*/
	wp_register_script(
		'gutenberg-custom-basic4',
		plugins_url( 'basic-04/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);


	/* REGISTER BLOCK */
	register_block_type( 'gutenberg-block-basic4/hello-world-basic4', array(
								'editor_script' => 'gutenberg-custom-basic4'
							)
						);



	/**************
		BASIC5
	**************/
	/*	BACKEND	*/
	wp_register_script(
		'gutenberg-custom-basic5',
		plugins_url( 'basic-05/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);

	/* REGISTER BLOCK */
	register_block_type( 'gutenberg-block-basic5/hello-world-basic5', array(
								'editor_script' => 'gutenberg-custom-basic5'
							)
						);


	/**************
		BASIC6
	**************/
	/*	BACKEND	*/
	wp_register_script(
		'gutenberg-custom-basic6',
		plugins_url( 'basic-06/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);

	include_once plugin_dir_path( __FILE__ ). '/basic-06/block.php';

	/* REGISTER BLOCK */
	register_block_type( 'gutenberg-block-basic6/hello-world-basic6', array(
								'editor_script' => 'gutenberg-custom-basic6',
								'render_callback' => 'gutenberg_render_basic6',
							)
						);
}
add_action('init','gutenberg_custom_basic_block');
?>