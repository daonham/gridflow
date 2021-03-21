import classnames from 'classnames';
import assign from 'lodash/assign';

import { useSelect } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

import Inspector from './inspector';
import gridhubAttributes from './attributes';

const allowedBlocks = [
	'gridhub/heading',
];

export function addAttributes( settings ) {
	if ( allowedBlocks.includes( settings.name ) ) {
		settings.attributes = assign( settings.attributes, gridhubAttributes );
	}

	return settings;
}

export const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => ( props ) => {
	return (
		<>
			<BlockEdit { ...props } />
			{ props.isSelected && allowedBlocks.includes( props.name ) && (
				<Inspector
					setAttributes={ props.setAttributes }
					attributes={ props.attributes }
				/>
			) }
		</>
	);
} );

export function addSaveProps( extraProps, blockType, attributes ) {
	const { gridhubAnimation, gridhubSpeed, gridhubDelay } = attributes;

	if ( gridhubAnimation?.desktop || gridhubAnimation?.tablet || gridhubAnimation?.mobile ) {
		const animated = {
			type: gridhubAnimation || '',
			speed: gridhubSpeed || '',
			delay: gridhubDelay || '',
		};

		extraProps['data-animated'] = JSON.stringify( animated );
	}

	return extraProps;
}

export const withDataAnimation = createHigherOrderComponent(
	( BlockListBlock ) => ( props ) => {
		const { gridhubAnimation, gridhubSpeed, gridhubDelay } = props.attributes;

		const getPreviewDeviceType = useSelect( ( select ) => {
			const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

			return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : false;
		}, [] );

		const getDevice = getPreviewDeviceType ? getPreviewDeviceType.toLowerCase() : 'desktop';

		const newProps = { ...props };

		const { wrapperProps } = props;

		newProps.wrapperProps = {
			...wrapperProps,
			className: classnames(
				{'gridhub__animated': gridhubAnimation?.[getDevice]},
				{ [`gridhub-animate__${gridhubAnimation?.[getDevice]}`]: gridhubAnimation?.[getDevice]},
				{ [`gridhub_animated__${gridhubSpeed}`]: gridhubSpeed},
				{ [`gridhub_animated__delay-${gridhubDelay}`]: gridhubDelay},
				props.wrapperProps?.className
			)
		};

		return <BlockListBlock { ...newProps } />;
	}
);

addFilter( 'blocks.registerBlockType', 'gridhub/inspector/attributes', addAttributes );
addFilter( 'editor.BlockEdit', 'gridhub/animation', withInspectorControl );
addFilter( 'blocks.getSaveContent.extraProps', 'gridhub/responsive/class', addSaveProps );
addFilter( 'editor.BlockListBlock', 'gridhub/animation/with-data-animation', withDataAnimation );
