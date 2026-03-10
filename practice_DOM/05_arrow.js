const hello ={
    userName: "Ujjval Yadav",
    price: 643736,
    sendMsg: function jayram(){
        console.log(`${this.userName} kya re axis kar liya na `)
    }
}

hello.sendMsg()
hello.userName = "are bap re"
hello.sendMsg()