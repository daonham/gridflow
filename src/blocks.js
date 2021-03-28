import { registerBlockType } from '@wordpress/blocks';

// Register block category.
import './utils/category';

// Register custom Hooks.
import './hooks';

// Register Components.
import './components';

// Global Inspector.
import './inspector';

// Register Blocks.
import * as heading from './blocks/heading';
import * as button from './blocks/button';

const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { metadata, settings, name } = block;

	registerBlockType( name, { ...metadata, ...settings } );
};

/**
 * Function to register blocks provided by CoBlocks.
 */
export const registerGridHubBlocks = () => {
	[
		heading,
		button,
	].forEach( registerBlock );
};

registerGridHubBlocks();
