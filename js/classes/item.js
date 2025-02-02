class Item {
    constructor({position, imageSrc, scale = 1}) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        
        // Set default size - will be updated when image loads
        this.width = 50
        this.height = 50
        
        // Update dimensions when image loads
        this.image.onload = () => {
            this.width = this.image.width * this.scale
            this.height = this.image.height * this.scale
        }
    }

    draw() {
        if (!this.image) return
        
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {
        this.draw()
    }
}