

class Player extends Sprite{
    constructor({position, collisionBlocks, imageSrc, scale, framerate, animations}) {
        super({
            imageSrc,
            scale: 2.5, // Add scale since Sprite expects it
            framerate
        })
        this.position=position
        this.velocity = {
            x: 0,
            y: 1,
        }
        this.width = 100  // Add explicit width
        this.height = 100 // Add explicit height
        this.collisionBlocks = collisionBlocks
        this.hitbox={
            position:{
                x: this.position.x+40,
                y: this.position.y+40
            },
            width: 30,
            height:40
        }
        this.animations = animations
        this.Direction='right '
        for (let key in this.animations){
            const image=new Image()
            image.src=this.animations[key].imageSrc
            this.animations[key].image=image
        }
    }

    updatehitbox(){
        this.hitbox={
            position:{
                x: this.position.x+40,
                y: this.position.y+40
            },
            width: 30,
            height:40
        }
    }

    swapSprite(key){
        if(this.image == this.animations[key].image) return
        
        this.image = this.animations[key].image
        this.framerate=this.animations[key].framerate
        this.framebuffer=this.animations[key].framebuffer
    }


    update() {
        this.updateframe() 
        this.updatehitbox()



        this.draw()
       
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        if(this.position.y+ this.height+this.velocity.y<canvas.height){
            this.velocity.y+= gravity
        }
        else this.velocity.y=0


        
        collisionBlocks.forEach(block => {
            if (checkCollision(this, block)) {
                // Stop downward movement (ground collision)
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    this.position.y = block.y - this.height;
                }

                // Stop upward movement (head collision)
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    this.position.y = block.y + block.height;
                }
                
            }
        })

    }
  
}