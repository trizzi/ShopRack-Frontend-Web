import axios from "axios";

export const getBlogPost = async () => {
    const res = await axios.get("https://dev-shopracks.pantheonsite.io/wp-content/uploads/2022/01/book-keeping.jpeg");
    console.log(res)
}

export const regUser = async (user) =>{
    const data = JSON.stringify(user)
    axios.post("https://shoprackapi.herokuapp.com/api/v1/users/create",data,{
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((res)=>{
        console.log(res,";;;;;;;;;;;;;;;;")
        return res;
    }).catch(err=>{
        console.log(err,":::::::::::::::::")
        return err
    })
}
