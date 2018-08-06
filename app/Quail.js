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
export default Quail