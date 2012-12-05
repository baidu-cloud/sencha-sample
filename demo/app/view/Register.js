Ext.define('demo.view.Register', {
    extend: 'Ext.form.Panel',
    xtype: 'registerpanel',
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email',
		'Ext.field.Select',
	],
    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Notification Types',
                items: [
                     {
						xtype: 'textfield',
						label: 'Name',
						name: 'name',
						id: 'ID_regName'
					},
					{
						xtype: 'emailfield',
						label: 'Email',
						name: 'email',
						id : 'ID_regEmail'
					},
					{
						xtype: 'selectfield',
                        name: 'sex',
                        label: 'Sex',
                        valueField: 'sex',
                        displayField: 'text', // Defaults
						id: 'ID_regSex',
                        store: {
                            data: [
                                { sex: 'male', text: 'male'},
                                { sex: 'female', text: 'female'}
                            ]
                        }
					}
                ]
            }
        ],
		
		
    }
});
