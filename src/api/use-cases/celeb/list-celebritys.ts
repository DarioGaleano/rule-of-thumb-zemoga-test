import { celebsModel } from '../../models';
import { Celebs } from '../../../types/types';

export default function makeListCelebritys() {
	return async () => {
		const users = (await celebsModel?.find({})) as Celebs[];
		return users;
	};
}
