import { ButtonScheduler } from "./Buttons";

export const SectionPhoto = () => {
    return(
        <div className="bg-gray-800"> 
            <div style = {{
                position: 'relative',
                backgroundImage: `
                url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNv9b3jdCa0X9OzzzB0KDrbNLY2y7F1xYvCg&s')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '640px',
                backgroundRepeat: 'no-repeat',
                }} className=""> 
            </div>

            <div className="bg-gray-800 flex justify-center pb-12">

            <ButtonScheduler/>  

            </div>
                
                
        </div>
    );
}