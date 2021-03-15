import de_cache from './../../assets/resources/json/de_cache.json';
import de_cbble from './../../assets/resources/json/de_cbble.json';
import de_dust2 from './../../assets/resources/json/de_dust2.json';
import de_inferno from './../../assets/resources/json/de_inferno.json';
import de_mirage from './../../assets/resources/json/de_mirage.json';
import de_nuke from './../../assets/resources/json/de_nuke.json';
import de_overpass from './../../assets/resources/json/de_overpass.json';
import de_train from './../../assets/resources/json/de_train.json';
import de_vertigo from './../../assets/resources/json/de_vertigo.json';

type CoordinatesModel = {
	[key: string]: {
		name: string;
		data: {
			material: string;
			pos_x: string;
			pos_y: string;
			scale: string;
		};
	};
};

export const MAP_COORDS: CoordinatesModel = {
	de_cache,
	de_cbble,
	de_dust2,
	de_inferno,
	de_mirage,
	de_nuke,
	de_overpass,
	de_train,
	de_vertigo,
};
