import { isEmpty } from 'lodash';

export const DEFAULT_VALUES = {
	color: undefined,
	horizontal: null,
	vertical: null,
	blur: null,
	spread: null,
};

export function isValuesDefined( values ) {
	return ( values !== undefined && ! isEmpty( Object.values( values ).filter( Boolean ) ) );
}
