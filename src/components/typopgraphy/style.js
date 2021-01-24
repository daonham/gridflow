export default function GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device } ) {

	return {
		'font-family': font ? ( font.indexOf( ' ' ) >= 0 ? `"${font}"` : font ) : undefined,
		'font-size': fontSize ? fontSize[ device ] : undefined,
		'line-height': lineHeight ? lineHeight[ device ] : undefined,
		'font-weight': fontWeight ? ( fontWeight === 'regular' ? 400 : fontWeight ) : undefined,
		'text-decoration': decoration || undefined,
		'text-transform': transform || undefined,
		'font-style': fontStyle || undefined,
		'letter-spacing': ( letterSpacing && letterSpacing[ device ] !== null ) ? `${letterSpacing[ device ]}px` : undefined,
	};
}
