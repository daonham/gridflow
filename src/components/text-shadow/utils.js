import { isEmpty } from 'lodash';

export const DEFAULT_VALUES = {
	color: undefined,
	blur: null,
	horizontal: null,
	vertical: null,
};

export function isValuesDefined( values ) {
	return (
		values !== undefined && ! isEmpty( Object.values( values ).filter( Boolean ) )
	);
}
