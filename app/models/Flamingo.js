class Flamingo {
    constructor(name,color,gender,weight,height) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.height = height || 0
        }
}
let Bob = new Flamingo('Bob','pink','M', 15, 4)
export default Flamingo