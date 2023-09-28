import React,{useState,useEffect} from 'react'



export default function BtnSlider({direction,moveSlide,hcolor,theme}){
   const [fill, setFill] = useState(null);
   useEffect(() => {
      const color = hcolor || (theme==="light" ? '#000' : '#fff');
      setFill(color);
    }, [hcolor, theme]);
    

    return(
       <div className={direction==="next" ? 'btn-slide next' : 'btn-slide prev'} onClick={moveSlide} >
          {direction==="next" ? <svg  width="42" height="51" className='next' viewBox="0 0 52 61" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11.9948 55.6269C12.3453 55.8408 12.7389 55.9386 13.1332 55.91C13.5275 55.8813 13.9077 55.7272 14.233 55.4643L42.3997 32.5893C42.6875 32.3553 42.9227 32.0431 43.0851 31.6792C43.2476 31.3154 43.3325 30.9107 43.3325 30.5C43.3325 30.0893 43.2476 29.6846 43.0851 29.3208C42.9227 28.9569 42.6875 28.6447 42.3997 28.4108L14.233 5.53575C13.9083 5.27003 13.5277 5.11398 13.1326 5.08462C12.7374 5.05525 12.343 5.1537 11.9924 5.36922C11.6417 5.58475 11.3481 5.90908 11.1438 6.30685C10.9395 6.70463 10.8321 7.16058 10.8335 7.625V53.375C10.8334 53.839 10.9416 54.2941 11.1463 54.691C11.3511 55.088 11.6445 55.4116 11.9948 55.6269ZM15.1668 12.477L37.36 30.5L15.1668 48.523V12.477Z" fill={fill}
            />
               </svg> : <svg width="42" height="51"  className='prev' viewBox="0 0 52 61" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M40.0054 5.37308C39.6555 5.15721 39.2619 5.05799 38.8673 5.08623C38.4727 5.11446 38.0922 5.26905 37.7673 5.53321L9.60059 28.4082C9.31364 28.6431 9.07929 28.9559 8.91747 29.3198C8.75565 29.6838 8.67114 30.0882 8.67114 30.4987C8.67114 30.9092 8.75565 31.3136 8.91747 31.6776C9.07929 32.0416 9.31364 32.3543 9.60059 32.5892L37.7673 55.4642C38.0923 55.7281 38.4727 55.8826 38.8672 55.911C39.2618 55.9395 39.6554 55.8407 40.0056 55.6255C40.3557 55.4104 40.649 55.0869 40.8537 54.6902C41.0584 54.2935 41.1666 53.8387 41.1668 53.375V7.625C41.1668 7.16105 41.0586 6.70593 40.8539 6.30897C40.6492 5.91201 40.3558 5.58836 40.0054 5.37308ZM36.8334 48.523L14.6403 30.5L36.8334 12.477V48.523Z" fill={ fill}/>
               </svg>}
       </div>
    )
}