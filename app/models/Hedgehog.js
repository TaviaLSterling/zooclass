class Hedgehog {
    constructor(name,color,gender,weight,age) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.age = age || 0
    }
}
let Diane = new Hedgehog('Diane','brown','F', .5, 70)
export default Hedgehog