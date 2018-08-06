class Alligator {
    constructor(name, color, gender, weight) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
    }
}


export default Alligator