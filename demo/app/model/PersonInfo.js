Ext.define("demo.model.PersonInfo", {
    extend: "Ext.data.Model",
    config: {
		fields: [
			{
				name: 'name',
				type: 'string'
			},
			{
				name: 'email',
				type: 'string'
			},
			{
				name: 'sex',
				type: 'string'
			}
		]
    }
});
