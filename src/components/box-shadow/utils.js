import { isEmpty } from 'lodash';

export const DEFAULT_VALUES = {
	color: undefined,
	horizontal: undefined,
	vertical: undefined,
	blur: undefined,
	spread: undefined,
};

export function isValuesDefined( values ) {
	return ( values !== undefined && ! isEmpty( Object.values( values ).filter( Boolean ) ) );
}
