Ext.define('demo.store.MyString', {
    extend: 'Ext.data.Store',
	
	config: {
		model: 'demo.model.PersonInfo',
		//autoLoad: true
	}
});