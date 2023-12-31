import dynamic from 'next/dynamic'
import { useEffect, useState } from "react"

const timeLeft = ()=>{
    const datecur = new Date();
    const newyear = new Date('2024-01-01T00:00:40+05:30')
    const timeremaining = newyear.getTime() - datecur.getTime();
    if(timeremaining>0){
        const hours = Math.floor(timeremaining/(1000*60*60))
        const mins = Math.floor((timeremaining%(1000 * 60 * 60))/(1000*60))
        const secs = Math.floor((timeremaining%(60*1000))/1000)
        return {hours,mins,secs}
    }
    else{
        return {hours:0,mins:0,secs:0};
    }

}

 const Timer = ({newyear,setNewyear})=>{
    const [useTime,setUseTime] = useState(timeLeft())
    
    useEffect(()=>{
        let interval;
        if(!newyear){
            
            if(useTime.secs===0 &&  useTime.mins===0 && useTime.hours===0){
                setNewyear(true)
            }
            else{
                setUseTime(timeLeft())
                interval = setInterval(()=>{
                    const updatedTime = timeLeft();
                    if (updatedTime.secs === 0 && updatedTime.mins === 0 && updatedTime.hours === 0) {
                      setNewyear(true);
                    } else {
                      setUseTime(updatedTime);
                    }
                },1000)
            }
            return ()=>{clearInterval(interval)
        }
    }
},[])
    return (
        <div>
            <div className="flex flex-row gap-4" style={{gap:'1rem'}}>
                <div className=''> 
                   {!newyear && <div className="text-4xl" style={{fontSize : "2.75rem"}} >{useTime.hours &&  useTime.hours<10  && <>0</>}{useTime.hours | 0}</div> }
                   {newyear && <div className="text-4xl" style={{fontSize : "2.75rem"}} >00</div> }
                    <span>Hours</span>
                </div>
                <div>
                    {!newyear && <div className="text-4xl" style={{fontSize : "2.75rem"}} >{useTime.mins &&  useTime.mins<10  && <>0</>}{useTime.mins | 0}</div>}
                    {newyear && <div className="text-4xl" style={{fontSize : "2.75rem"}} >00</div> }
                    <span>Minutes</span>
                </div>
                <div>
                    {!newyear && <div className="text-4xl" style={{fontSize : "2.75rem"}}  >{useTime.secs &&  useTime.secs<10  && <>0</>}{useTime.secs | 0}</div>}
                    {newyear && <div className="text-4xl" style={{fontSize : "2.75rem"}} >00</div> }
                    <span>seconds</span>
                </div>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Timer), {
    ssr: false
  })