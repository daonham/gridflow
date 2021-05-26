import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
import { TabPanel } from '@wordpress/components';
import { edit, settings } from '@wordpress/icons';

function GridFlowInspectorControls( { children, name, attributes, setAttributes } ) {
	return (
		<InspectorControls>
			<TabPanel
				tabs={ [
					{
						name: 'normal',
						title: <><span style={ { marginRight: 6 } }>{ edit }</span>{ __( 'Normal', 'gridflow' ) }</>,
						className: 'gridflow-tab-inspector__button gridflow-tab-inspector__normal',
					},
					{
						name: 'advanced',
						title: <><span style={ { marginRight: 6 } }>{ settings }</span>{ __( 'Advanced', 'gridflow' ) }</>,
						className: 'gridflow-tab-inspector__button gridflow-tab-advanced__advanced',
					},
				] }
				className="gridflow-tab-inspector"
			>
				{ ( tab ) => {
					if ( tab.name === 'normal' ) {
						return (
							<>
								{ children }
							</>
						);
					}

					if ( tab.name === 'advanced' ) {
						return (
							<>
								{ applyFilters( 'gridflow.inspector.advanced', null, name, attributes, setAttributes ) }
							</>
						);
					}
				} }
			</TabPanel>
		</InspectorControls>
	);
}
export default GridFlowInspectorControls;
