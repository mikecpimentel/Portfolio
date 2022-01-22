import { Outlet } from 'react-router-dom'
import { SubSectionButton } from '../components/SubSectionButton'

export const Projects = () => {
    return (
        <div>
            <h3 className="section-header">Projects</h3>
            <div className='sub-section-links'>
                <SubSectionButton text="Let's Ask Bobby" page="lets-ask-bobby" />
                <SubSectionButton text="Geller Portal" page="geller-portal" />
                <SubSectionButton text="Collabolist" page="collabolist" />
                <SubSectionButton text="Year 2053" page="year-2053" />
                <SubSectionButton text="WordPress Tinkerings" page="wordpress-tinkerings" />
            </div>
            <p className="light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I'm still around the beginning of my journey, but I plan on making rapid progress. I still have much to learn, but..</p>
            <Outlet />
        </div>
    )
}