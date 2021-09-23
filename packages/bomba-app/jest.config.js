module.exports = {
	preset: 'ts-jest',
	moduleNameMapper: {
		"bomba-(.+)": "<rootDir>../$1/src",
		"bomba": "<rootDir>../bomba/src"
	}
};