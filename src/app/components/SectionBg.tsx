import React from 'react';
import { ButtonScheduler } from './Buttons';

export function SectionBg() {
    return(
        <div> 
            <div style = {{
                position: 'relative',
                backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('https://www.danielafidellis.com.br/wp-content/uploads/2024/01/clinica-de-luxo-scaled.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '550px',
                backgroundRepeat: 'no-repeat',
                }} className="flex items-start justify-center flex-col"> 

                <div className='text-4xl text-pink-300 relative ml-3'>
                    <h1>Referência em Cirurgia Ortognática e <br/> Tratamento de <br/> Disfunções da ATM</h1>
                </div>

                <span style={{ display: "inline-block", width: "10%", borderBottom: "2px solid white", marginLeft: "12px", marginTop: "20px" }}></span>
                
                <div className='ml-3 mt-5'>
                    <p className='text-xl'>
                        Especialista em Cirurgia Ortognática, Tratamento de Disfunções da ATM, Extração dos sisos | Dentes inclusos, Apneia do Sono, Próteses Faciais, Implantes dentários, Bichectomia, Lipoescultura de papada, Harmonização orofacial demais procedimentos
                    </p>
                </div>

                <ButtonScheduler/>

            </div>
        
        </div>
    );
}




