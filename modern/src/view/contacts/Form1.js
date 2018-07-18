Ext.define('ContactsApp.view.contacts.Form1', {
    extend: 'Ext.form.Panel',
    xtype: 'contactsform',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Email',
        'Ext.data.validator.Email'
    ],
    layout: {
        type : 'vbox'
    },
    shadow: true,
    id: 'basicform',
    width: '100%',
    zIndex: '999',
    items: [
        {
            xtype: 'fieldset',
            title: 'Contacts Form', 
            items: [
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    label: 'First Name',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    name : 'lastName',
                    label: 'Last Name',
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    name : 'phone',
                    label: 'Phone',
                    required: true,
                    minLength: 8,
                    maxLength: 16,
                    clearIcon: true
                },
                {
                    xtype: 'emailfield',
                    required: true,
                    name: 'email',
                    label: 'Email',
                    clearIcon: true
                },
                {
                    xtype: 'textareafield',
                    name: 'notes',
                    label: 'Notes',
                    clearIcon: true
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center',
            }, 
            defaults: {
                xtype: 'button',
                width: '30%',
                margin: '10'
            },
            items: [
                {
                    text: 'Save',
                    ui: 'action',
                    listeners: {
                        tap: 'onSave'
                    }
                },
                {
                    text: 'Reset',
                    ui: 'action',
                    listeners: {
                        tap: 'onReset'
                    }
                },
                {
                    text: 'Cancel',
                    ui: 'action',
                    listeners: {
                        tap: 'onCancel'
                    }
                }
            ]
        }
    ]
});






    




















