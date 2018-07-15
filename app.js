/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'ContactsApp',  //This line defines the name of application

    extend: 'ContactsApp.Application',  //This line extends ContactsApp.Application, which is declared in Application.js in the App folder

    requires: [
        'ContactsApp.view.main.Main'    //The list of classes required for this class has to be specified in the requires section. 
                                        //These will be loaded first before instantiating this class.
    ],



    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'ContactsApp.view.main.Main'    //The last line specifies the name of the initial view to create. 

    //-------------------------------------------------------------------------
    // Most customizations should be made to ContactsApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
