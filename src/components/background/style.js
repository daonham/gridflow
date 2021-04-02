const GridFlowStyleBackground = (styles, device) => {
	const type = styles?.type;

	if (type === "classic") {
		const image = styles?.image;
		const x = styles?.position?.[device]?.x;
		const y = styles?.position?.[device]?.y;

		return {
			"background-color": styles?.color,
			"background-image": styles?.image ? `url(${styles.image})` : undefined,
			"background-position": image && x && y ? `${x * 100}% ${y * 100}%` : undefined,
			"background-repeat": image && styles?.repeat?.[device],
			"background-size": image && styles?.size?.[device],
			"background-attachment": image && styles?.attachment?.[device]
		};
	}

	return {
		background: styles?.gradient
	};
};

export default GridFlowStyleBackground;
