import makeListCelebritys from './list-celebritys';
import makeAddVote from './addVote';

const addVote = makeAddVote();
const listCelebritys = makeListCelebritys();

const celebServices = Object.freeze({
	addVote,
	listCelebritys,
});

export default celebServices;
