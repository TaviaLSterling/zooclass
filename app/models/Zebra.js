class Zebra {
    constructor(name,color,gender,weight,height,age) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.height = height || 0
        this.age = age || 0
    }
}
export default Zebra