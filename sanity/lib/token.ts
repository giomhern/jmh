import "server-only"
export const token = process.env.SANITY_API_READ_TOKEN

if(!token){
    throw new Error("MISSING SANITY_API_READ_TOKEN!")
}