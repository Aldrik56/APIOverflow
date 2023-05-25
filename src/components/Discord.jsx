import { useEffect } from "react";
import axios from 'axios';
const Discord=()=>{
    function SendToDiscord(e){
        const discordUrl="https://discord.com/api/webhooks/1103635342915010570/YfYtJL_uVZw_aFFCEfZRdJaxLu6B_fU_4Do_ym920d-0q-CtoS_OklASEKM7Shgd6Qp_";
        
        axios(discordUrl,{
            method: "POST",
            data :{
                username:"bot kece",
                content: "Hallo nama saya "
            }}
        )
        .then((res)=>{
            console.log(res.data);
        })
        e.preventDefault();
    }

    
    return(
        <div>
            <button onClick={SendToDiscord}>Send to discord</button>
        </div>
    );
}
export default Discord;