Ext.define('ContactsApp.model.Contact', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.LocalStorage',
    ],

    entityName: 'Contact',

    fields: [
        { name: 'firstName', type: 'string'},
        { name: 'lastName', type: 'string'},
        { name: 'phone', type: 'number' },
        { name: 'email', type: 'string' },
        { name: 'notes', type: 'string' }
    ],

    proxy: {
        type: 'localstorage',
        id  : 'contacts'
    }
});
