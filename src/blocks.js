import { registerBlockType } from '@wordpress/blocks';

// Register block category
import './ultils/category';

// Register Blocks
import * as heading from './blocks/heading';

const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, category, attributes, settings } = block;

	registerBlockType( name, { category, attributes, ...settings } );
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
