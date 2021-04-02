const GridFlowStyleBoxShadow = boxShadow => {
	const X = boxShadow?.horizontal;
	const Y = boxShadow?.vertical;
	const blur = boxShadow?.blur;
	const spread = boxShadow?.spread;
	const color = boxShadow?.color;

	if (
		X == undefined &&
		Y == undefined &&
		blur == undefined &&
		spread == undefined
	) {
		return;
	}

	return {
		"box-shadow": `${X || 0}px ${Y || 0}px ${blur || 0}px ${spread ||
			0}px ${color || "rgb(0 0 0 / 50%)"}`
	};
};

export default GridFlowStyleBoxShadow;
