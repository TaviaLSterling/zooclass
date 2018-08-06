class Quail {
    constructor(name,color,gender,weight,height){
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || ''
        this.height = height || ''
    }
}
let Krystal = new Quail('Krystal','brown','F',.5,.5)
export default Quail