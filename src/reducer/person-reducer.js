export default function personReducer(person,action){
    switch(action.type){
        case 'updated':{
            const {target,current}=action;
            return {
                ...person,
                mentors:person.mentors.map((mentor)=>{
                if (target===mentor.name){
                    return {...mentor,name:current};
                }
                return mentor;
            })};
        }
        case 'added':{
            const {name,title}=action;
            return {
                ...person,
                mentors:[...person.mentors,{name,title}],
            };
        }
        case 'deleted':{
            return {
                ...person,
                mentors:person.mentors.filter((mentor)=>mentor.name!==action.name),
            };
        }
        default:{
            throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
        }
    }
}