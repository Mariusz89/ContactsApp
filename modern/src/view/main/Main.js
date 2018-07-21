/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('ContactsApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'ContactsApp.view.contacts.ListMobile',
        'ContactsApp.view.contacts.ContactsController',
        'ContactsApp.view.contacts.ContactsModel'
    ],

    controller: 'main',
    viewModel: 'main',
    defaults: {   
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',
    pack: 'end',

    items: [
        {
            title: 'Contacts',
            iconCls: 'x-fa fa-users',
            layout: {
                type: 'fit'
            },
            width: "100%",
            align: 'stretch',
            items: [{
                xtype: 'contactslist' //I added a component 'contactlist' inside the Form class
            }]
        }
    ]
});