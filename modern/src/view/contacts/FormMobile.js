Ext.define('ContactsApp.view.contacts.FormMobile', {
    extend: 'Ext.form.Panel',
    xtype: 'contactsform',
    reference: 'form',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Email'
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
                        tap: 'validationAndSaveMobile'
                    }
                },
                {
                    text: 'Reset',
                    ui: 'action',
                    listeners: {
                        tap: 'onResetMobile'
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






    




















