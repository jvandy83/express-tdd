export const validateUsername = (req, res, next) => {
	const { username } = req.body;
	if (username === null) {
		req.validationErrors = {
			username: 'Username cannot be null',
		};
	}
	next();
};
export const validateEmail = (req, res, next) => {
	const { email } = req.body;
	if (email === null) {
		req.validationErrors = {
			...req.validationErrors,
			email: 'E-mail cannot be null',
		};
	}
	next();
};
