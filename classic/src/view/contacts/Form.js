Ext.define('ContactsApp.view.contacts.Form', {  //Ext.define is a method call of the Ext singleton class
    extend: 'Ext.window.Window',      // The form class will inherit the behavior from the Window class
    xtype: 'contactsform',       //The xtype class is a shorter name that can be used to instantiate the class instead of using its full name.

    requires: [
        'Ext.layout.container.Fit',
        'Ext.layout.container.HBox',
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],

    layout: 'fit',  //The fit layout is used when the parent container Form has only one child, and this child will occupy all the available space of the parent container.
    width: 350,
    closable: false,  //Hide the X 'close' icon
    modal: true,     //The window will be floating

    bind: {
        title: '{windowTitle}' // Data binding to automatically set the title of the window
    },

    items: [
        {
            xtype: 'form',   
            padding: '5 5 0 5',  
            border: false,
            style: 'background-color: #fff;',

            fieldDefaults: {
                anchor: '100%',  // Everything fields will occupy all the horizontal available space of the body of the form
                labelAlign: 'left',
                combineErrors: true,  //The field container will automatically combine and display the validation errors from all the fields
                msgTarget: 'side',  //Add an error icon to the right of the field
                fieldCls: 'fixed'//fix for textfield text in Chrome
            },

            items: [
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    fieldLabel: 'First Name',
                    allowBlank: false    //Required field
                },
                {
                    xtype: 'textfield',
                    name: 'lastName',
                    fieldLabel: 'Last Name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    fieldLabel: 'Phone',
                    allowBlank: false,
                    minLength: 8,
                    maxLength: 16,
                    regex: /^\d+$/
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email',
                    allowBlank: false,
                    regex: /^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/
                },
                {
                    xtype: 'textarea',
                    name: 'notes',
                    fieldLabel: 'Notes'
                }
            ]
        }
    ],

    dockedItems: [ //This component is added as docked items to the panel
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',   //The buttons are setting on the right-hand side of the toolbar
                type: 'hbox'  //The VBox layout aligns the child items horizontally
            },
            items: [
                {
                    text: 'Save',
                    iconCls: 'fa fa-floppy-o', //We are setting iconCls to the Form window
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    text: 'Cancel',
                    iconCls: 'fa fa-close',
                    listeners: {
                        click: 'onCancel'
                    }
                },
                {
                    text: 'Reset',
                    iconCls: 'fa fa-scissors',
                    listeners: {
                        click: 'onReset'
                    }
                }
            ]
        }
    ]
});