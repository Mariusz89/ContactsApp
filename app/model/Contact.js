Ext.define('ContactsApp.model.Contact', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.LocalStorage',
        'Ext.data.validator.Presence',
        'Ext.data.validator.Format',
        'Ext.data.validator.Validator'
    ],

    entityName: 'Contact',

    fields: [
        { name: 'firstName', type: 'string'},
        { name: 'lastName', type: 'string'},
        { name: 'phone', type: 'number' },
        { name: 'email', type: 'string' },
        { name: 'notes', type: 'string' }
    ],

    validations : [{
        type: 'presence',
        field: 'firstName', 
        message: 'First name can not be blank.'
        },{
        type  : 'presence',
        field : 'lastName',
        message: 'Last Name can not be blank.'
        },{
        type  : 'format',
        field : 'phone',
        min   : 8,
        max   : 16,
        matcher: /^[0-9]{8,17}$/,
        message: 'Phone is not in valid range.'
        },{
        type  : 'format',
        field : 'email',
        matcher: /^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/,
        message: 'Email wrong format.'
    }],

    proxy: {
        type: 'localstorage',
        id  : 'contacts'
    }
});
