class Elephant {
    constructor(name,color,gender,weight) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
    }
}
let Tuesday = new Elephant('Tuesday','grey','F', 2000)
export default Elephant