Ext.define('ContactsApp.view.contacts.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'contactslist',

    requires: [
        'Ext.window.Window',
        'ContactsApp.view.contacts.ContactsController',
        'ContactsApp.view.contacts.ContactsModel',
        'ContactsApp.view.contacts.Form',
        'Ext.selection.CheckboxModel',
        'Ext.grid.filters.Filters'
    ],

    viewModel: 'contacts',
    controller: 'contacts',
    plugins: 'gridfilters',
    iconCls: 'fa fa-users',

    bind: {
        title: '{title}',
        store: '{contacts}'
    },

    selModel: {
        selType: 'checkboxmodel'
    },


    columns: {
        items:[
            {
                width: 200,
                dataIndex: 'firstName',
                flex: 1,
                text: 'First Name'
            },
            {
                width: 200,
                dataIndex: 'lastName',
                flex: 1,
                text: 'Last Name'
            },
            {
                width: 200,
                dataIndex: 'phone',
                text: 'Phone'
            },
            {
                width: 250,
                dataIndex: 'email',
                text: 'Email',
                
            },
            {
                width: 250,
                dataIndex: 'notes',
                text: 'Notes',
                sortable: false
            }
        ],
        defaults: {   // The configuration inside defaults will be applied to all items of the columns
            filter: { 
                type: 'string',      
                itemDefaults: {   
                    emptyText: 'Search...' 
                }    
            }
        }
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    text: 'Add',
                    iconCls: 'fa fa-plus',
                    listeners: {
                        click: 'onAddClick'
                    }
                },
                {
                    text: 'Edit',
                    iconCls: 'fa fa-pencil',
                    listeners: {
                        click: 'onEditClick'
                    }
                },
                {
                    text: 'Delete',
                    iconCls: 'fa fa-trash',
                    listeners: {
                        click: 'onDeleteClick'
                    }
                }        
            ]

        }
    ]
});