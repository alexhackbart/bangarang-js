var MivaMerchant = {
    init: function()
    {
        // Don't Edit These
        var mivaScreen = document.body.id;
        String.prototype.toCamelCase = function(){
            return this.replace(/(\-[a-z])/g, function($1){return $1.toUpperCase().replace('-','');});
        };        
        mivaScreen = mivaScreen.toCamelCase();

        if( MivaMerchant[ mivaScreen ] )
        {
            MivaMerchant[ mivaScreen ](); // If the function exists, run it, otherwise, don't do anything (like Jeff).
        }
        
        // You can start adding global functions here, otherwise just drop them
        // in on each page. Note that IDs with a hyphen turn into camelCase.
    },
    
    SFNT: function()
    {
       alert( 'Storefront Page Script!' );
    },

    aboutUs: function() // the id "about-us" becomes "aboutUs"
    {
        alert( 'About Us Page Script!' );
    }

} // end MivaMerchant object

MivaMerchant.init();

// bangarang. 
