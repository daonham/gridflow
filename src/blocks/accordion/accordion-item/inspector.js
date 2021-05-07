import { __ } from '@wordpress/i18n';
import { InspectorControls, store as blockEditorStore } from '@wordpress/block-editor';
import { PanelBody, Tip, Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

const Inspector = ( { attributes, setAttributes } ) => {
	const { selectBlock } = useDispatch(
		blockEditorStore
	);

	const { firstParentClientId } = useSelect(
		( select ) => {
			const { getBlockParents, getSelectedBlockClientId } = select( blockEditorStore );

			const selectedBlockClientId = getSelectedBlockClientId();
			const parents = getBlockParents( selectedBlockClientId );
			const _firstParentClientId = parents[ parents.length - 1 ];

			return {
				firstParentClientId: _firstParentClientId,
			};
		},
		[]
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<Tip>
						{ __( 'You can configuration in ', 'gridflow' ) }
						<Button
							isLink
							onClick={ () => selectBlock( firstParentClientId ) }
						>
							{ __( 'Accordion', 'gridflow' ) }
						</Button>
					</Tip>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
