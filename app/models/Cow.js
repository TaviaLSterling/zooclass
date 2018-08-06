class Cow {
    constructor(name,furColor,gender,weight) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.weight = weight || 0
    }
}
let Tonya = new Cow('Tonya','black','F', 500)
export default Cow