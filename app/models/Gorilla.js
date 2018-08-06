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
export default Gorilla