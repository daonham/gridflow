export default function GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device } ) {

	return {
		'font-family': font ? ( font.indexOf( ' ' ) >= 0 ? `"${font}"` : font ) : undefined,
		'font-size': fontSize?.[ device ],
		'line-height': lineHeight?.[ device ],
		'font-weight': fontWeight ? ( fontWeight === 'regular' ? 400 : fontWeight ) : undefined,
		'text-decoration': decoration || undefined,
		'text-transform': transform || undefined,
		'font-style': fontStyle || undefined,
		'letter-spacing': letterSpacing?.[ device ] ? `${letterSpacing[ device ]}px` : undefined,
	};
}
