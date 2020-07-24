module.exports = {
	"env": {
		"browser": true,
		"es2020": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			2
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"newline-after-var": [
			"error",
			"always"
		],
		"no-multiple-empty-lines": [
			"error",
			{ "max": 1, "maxEOF": 0 }
		]
	}
};
