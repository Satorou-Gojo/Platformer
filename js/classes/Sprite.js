class Sprite {
    constructor({ position, imageSrc, scale , framerate=1}) {
        this.position = position;
        this.image = new Image();
        this.image.onload=()=>{
            this.width=this.image.width/this.framerate
            this.height=this.image.height
        }
        this.image.src = imageSrc;
        this.scale = scale;
        this.framerate=framerate
        this.currentframe=0
        this.framebuffer=2 
        this.elapsedframes=0
    }

    draw() {
        if (!this.image) return;
        const cropbox={
            position: { 
                x:this.currentframe*(this.image.width/this.framerate),
                y:0
            },
            width: this.image.width/this.framerate,
            height:this.image.height,
        }
        c.drawImage(
            this.image,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
            this.image.width * this.scale,
            this.image.height * this.scale
        );
    }

    update() {
        this.draw();
    }
    updateframe(){
        this.elapsedframes++
        if(this.elapsedframes%this.framebuffer===0){
        if(this.currentframe<this.framerate-1)
        this.currentframe++
        else this.currentframe=0
        }
    }
}