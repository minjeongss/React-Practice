export default function personReducer(person,action){
    switch(action.type){
        case 'updated':{
            const {target,current}=action;
            return {
                ...person,
                mentors:person.mentors.map((mentor=>{
                if (target===mentor.name){
                    return {...mentor,name:current};
                }
                return mentor;
            }))};
        }
        case 'deleted':{
            return {...person,
                mentors:person.mentors.filter((mentor)=>mentor.name!==action.name)
            };
        }
        case 'added':{
            const {target,title}=action;
            return {
                ...person,
                mentors:[...person.mentors,{target,title}],
            };
        }
        default:{
            throw Error(`알 수 없는 액션 타입이다: ${action.type}`);
        }
    }
}