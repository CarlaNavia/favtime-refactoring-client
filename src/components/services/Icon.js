import React from 'react'

export default function Icon({code}) {
    return (
        <>
        {code === 1 && <img src="/Icons/babysitters.png" alt="babysitters"/>}
        {code === 2 && <img src="/Icons/pareja.png" alt="elderly"/>}
        {code === 3 && <img src="/Icons/health-service.png" alt="healt-service"/>}
        {code === 4 && <img src="/Icons/home-duties.png" alt="home-duties"/>}
        {code === 5 && <img src="/Icons/language-classes.png" alt="language-classes"/>}
        {code === 6 && <img src="/Icons/move.png" alt="move"/>}
        {code === 7 && <img src="/Icons/personal-trainer.png" alt="personal-trainer"/>}
        {code === 8 && <img src="/Icons/repairs.png" alt="repairs"/>}
        {code === 9 && <img src="/Icons/school-support.png" alt="school-support"/>}
        {code === 10 && <img src="/Icons/transport.png" alt="transport"/>}
        {code === 11 && <img src="/Icons/others.png" alt="others"/>}
      </>
    )
}
