/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ContactsApp.Application', { 
    extend: 'Ext.app.Application',
    
    name: 'ContactsApp',
    
    launch: function () {  //The launch function is defined in Ext.app.Application. This function is called after the page is loaded. 
       
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
