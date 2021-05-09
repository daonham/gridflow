import classnames from 'classnames';

import { compose } from '@wordpress/compose';
import { useBlockProps, __experimentalUseInnerBlocksProps as useInnerBlocksProps } from '@wordpress/block-editor';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

const ALLOWED_BLOCKS = [ 'gridflow/icon' ];
const ICON_TEMPLATE = [
	[
		'gridflow/icon',
		{
			icon: {
				icon: 'fab fa-facebook-f',
				url: null,
				alt: null,
			},
			fontSize: {
				desktop: 24,
				tablet: null,
				mobile: null,
			},
		},
	],
	[
		'gridflow/icon',
		{
			icon: {
				icon: 'fab fa-twitter',
				url: null,
				alt: null,
			},
			fontSize: {
				desktop: 24,
				tablet: null,
				mobile: null,
			},
		},
	],
	[
		'gridflow/icon',
		{
			icon: {
				icon: 'fab fa-instagram',
				url: null,
				alt: null,
			},
			fontSize: {
				desktop: 24,
				tablet: null,
				mobile: null,
			},
		},
	],
	[
		'gridflow/icon',
		{
			icon: {
				icon: 'fab fa-linkedin-in',
				url: null,
				alt: null,
			},
			fontSize: {
				desktop: 24,
				tablet: null,
				mobile: null,
			},
		},
	],
];

function Edit( { isSelected, attributes, setAttributes, clientId } ) {
	const { uniqueId } = attributes;

	const innerBlocksProps = useInnerBlocksProps( { className: 'gridflow-social-icons__items' }, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: ICON_TEMPLATE,
		orientation: 'horizontal',
		templateInsertUpdatesSelection: true,
	} );

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
					clientId={ clientId }
				/>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-social-icons', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-social-icons__inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-social-icons__wrapper' }>
						<div { ...innerBlocksProps } />
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );