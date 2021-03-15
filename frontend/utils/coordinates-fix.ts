import { MAP_COORDS } from '../application/_const/map-coordinates';

export type fixPositionCoordsProps = {
	x: number;
	y: number;
	mapName: string;
};

export const fixPositionCoords = ({ x, y, mapName }: fixPositionCoordsProps) => {
	const { pos_x, pos_y, scale } = MAP_COORDS[mapName].data;

	return {
		x: Math.round(Math.round(x + (0 - +pos_x)) / +scale),
		y: Math.round(Math.abs(Math.round(y + (0 - +pos_y))) / +scale),
	};
};
