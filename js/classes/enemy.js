class Enemy extends Sprite {
    constructor({position, imageSrc, framerate, animations}) {
        super({
            position,
            imageSrc,
            scale: 1,
            framerate
        })
        this.currentframe = 0
        this.framebuffer = 8
        this.elapsedframes = 0
        this.isHit = false
        this.isDead = false
        this.hitCount = 0
        this.hitbox = {
            position: {
                x: this.position.x + 35,
                y: this.position.y + 35
            },
            width: 30,
            height: 40
        }
        this.animations = animations
        
        // Load all animations
        for (let key in this.animations) {
            const image = new Image()
            image.src = this.animations[key].imageSrc
            this.animations[key].image = image
        }
    }

    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x + 35,
                y: this.position.y + 35
            },
            width: 30,
            height: 40
        }
    }

    swapSprite(key) {
        if (this.image === this.animations[key].image) return
        
        this.currentframe = 0
        this.image = this.animations[key].image
        this.framerate = this.animations[key].framerate
        this.framebuffer = this.animations[key].framebuffer
    }

    checkHit(player) {
        return (
            !this.isDead &&
            player.hitbox.position.x + player.hitbox.width >= this.hitbox.position.x &&
            player.hitbox.position.x <= this.hitbox.position.x + this.hitbox.width &&
            player.hitbox.position.y + player.hitbox.height >= this.hitbox.position.y &&
            player.hitbox.position.y <= this.hitbox.position.y + this.hitbox.height &&
            keys.g.pressed
        )
    }

    update(player) {
        if (!this.isDead || (this.isDead && this.currentframe < this.framerate - 1)) {
            this.updateHitbox();
            this.updateframe();
    
            if (this.checkHit(player)) {
                this.hitCount++;
                this.swapSprite('TakeHit');
                this.isHit = true;
    
                if (this.hitCount >= 100) {
                    this.isDead = true;
                    this.swapSprite('Death');
                    setTimeout(() => {
                        if (playerAddress) {
                            mintEnemyNFT(playerAddress);
                        }
                    }, 1000);
                }
            } else if (this.currentframe === this.framerate - 1 && this.isHit && !this.isDead) {
                this.swapSprite('Idle');
                this.isHit = false;
            }
    
            this.draw();
        }
    
        // Only return `true` if death animation has **completely finished**
        if (this.isDead && this.currentframe === this.framerate - 1) {
            return true;
        }
    
        return false;
    }
}    