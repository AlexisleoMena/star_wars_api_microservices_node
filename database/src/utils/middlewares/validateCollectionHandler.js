module.exports = (req, res, next) => {
	const { collection } = req.params;
	if(['Character', 'Film', 'Planet'].includes(collection)){
		return next()
	} else {
		throw Error ('Invalid collection');
	}
}