Ext.define('ContactsApp.view.contacts.Form1', {
    extend: 'Ext.form.Panel',
    xtype: 'contactsform',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Email',
        'Ext.data.validator.Email' 
    ],
    shadow: true,
    cls: 'demo-solid-background',
    id: 'basicform',
    items: [
        {
            xtype: 'form',
            id: 'fieldset1',
            title: 'Personal Info',
            instructions: 'Please enter the information above.',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    label: 'Name',
                    placeHolder: 'Tom Roy',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    name : 'lastName',
                    label: 'Last Name',
                    clearIcon: true
                },
                {
                    xtype: 'textfield',
                    name : 'phone',
                    label: 'Phone',
                    minLength: 8,
                    maxLength: 16,
                    regex: /^\d+$/,
                    clearIcon: true
                },
                {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email',
                    placeHolder: 'me@sencha.com',
                    regex: /^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/,
                    clearIcon: true
                },
                {
                    xtype: 'textareafield',
                    name: 'notes',
                    label: 'Notes'
                }
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    text: 'Disable fields',
                    ui: 'action',
                    scope: this,
                    hasDisabled: false,
                    handler: function (btn) {
                                        var form = this.up('form').getForm();
                                        if (form.isValid()) {
                                            form.submit({
                                                url: 'cutomer/feedback',
                                                success: function () {

                                                },
                                                failure: function () {

                                                }
                                            });
                                        } else {
                                            Ext.Msg.alert('Error', 'Fix the errors in the form')
                                        }
                                    }
                },
                {
                    text: 'Reset',
                    ui: 'action',
                    listeners: {
                     click: 'onReset'

                 }
                }
            ]
        }
    ]
});






    




















