
function About (){
    return(
        <>
        <section className="bg-zinc-400 text-center">
         <div className="  max-w-xl mx-auto text-center pt-64">
            <h2 className="text-emerald-400 font-bold text-3xl">About me </h2>
            <p className="text-lg mt-4">Hi! I'm Bhanu Sharma, a passionate [Your Role/Field]. I specialize in
          Javascript, react,python and love creating impactful projects that
          solve real-world problems.</p>                 
         </div>
         <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center" >
            <img src="photo.jpg" 
                alt="pofile"
                className="rounded-lg shadow-lg"></img>  
     
            
            <p className="">With 1 of experience in Web developement, I've worked on various
            exciting projects, including [Highlight a Project or Two]. My goal is
            to continuously learn and grow while contributing to innovative
            projects.     </p>
            <ul>
            <li>Skilled in Javascript, React, Node.js, python</li>
            <li>passionate about making beautiful websites .. </li>
            <li>Currently learning Splunk as a data monitoring tool  </li></ul> 
         </div>
 
        </section>
        </>
    )
}
export default About;