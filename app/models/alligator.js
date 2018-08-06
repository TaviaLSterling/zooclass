class Alligator {
    constructor(name, color, gender, weight) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
    }
}

let Frank = new Alligator('Frank','green','M', 200)
export default Alligator