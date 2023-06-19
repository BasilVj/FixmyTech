import React from 'react'
import './Services.css'
import constants from '../../constants'
import Service from './Service/Service'

function Services() {
  return (
    <div className='app__services section__padding'>
        <Service image={constants.keyboard} name='keyboard Issues'/>
        <Service image={constants.Mic} name='Mic not working'/>
        <Service image={constants.Wifi} name='WiFi Issues'/>
        <Service image={constants.WinUpdate} name='Windows update errors'/>
        <Service image={constants.bluetooth} name='Bluetooth connectivity Issues'/>
        <Service image={constants.data_recovery} name='Data Recovery'/>
        <Service image={constants.pc_build} name='PC Build'/>
        <Service image={constants.dll} name='Missing DLL'/>
        <Service image={constants.port} name='Port Issues'/>
        <Service image={constants.ram} name='RAM Installation'/>
        <Service image={constants.software_install} name='Software Installation Guide'/>
        <Service image={constants.speaker} name='Speaker not working'/>
        <Service image={constants.ssd} name='SSD Installation'/>
        <Service image={constants.video} name='Video Playback Error'/>
        <Service image={constants.windows11} name='Windows OS Installation'/>
        <Service image={constants.hard_disk} name='Hard Disk Installation'/>
        
        
    </div>
  )
}

export default Services