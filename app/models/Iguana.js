class Iguana {
    constructor(name,color,gender,weight,age,length) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.age = age || 0
        this.length = length || 0
    }
}
let Chad = new Iguana('Chad','green','M',7,31,3.5)
export default Iguana