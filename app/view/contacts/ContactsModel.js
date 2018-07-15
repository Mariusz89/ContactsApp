Ext.define('ContactsApp.view.contacts.ContactsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.contacts',

    requires: [
        'ContactsApp.model.Contact'
    ],

    stores: {
        contacts: {
            model: 'ContactsApp.model.Contact',
            autoLoad: true
        }
    },

    data: {
        title: 'Contacts List'
    }
});