
function About (){
    return(
        <>
        <section className="bg-gray-700 text-center py-14">
         <div className="  max-w-xl mx-auto text-center pt-96">
            <h2 className="text-sky-50 font-bold text-5xl">About me </h2>
            <p className="text-lg mt-2"></p>                 
         </div>
         <div className="max-w-4xl mx-auto p-36 grid grid-cols-1 md:grid-cols-2 gap-8 items-center" >
            <img src="photo.jpg" 
                alt="pofile"
                className="rounded-lg shadow-lg"></img>  
     
            
            <p className="text-slate-50">With 1 of experience in Web developement, I've worked on various
            exciting projects, including [Highlight a Project or Two]. My goal is
            to continuously learn and grow while contributing to innovative
            projects.     </p>
         </div>
        </section>
        </>
    )
}
export default About;