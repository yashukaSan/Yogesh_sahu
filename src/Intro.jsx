
function Intro(){
    const skills = [
        'HTML', 'CSS', 'Tailwind CSS', 'JavaScript',
        'React.js', "Git / GitHub", 'Responsive Web Design',
        'Artificial Intelligence', "Technical Communication"
    ];

    const iconsName = [
        'html.png', 'css.png', 'tailwind-css.svg', 'javascript.png',
        'react.png', 'git.svg', 'responsive-web.png', 'ai.png'
    ];

    const contacts = [
        ["Phone", "+91 8982199384"],
        ["Address", "Datia, Madhya Pradesh, India"], 
        ["LinkedIn", "linkedin/in/yogesh-s-12637232b/"],
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
            <img src=".\src\assets\yogesh_pic.jpg" alt="Yogesh Pic" className="rounded-full w-45 " />
        </div>
        <hr className="" />
        {/* Skill Section */}
        <div className="border-3 my-4 p-4">
            <h3>SKILLS</h3>
            <ul className="grid grid-cols-3">
                {skills.map((skill, index)=>{
                    const path = `./src/assets/icons/${iconsName[index]}`;
                    return (
                    <li key={index}>
                        {skill}
                        <img src={path} alt={skill} />
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