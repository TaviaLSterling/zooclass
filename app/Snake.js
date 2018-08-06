class Snake {
    constructor(name,color,gender,length,type) {
        this.id = Math.random()
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.length = length || 0
        this.type = type || ''
    }
}
export default Snake