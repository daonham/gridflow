import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

const TEMPLATE = [
	[ 'gridflow/heading', { placeholder: __( 'Add content…', 'gridflow' ), tagName: 'p' } ],
];

function Edit( { isSelected, attributes, setAttributes } ) {
	const { uniqueId, index } = attributes;

	return (
		<>
			{ isSelected && (
				<Controls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			{ isSelected && (
				<Inspector
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-tab', `gridflow-tab__panel-${ index }`, uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-tab__inner', 'gridflow-block-inner' ) }>
					<InnerBlocks
						template={ TEMPLATE }
						templateInsertUpdatesSelection={ false }
						__experimentalCaptureToolbars={ true }
					/>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
