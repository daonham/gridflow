import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';

const Controls = ( { attributes, setAttributes } ) => {
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
				</ToolbarGroup>
			</BlockControls>
		</>
	);
};
export default Controls;
