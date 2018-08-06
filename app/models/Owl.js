class Owl {
    constructor(name,color,gender,weight,height) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.height = height || 0
    }
}
let Tina = new Owl('Tina','white','F',3,1.5)
export default Owl