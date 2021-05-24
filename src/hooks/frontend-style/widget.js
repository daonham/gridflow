import { select } from '@wordpress/data';
import { getWidgetIdFromBlock } from '@wordpress/widgets';
import { store as blockEditorStore } from '@wordpress/block-editor';

import getStyles from './styles';

function saveWidgetStyle() {
	const allWidgets = select( 'core/edit-widgets' )?.getWidgetAreas();

	console.log( allWidgets );
}
export default saveWidgetStyle;

