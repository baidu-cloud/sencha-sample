Ext.define('demo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.device.Push',
        'demo.view.Register'
    ],
    config: {
		navigationBar: false,
        autoDestroy: false,

        items: [
            {
				xtype: 'button',
				text: 'add',
				id: 'ID_add',
				width: 90,
				height: 30,
				top: 10,
				left: 10,
            },
			{
				xtype: 'button',
				text: 'submit',
				id: 'ID_submit',
				hidden: true,
				width: 90,
				height: 30,
				top: 10,
				left: 10,
            },
			{
				xtype: 'button',
				text: 'back',
				id: 'ID_back',
				hidden: true,
				width: 90,
				height: 30,
				top: 10,
				left: 110,
            },
			{
				//xtype: 'list', // 利用 xtype 重新定义的名字，即widget.list 
				xclass: 'Ext.dataview.List', // 全称
				id: 'ID_list',
				fullscreen: true,
				top: 50,
				width: '100%',
				height: '100%',
				store: 'MyString',
				itemTpl: "{name}  {email}  ({sex})"
			},
			{
				xtype: 'registerpanel',
				id: 'ID_registerpanel',
				hidden: true,
				fullscreen: true,
				top: 50,
				width: '100%',
				height: '100%',
			}
        ],
    }
});
