const gridflowAttributes = {
	gridflowZindex: {
		type: 'object',
	},
	gridflowPosition: {
		type: 'object',
	},
	gridflowPositionHorizontal: {
		type: 'object',
		default: {
			desktop: 'left',
			table: 'left',
			mobile: 'left',
		},
	},
	gridflowPositionHorizontalOffset: {
		type: 'object',
	},
	gridflowPositionVertical: {
		type: 'object',
		default: {
			desktop: 'top',
			table: 'top',
			mobile: 'top',
		},
	},
	gridflowPositionVerticalOffset: {
		type: 'object',
	},
};
export default gridflowAttributes;
