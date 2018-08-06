class Jellyfish {
    constructor(name,color,gender,weight,length) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.length = length || 0
    }
}
export default Jellyfish