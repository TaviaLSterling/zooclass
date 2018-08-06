class Beaver {
    constructor(name,furColor,gender,weight) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.weight = weight || 0
    }
}
let Trace = new Beaver('Trace', 'brown','M', 90)
export default Beaver