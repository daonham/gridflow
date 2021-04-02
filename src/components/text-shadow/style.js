const GridFlowStyleTextShadow = ( textShadow ) => {
	const X = textShadow?.horizontal;
	const Y = textShadow?.vertical;
	const blur = textShadow?.blur;
	const color = textShadow?.color;

	if ( X == undefined && Y == undefined && blur == undefined ) {
		return;
	}

	return {
		"text-shadow": `${X || 0} ${Y || 0} ${blur || 0} ${color || "rgb(0 0 0 / 50%)"}`
	};
};
export default GridFlowStyleTextShadow;
