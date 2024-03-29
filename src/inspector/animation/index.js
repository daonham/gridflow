import classnames from 'classnames';
import assign from 'lodash/assign';

import { useSelect } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { hasBlockSupport } from '@wordpress/blocks';

import Inspector from './inspector';
import gridflowAttributes from './attributes';

export function addAttributes( settings ) {
	if ( hasBlockSupport( settings, 'gridflowAnimation' ) ) {
		settings.attributes = assign( settings.attributes, gridflowAttributes );
	}

	return settings;
}

export function animationControl( output, name, attributes, setAttributes ) {
	return (
		<>
			{ output }

			{ hasBlockSupport( name, 'gridflowAnimation' ) && (
				<Inspector
					setAttributes={ setAttributes }
					attributes={ attributes }
				/>
			) }
		</>
	);
}

export function addSaveProps( extraProps, blockType, attributes ) {
	if ( ! hasBlockSupport( blockType, 'gridflowAnimation' ) ) {
		return extraProps;
	}

	const { gridflowAnimation, gridflowSpeed, gridflowDelay } = attributes;

	if ( gridflowAnimation?.desktop || gridflowAnimation?.tablet || gridflowAnimation?.mobile ) {
		const animated = {
			type: gridflowAnimation || '',
			speed: gridflowSpeed || '',
			delay: gridflowDelay || '',
		};

		extraProps[ 'data-gridflow-animated' ] = JSON.stringify( animated );
	}

	return extraProps;
}

export const withDataAnimation = createHigherOrderComponent(
	( BlockListBlock ) => ( props ) => {
		const { gridflowAnimation, gridflowSpeed, gridflowDelay } = props.attributes;

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
				{ gridflow__animated: gridflowAnimation?.[ getDevice ] },
				{ [ `gridflow-animate__${ gridflowAnimation?.[ getDevice ] }` ]: gridflowAnimation?.[ getDevice ] },
				{ [ `gridflow_animated__${ gridflowSpeed }` ]: gridflowSpeed },
				{ [ `gridflow_animated__delay-${ gridflowDelay }` ]: gridflowDelay },
				props.wrapperProps?.className
			),
		};

		return <BlockListBlock { ...newProps } />;
	}
);

addFilter( 'blocks.registerBlockType', 'gridflow/inspector/attributes', addAttributes );
addFilter( 'gridflow.inspector.advanced', 'gridflow/animation/inspector', animationControl );
addFilter( 'blocks.getSaveContent.extraProps', 'gridflow/responsive/class', addSaveProps );
addFilter( 'editor.BlockListBlock', 'gridflow/animation/with-data-animation', withDataAnimation );
