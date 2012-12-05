//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'demo': 'app'
});
//</debug>

Ext.application({
    name: 'demo',

    requires: ['Ext.MessageBox',
	],
	
	controllers: ['Application',],
	views: ['Main'],
	stores: ['MyString'],
	models: ['PersonInfo'],

    launch: function() {
        // Initialize the main view
        Ext.Viewport.add(Ext.create('demo.view.Main'));
    },
});
