class Unicorn {
    constructor(name,color,gender,weight,age) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.age = age || 0
    }
}
let Cobus = new Unicorn('Cobus','white','M',500, 10)
export default Unicorn