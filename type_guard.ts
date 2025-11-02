{
//    Type guard 
type NormalUser = {
  name: string;
}

type AdminUser = {
    name: string;
    role: "admin";
}

const getUser = (user: NormalUser | AdminUser) => {
     if("role" in user){
        return `I am an admin and my role is ${user.role}`;
     }
     return `I am a normal user`;
}



}