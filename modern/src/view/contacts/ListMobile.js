Ext.define('ContactsApp.view.contacts.ListMobile', {
    extend: 'Ext.grid.Grid',

    xtype: 'contactslist',

    requires: [
        'ContactsApp.view.contacts.ContactsController',
        'ContactsApp.view.contacts.ContactsModel',
        'ContactsApp.view.contacts.FormMobile'
    ],

    viewModel: 'contacts',
    controller: 'contacts',
    iconCls: 'fa fa-users',

    bind: {
        store: '{contacts}'
    },

    columns: [
        {
            width: 200,
            dataIndex: 'firstName',
            allowBlank: true,
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
            text: 'Email'
        },
        {
            width: 250,
            dataIndex: 'notes',
            text: 'Notes'
        }
    ],
    items: [
        {
            xtype: 'toolbar',
            layout: {
                type: 'hbox',
                align: 'top',
                pack: 'center'
            },
            items: [
                {
                    text: 'Add',
                    iconCls: 'fa fa-plus',
                    listeners: {
                        tap: 'onAddClickMobile'
                    }
                },
                {
                    text: 'Edit',
                    iconCls: 'fa fa-plus',
                    listeners: {
                        tap: 'onEditClickMobile'
                    }
                },
                {
                    text: 'Delete',
                    iconCls: 'fa fa-trash',
                    listeners: {
                        tap: 'onDeleteClick'
                    }
                }
            ]
        }
    ]
});
