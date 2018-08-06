class Walrus {
    constructor(name,color,gender,weight,age) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.age = age || 0
    }
}
let Wally = new Walrus('Wally',"brown",'M',500, 17)
export default Walrus