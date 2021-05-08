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
import * as progressBar from './blocks/progress-bar';
import * as googleMap from './blocks/google-map';
import * as counter from './blocks/counter';
import * as tab from './blocks/tabs/tab';
import * as tabs from './blocks/tabs';
import * as divider from './blocks/divider';
import * as imageBox from './blocks/image-box';
import * as iconBox from './blocks/icon-box';
import * as socialIcon from './blocks/social';

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
		progressBar,
		googleMap,
		counter,
		tab,
		tabs,
		divider,
		imageBox,
		iconBox,
		socialIcon,
	].forEach( registerBlock );
};

registerGridFlowBlocks();
