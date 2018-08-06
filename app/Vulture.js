class Vulture {
    constructor(name,color,gender,weight,wingSpan) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.wingSpan = wingSpan || 0
    }
}
export default Vulture