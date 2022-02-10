import htmlpic from './html.png'
import csspic from './css3.png'
import jspic from './javascript.png'
import cpic from './c.png'
import cpppic from './c++.png'
import pypic from './python.png'
import mysqlpic from './mysql.png'
console.log(mysqlpic)
console.log(pypic)
console.log(cpppic)
console.log(cpic)
console.log(csspic)
console.log(jspic)
console.log(htmlpic)

export const SkillsData=[
    {
        type:"Languages",
        list: [
            {name:"C",
            icon:<img src={cpic} height='70' width='70'/>
        },
        {
            name:"C++",
            icon: <img src={cpppic} height='70' width='70'/>
        },
        {
            name:"Python",
            icon: <img src={pypic} height='70' width='70'/>
        },
        ],
    },
        





    { type:"Frontend",
        list: [
            {
                name:"HTML",
                icon: <img src={htmlpic} height='70' width='70'/>
            },
            {
                name:"CSS",
                icon: <img src={csspic} height='70' width='70'/>
            },
            {
                name:"Javascript",
                icon: <img src={jspic} height='70' width='70'/>
            },
            
        ],
    },
        { type:"Database",
          list: [
            {
                name:"MySQL",
                icon: <img src={mysqlpic} height='70' width='70'/>
            },
        ],
    },
        
    
]