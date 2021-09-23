import portastic from 'portastic';

export const pickPort = (min, max) => {
	return new Promise<number>((resolve, reject) => {
		const randomlyPicked = Math.floor(Math.random() * (max - min) + min);
		portastic
			.test(Math.floor(randomlyPicked))
			.then(isOpen => resolve(isOpen ? randomlyPicked : pickPort(min, max)))
			.catch(e => reject(e));
	});
}