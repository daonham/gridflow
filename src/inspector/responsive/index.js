import classnames from 'classnames';
import assign from 'lodash/assign';

import { useSelect } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

import Inspector from './inspector';
import gridflowAttributes from './attributes';

const allowedBlocks = [
	'gridflow/heading',
	'gridflow/button',
	'gridflow/image',
	'gridflow/icon',
	'gridflow/accordion',
];

export function addAttributes( settings ) {
	if ( allowedBlocks.includes( settings.name ) ) {
		settings.attributes = assign( settings.attributes, gridflowAttributes );
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
	const { gridflowHideDesktop, gridflowHideTablet, gridflowHideMobile } = attributes;

	if ( gridflowHideDesktop && ! extraProps.className.includes( 'gridflow-hidden-desktop' ) ) {
		extraProps.className = classnames( extraProps.className, 'gridflow-hidden-desktop' );
	}

	if ( gridflowHideTablet && ! extraProps.className.includes( 'gridflow-hidden-tablet' ) ) {
		extraProps.className = classnames( extraProps.className, 'gridflow-hidden-tablet' );
	}

	if ( gridflowHideMobile && ! extraProps.className.includes( 'gridflow-hidden-mobile' ) ) {
		extraProps.className = classnames( extraProps.className, 'gridflow-hidden-mobile' );
	}

	return extraProps;
}

export const withDataResponsive = createHigherOrderComponent(
	( BlockListBlock ) => ( props ) => {
		const { gridflowHideDesktop, gridflowHideTablet, gridflowHideMobile } = props.attributes;

		const getPreviewDeviceType = useSelect( ( select ) => {
			const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

			return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : false;
		}, [] );

		let style;

		if ( getPreviewDeviceType === 'Desktop' && gridflowHideDesktop ) {
			style = 'none';
		} else if ( getPreviewDeviceType === 'Tablet' && gridflowHideTablet ) {
			style = 'none';
		} else if ( getPreviewDeviceType === 'Mobile' && gridflowHideMobile ) {
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

addFilter( 'blocks.registerBlockType', 'gridflow/inspector/attributes', addAttributes );
addFilter( 'editor.BlockEdit', 'gridflow/responsive', withInspectorControl );
addFilter( 'blocks.getSaveContent.extraProps', 'gridflow/responsive/class', addSaveProps );
addFilter( 'editor.BlockListBlock', 'gridflow/responsive/with-data-responsive', withDataResponsive );

