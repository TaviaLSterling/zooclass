class Duck {
    constructor(name,color,gender,weight) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
    }
}
let Remi = new Duck('Remi','white','F', 8)
export default Duck 