export default {
    port: process.env.PORT ?? 5000, 
    fetch(request){
        const data = { code: 200, message: "WELCOME TO BUN HTTP" };
        const body = JSON.stringify(data);
        return new Response(body, {
            status: 200, 
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}