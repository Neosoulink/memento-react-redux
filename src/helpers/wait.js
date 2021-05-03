export default function wait(duration = 1000, launchErr = false) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			return launchErr ? rej({}) : res({});
		}, duration);
	});
}
