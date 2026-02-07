import { useState } from 'react'

function Intro(){
    const [isHover, setIsHover] = useState(false);


    const skills = [
        {
            "name": 'HTML',
            "icon": 'html.png',
            "class": "h-20 w-20 rounded-full text-shadow m-auto hover:shadow-2xl  hover:shadow-[0px_5px_30px_30px_rgb(256,50,0),inset_2px_10px_1000px_0px_red]"
        },
        {
            "name": 'CSS', 
            "icon": 'css.png',
            "class": "h-20 w-20 rounded-full m-auto hover:shadow-2xl hover:shadow-[0px_5px_30px_30px_rgb(0,100,150),inset_2px_10px_1000px_0px_rgb(0,100,150)]"
        },
        {
            "name": 'Tailwind CSS',
            "icon": 'tailwind-css.svg',
            "class": "h-20 w-20 rounded-full m-auto hover:shadow-2xl hover:shadow-[0px_5px_30px_30px_rgb(0,150,150),inset_2px_10px_100px_0px_rgb(0,150,150)]"
        },
        {
            "name": 'JavaScript',
            "icon": 'javascript.png',
            "class": "h-20 w-20 rounded-full m-auto hover:shadow-2xl hover:shadow-[0px_5px_30px_30px_rgb(256,200,0),inset_2px_10px_100px_0px_rgb(256,200,0)]"
        },
        {
            "name": 'React.js',
            "icon": 'react.png',
            "class": "h-20 w-20 rounded-full m-auto hover:shadow-2xl hover:shadow-[0px_5px_30px_30px_rgb(0,250,250),inset_2px_10px_100px_0px_rgb(0,250,250)]"
        },
        {
            "name": "Git / GitHub",
            "icon": 'git.svg',
            "class": "h-20 w-20 rounded-full m-auto hover:shadow-2xl hover:shadow-[0px_5px_30px_30px_rgb(256,50,0),inset_2px_10px_100px_0px_black]"
        },
        {
            "name": 'Responsive Web Design',
            "icon": 'responsive-web.png',
            "class": "h-20 w-20 rounded-full m-auto hover:shadow-2xl hover:shadow-[0px_5px_30px_30px_rgb(6,150,200),inset_1px_10px_20px_12px_,inset_100px_2px_5px_5px_violet]"
        },
        {
            "name": 'Artificial Intelligence',
            "icon": 'ai.png',
            "class": "h-20 w-20 rounded-full p-1 m-auto hover:shadow-2xl hover:shadow-[0px_5px_30px_30px_rgb(156,150,200),inset_0px_0px_15px_10px_pink,inset_2px_30px_200px_20px_lightblue]"
        }
    ];


    const contacts = [
        ["Phone", "+91 8982199384"],
        ["Address", "Datia, Madhya Pradesh, India"], 
        ["LinkedIn", "linkedin.com/in/yogesh-s-12637232b/"],
        ["GitHub", "github.com/yashukaSan"]
    ];
    
    const projects =[
        {
            'Name': 'Quiz-Website',
            "Technologies": ["React.js", "Tailwind CSS"]
        }, {
            'Name': 'To-Do-List',
            "Technologies": ["React.js", "Tailwind CSS"]
        },{
            "Name": "Palindrome Checker",
            "Technologies": ["HTML5", "CSS3", 'JavaScript']
        },
        {
            "Name": "Static Webpage",
            "Technologies": ["HTML5", "CSS3"]
        }
    ];

    return (
        <div className="border-3 border-orange-500 p-3">
        {/* Heasding Section */}
        <div className="flex border-2 p-4 border-yellow-400">
            <div>
                <h1>YOGESH SAHU</h1>
                <h4>Student</h4>
                <hr />
                <div>
                    <h2>ABOUT</h2>
                    <ul>
                        {contacts.map((item, index)=>(
                            <li key={index}>
                                <p>
                                    <b>{item[0]}</b> : {item[1]}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <h3>Summary</h3>
                        <p>
                            Aspiring Frontend Developer with a solid foundation in modern web technologies including JavaScript, React.js,
                            and Tailwind CSS. Passionate about building responsive, user-friendly interfaces and seeking an entry-level
                            role to contribute to impactful projects while growing in a collaborative tech team.
                        </p>
                </div>
            </div>

        </div>
        <hr className="" />
        {/* Skill Section */}
        <div className="border-3 my-4 p-4">
            <h3>SKILLS</h3>
            <ul className="grid xs:grid-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-9 gap-4 justify-around">
                {skills.map((skill, index)=>{
                    const path = `./src/assets/icons/${skill['icon']}`;
                    return (
                    <li key={index} className="m-0">
                        <img
                         onMouseEnter={()=>{setIsHover(true)}}
                         onMouseLeave={()=>{setIsHover(false)}}
                         src={path} alt={skill['name']}
                         className={skill['class']} 
                        />
                        {
                        isHover && (
                            <p className="text-center mt-0 text-shadow-red-400 text-shadow-lg">
                                {skill['name']}
                            </p>)
                        }
                    </li>
                )})}
            </ul>
        </div>
        <hr />
        {/* Projects Section */}
        <div>
            <h3>PROJECTS</h3>
            <ul>
                {projects.map((item, index)=>(
                    <li key={index}>
                        <div>
                            <h4>
                                <a href="#">{item['Name']}</a>
                            </h4>
                            <p>Technology Used: 
                                {item["Technologies"].map((skill)=>(
                                    <span> {skill}, </span>
                                ))}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}

export default Intro;