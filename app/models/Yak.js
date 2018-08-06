class Yak {
    constructor(name,color,gender,weight,age) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.age = age || 0
    }
}
let Holly = new Yak('Holly','brown','F',700,40)
export default Yak