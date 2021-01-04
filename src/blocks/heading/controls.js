import { __ } from '@wordpress/i18n';
import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { DropdownMenu } from '@wordpress/components';

import getTagIcon from './icons';

const Controls = ( { attributes, setAttributes } ) => {
	const { textAlign, tagName } = attributes;

	const changeTag = ( value ) => {
		setAttributes( { tagName: value } );
	};

	return (
		<>
			<BlockControls>
				<DropdownMenu
					icon={ getTagIcon( tagName ) }
					label={ __( 'Select tag' ) }
					className="components-toolbar"
					controls={ [
						{
							title: __( 'Heading 1' ),
							icon: getTagIcon( 'h1' ),
							onClick: () => changeTag( 'h1' ),
						},
						{
							title: __( 'Heading 2' ),
							icon: getTagIcon( 'h2' ),
							onClick: () => changeTag( 'h2' ),
						},
						{
							title: __( 'Heading 3' ),
							icon: getTagIcon( 'h3' ),
							onClick: () => changeTag( 'h3' ),
						},
						{
							title: __( 'Heading 4' ),
							icon: getTagIcon( 'h4' ),
							onClick: () => changeTag( 'h4' ),
						},
						{
							title: __( 'Heading 5' ),
							icon: getTagIcon( 'h5' ),
							onClick: () => changeTag( 'h5' ),
						},
						{
							title: __( 'Heading 6' ),
							icon: getTagIcon( 'h6' ),
							onClick: () => changeTag( 'h6' ),
						},
						{
							title: __( 'Division' ),
							icon: getTagIcon( 'div' ),
							onClick: () => changeTag( 'div' ),
						},
						{
							title: __( 'Paragraph' ),
							icon: getTagIcon( 'p' ),
							onClick: () => changeTag( 'p' ),
						},
						{
							title: __( 'Span Tag' ),
							icon: getTagIcon( 'span' ),
							onClick: () => changeTag( 'span' ),
						},
					] }
				/>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
			</BlockControls>
		</>
	);
};
export default Controls;
