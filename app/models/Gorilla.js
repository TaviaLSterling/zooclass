class Gorilla {
    constructor(name,furColor,gender,weight,age) {
        this.id = Math.random()
        this.name = name || ''
        this.furColor = furColor || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.age = age || 0
        }
} 
let Russell = new Gorilla('Russell','black','M',500,25)
export default Gorilla