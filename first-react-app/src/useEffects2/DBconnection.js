

export function DBconnection(){
    return{
        connect: () => {
            console.log("connection openned.");
        },

        disconnect: () => {
            console.log('disconnected.');
        }
    }
}

