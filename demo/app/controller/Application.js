Ext.define('demo.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
			addButton: '#ID_add',
			submitButton: '#ID_submit',
			backButton: '#ID_back',
			listShow: '#ID_list',
			registerPanel: '#ID_registerpanel',
        },
        control:{
            addButton: {
                tap: 'onAdd'
            },
			submitButton: {
                tap: 'onSubmit'
            },
			backButton: {
                tap: 'onBack'
            }
        }
    },
	
	onAdd: function() {
        this.getListShow().hide();
		this.getRegisterPanel().show();
        this.getAddButton().hide();
		this.getSubmitButton().show();
		this.getBackButton().show();
    },
	
	onSubmit: function() {
		var theStore = Ext.getStore('MyString'); // 得到store对象
			
		Ext.getStore('MyString').add({name: Ext.getCmp("ID_regName").getValue(), 
									 email: Ext.getCmp("ID_regEmail").getValue(), 
									 sex: Ext.getCmp("ID_regSex").getValue()});
		
		// 将注册框恢复为 默认值
		Ext.getCmp("ID_regName").setValue('');
		Ext.getCmp("ID_regEmail").setValue('');
		Ext.getCmp("ID_regSex").setValue('male');
		
        this.getListShow().show();
		this.getRegisterPanel().hide();
        this.getAddButton().show();
		this.getSubmitButton().hide();
		this.getBackButton().hide();
    },
	
	onBack: function() {
        this.getListShow().show();
		this.getRegisterPanel().hide();
        this.getAddButton().show();
		this.getSubmitButton().hide();
		this.getBackButton().hide();
    },
});
