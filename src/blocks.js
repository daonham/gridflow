import { registerBlockType } from '@wordpress/blocks';

// Register block category.
import './utils/category';

// Utils.
import './utils';

// Register custom Hooks.
import './hooks';

// Register Components.
import './components';

// Global Inspector.
import './inspector';

// Register Blocks.
import * as heading from './blocks/heading';

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
	].forEach( registerBlock );
};

registerGridHubBlocks();
