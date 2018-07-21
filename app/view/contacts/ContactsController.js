Ext.define('ContactsApp.view.contacts.ContactsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacts',

    requires: [
        'ContactsApp.model.Contact'
    ],

    onAddClick: function(button, e, options){
        this.createDialog();
    },

    onEditClick: function(button, e, options){
    //The me variable makes a reference to this, which is the ContactsController class.   
        var me = this,  
            records = me.getRecordsSelected(); //Get the selected records from the Grid 

        if(records[0]){
            me.createDialog(records[0]);  //If a record was selected, we create the window passing the record 
        }
    },

    createDialog: function(record){
    //We can reference the Form(window) class by calling the method getView of the ViewController class
        var me = this,
            view = me.getView(); 

        me.isEdit = !!record;

        me.dialog = view.add({        //Method add returns new instance of the new component
            xtype: 'contactsform',   //Create new window form and assign it to a variable dialog
            iconCls: record ? 'fa fa-pencil' : 'fa fa-plus',
            viewModel: {
                data: {
                    windowTitle: record ? 'Edit: ' + record.get('firstName') : 'Add Contact'
                }
            }
        });

    //If there is an existing record, it uses a copy of it, and if not, it creates a new record 
        if(record){                                    
            me.dialog.down('form').loadRecord(record);   
        }

        me.dialog.show();
    },

    onSave: function(button, e, options){
        var me = this,
            form = me.dialog.down('form'), //Get the form reference 
            isEdit = me.isEdit,
            record = form.getRecord(),    
            values = form.getValues(),
            store = me.getView().getStore();

            if (isEdit) {
                record.set(values);
                me.onCancel(); //Method onCancel closing and destroying the window Form
                Ext.Msg.alert('Message', 'Contact has been saved successfully!');
            }  else{
                record = Ext.create('ContactsApp.model.Contact');
                record.set(values);
                record.setId(0);
                store.add(record);
                Ext.Msg.alert('Message', 'Contact has been saved successfully!');
                me.onCancel();
            }
    
        store.sync();
    },

    validationAndSave: function() {
        var me = this;
        var form = me.dialog.up().down('form');
        var user = Ext.create('ContactsApp.model.Contact', form.getValues());
        var errors = user.validate();
        if(!errors.isValid()) {
            var errorMsg = "";
            errors.each(function (item, index, length) {
                errorMsg += ' ' + item.getMessage() + '<br/>';
            });
            Ext.Msg.alert("Validation Failed", errorMsg);
          }
          else {
            this.onSave();
        }
    },

    onReset: function() {
        var me = this;
        me.dialog.down('form').reset();
    },

    //Modern version - Mobile devices
    onAddClickMobile: function(button, e, options){
        this.createDialogMobile();
    },

    onEditClickMobile: function(button, e, options){
    //The me variable makes a reference to this, which is the ContactsController class.   
        var me = this,  
            records = me.getRecordsSelected(); //Get the selected records from the Grid 

        if(records){
            me.createDialogMobile(records);  //If a record was selected, we create the window passing the record 
        }
    },

    createDialogMobile: function(record){
    //We can reference the Form(window) class by calling the method getView of the ViewController class
        var me = this,
            view = me.getView(); 

        me.isEdit = !!record;

        me.dialog = view.add({        //Method add returns new instance of the new component
            xtype: 'contactsform'   //Create new window form and assign it to a variable dialog
        });

        //If there is an existing record, it uses a copy of it, and if not, it creates a new record 
        if(record){                                    
            Ext.ComponentQuery.query('contactsform')[0].setRecord(record);   
        }
    
        me.dialog.show();
    },

    onSaveMobile: function(button, e, options){     
        var me = this,
            form = Ext.ComponentQuery.query('contactsform')[0], //Get the form reference 
            isEdit = me.isEdit,
            record = form.getRecord(),    
            values = form.getValues(),
            store = me.getView().getStore();
     
            if (isEdit) {
                record.set(values);
                me.onCancel(); //Method onCancel closing and destroying the window Form
            }  else{
                record = Ext.create('ContactsApp.model.Contact');
                record.set(values);
                store.add(record);
                Ext.Msg.alert('Message', 'Contact has been saved successfully!');
                me.onCancel();
            }
    
        store.sync();
    },

    validationAndSaveMobile: function() {
        var me = this;
        var form = me.dialog.up().down('formpanel');
        var user = Ext.create('ContactsApp.model.Contact', form.getValues());
        var errors = user.validate();
        if(!errors.isValid()) {
            var errorMsg = "";
            errors.each(function (item, index, length) {
                errorMsg += ' ' + item.getMessage() + '<br/>';
            });
            Ext.Msg.alert("Validation Failed", errorMsg);
          }
          else {
            this.onSaveMobile();
        }
    },

    onResetMobile: function() {
        Ext.ComponentQuery.query('contactsform')[0].reset();
    },

    //Common methods for modern and classic versions
    onDeleteClick: function (button, e, options) {
        var me = this,
            records = me.getRecordsSelected(),
            store = me.getView().getStore();

        //The method checks if selected any row from the grid to be deleted
        if (records){
            Ext.Msg.confirm('Delete contact', 'Are you sure want to delete this contact?',
                function (choice) {
                    if (choice === 'yes') { 
                    //If the user click yes, the row is removed 
                        store.remove(records);
                    //The store is synchronized
                        store.sync();
                        Ext.Msg.alert('Message', 'Contact has been deleted!');
                    }
                }
            )
        }
    },

    /*
    *Get a reference of the  grid row, 
    *and by accessing its getSelection method, we can get the rows selected.
    */
    getRecordsSelected: function(){             
        return this.getView().getSelection();
    }, 

    onCancel: function(button, e, options){
        var me = this;
        me.dialog = Ext.destroy(me.dialog); //Destroy window Form
    },
});



