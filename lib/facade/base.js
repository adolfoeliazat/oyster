// Base Facade

var SecurityHelper = require("../helpers/security");

// all other Facade should compose Base Facade

// Base Controller

function extend(attributes) {

    function BaseFacade(context) {

        //if base creation is not with new keyword then return it with new 
        if (!(this instanceof BaseFacade)) {
            return new BaseFacade(context);
        }
        
        
        // need to change following line probably we will have to predefine attributes that must be defined on every child facade;
        this.attributes = attributes;
        this.context = context;
        
        this.init(context);
        
        SecurityHelper.securify(this);
    }
    
    BaseFacade.prototype.init = function init(context){
        // this method should be override if requried
        return context;
    };
    
    return BaseFacade;
}

module.exports = {
    extend: extend
};
