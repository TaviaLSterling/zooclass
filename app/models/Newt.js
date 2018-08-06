class Newt {
    constructor(name,color,gender,weight,age) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.age = age || 0
    }
}
let Ryan = new Newt('Ryan','yellow','M',.5,10)
export default Newt