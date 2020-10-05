(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;

    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the createCollectable() Function to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * createCollectable() takes these arguments:
     *      
     *      createCollectable(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    function init(game) {
        let createCollectable = collectable.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
         createCollectable(type.steve, 200, 170, 6, 0.7);
        createCollectable(type.max, 350, 230, 9, 0.5);
        createCollectable(type.grace, 450, 100, 7, 0.8);
        createCollectable(type.kennedi, 435, 332, 2, 0.1);
         createCollectable(type.steve, 500, 630, 20, 0.15);
         createCollectable(type.kennedi, 600, 555, 90, 0.80);
        createCollectable(type.grace, 545, 360, 67, 0.60);
        
        // example: 
        createCollectable(type.steve, 200, 170, 6, 0.7);
        type.db         // worth 10 points
type.max        // worth 20 points
type.steve      // worth 30 points
type.grace      // worth 40 points
type.kennedi    // worth 50 points

        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    collectable.init = init;
})(window);