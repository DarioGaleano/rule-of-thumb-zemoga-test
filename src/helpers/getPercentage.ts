export const getPercentage = (quantity: number, total: number): number => {
	const percentage = (quantity / total) * 100;
	return Number.parseFloat(percentage.toFixed(1));
};
