class Penguin {
    constructor(name,color,gender,height,weight,age) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.height = height || 0
        this.weight = weight || 0
        this.age = age || 0
    }
}
export default Penguin