export const bombaCliInputArgs = {
	command: [{
		name: "command",
		defaultOption: true
	}],
	url: [{
		name: "url",
		defaultOption: true
	}],
	requestArgs: {
		url: [{
			name: "url",
			defaultOption: true
		}],
		options: [
			{
				name: 'header',
				alias: 'h',
				type: String
			},
			{
				name: 'name',
				alias: 'n',
				type: String
			},
			{
				name: 'filter',
				alias: 'f',
				type: String
			}
		]
	}
}