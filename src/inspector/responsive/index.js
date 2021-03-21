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

export const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
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
	};
}, 'withInspectorControl' );

export function addSaveProps( extraProps, blockType, attributes ) {
	const { hideDesktop, hideTablet, hideMobile } = attributes;

	if ( hideDesktop && ! extraProps.className.includes( 'gridhub-hidden-desktop' ) ) {
		extraProps.className = classnames( extraProps.className, 'gridhub-hidden-desktop' );
	}

	if ( hideTablet && ! extraProps.className.includes( 'gridhub-hidden-tablet' ) ) {
		extraProps.className = classnames( extraProps.className, 'gridhub-hidden-tablet' );
	}

	if ( hideMobile && ! extraProps.className.includes( 'gridhub-hidden-mobile' ) ) {
		extraProps.className = classnames( extraProps.className, 'gridhub-hidden-mobile' );
	}

	return extraProps;
}

export const withDataResponsive = createHigherOrderComponent(
	( BlockListBlock ) => ( props ) => {
		const { hideDesktop, hideTablet, hideMobile } = props.attributes;

		const getPreviewDeviceType = useSelect( ( select ) => {
			const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

			return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : false;
		}, [] );

		let style;

		if ( getPreviewDeviceType === 'Desktop' && hideDesktop ) {
			style = 'none';
		} else if ( getPreviewDeviceType === 'Tablet' && hideTablet ) {
			style = 'none';
		} else if ( getPreviewDeviceType === 'Mobile' && hideMobile ) {
			style = 'none';
		}

		const newProps = { ...props };

		const { wrapperProps } = props;

		newProps.wrapperProps = {
			...wrapperProps,
			style: {
				display: style,
				...props.wrapperProps?.style,
			},
		};

		return <BlockListBlock { ...newProps } />;
	}
);

addFilter( 'blocks.registerBlockType', 'gridhub/inspector/attributes', addAttributes );
addFilter( 'editor.BlockEdit', 'gridhub/responsive', withInspectorControl );
addFilter( 'blocks.getSaveContent.extraProps', 'gridhub/responsive/class', addSaveProps );
addFilter( 'editor.BlockListBlock', 'gridhub/responsive/with-data-responsive', withDataResponsive );

