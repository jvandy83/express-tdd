export const validateUser = (req, res, next) => {
	const { username } = req.body;
	if (username === null) {
		return res.status(400).json({
			validationErrors: {
				username: 'Username cannot be null',
			},
		});
	}
	next();
};
