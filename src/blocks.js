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
import * as image from './blocks/image';
import * as icon from './blocks/icon';
import * as accordion from './blocks/accordion';
import * as accordionItem from './blocks/accordion/accordion-item';

const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { metadata, settings, name } = block;

	registerBlockType( name, { ...metadata, ...settings } );
};

/**
 * Function to register blocks.
 */
export const registerGridFlowBlocks = () => {
	[
		heading,
		button,
		image,
		icon,
		accordion,
		accordionItem,
	].forEach( registerBlock );
};

registerGridFlowBlocks();
