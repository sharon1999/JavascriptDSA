class Cookie{
    //called when we create an instance of object
    constructor(color){
        this.color=color
    }
    ///function that can get the color of cookie
    getColor(){
        return this.color
    }
    ///function that can set the color of cookie
    setColor(color){
         this.color = color
    }
}
//Cookie Class Instance
let cookieOne = new Cookie('green')

console.log(cookieOne.getColor())
cookieOne.setColor('blue')
console.log(cookieOne.getColor())