/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Checkbox for tangram
        this.gui.add(this.scene, 'displayTangram').name('Display Tangram');

        //Checkbox for cube
        this.gui.add(this.scene, 'displayCube').name('Display Cube');

        //Checkbox for quad cube
        this.gui.add(this.scene, 'displayQuadCube').name('Display Quad Cube');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}