import { Project } from "../../components/project/Project"
import { ProjectDescription } from "../../components/project/ProjectDescription"

import photo2 from '../../../images/wordpress/how-to-learn-a-language-300x169.png'
import photo2Big from '../../../images/wordpress/how-to-learn-a-language-768x432.png'

import photo3 from '../../../images/wordpress/Screenshot-2021-06-24-145705-289x300.png'
import photo3Big from '../../../images/wordpress/Screenshot-2021-06-24-145705-768x797.png'

import photo4 from '../../../images/wordpress/Screenshot-2021-06-25-152251-300x256.png'
import photo4Big from '../../../images/wordpress/Screenshot-2021-06-25-152251-768x656.png'

import photo5 from '../../../images/wordpress/Screenshot-2021-06-25-152304-300x161.png'
import photo5Big from '../../../images/wordpress/Screenshot-2021-06-25-152304-1024x550.png'

import photo6 from '../../../images/wordpress/Screenshot-2021-06-25-152312-300x154.png'
import photo6Big from '../../../images/wordpress/Screenshot-2021-06-25-152312-1024x526.png'

import photo7 from '../../../images/wordpress/20210404_055244-2-300x300.jpg'
import photo7Big from '../../../images/wordpress/20210404_055244-2-768x768.jpg'

export const WordPressProjects = () => {
    return (
        <Project
        title="WordPress Stuff"
        period="Mar 2019 to Jun 2021"
        tech="WordPress, Elementor, PHP, CSS, HTML, Photoshop, Illustrator, Google Analytics"
        images={[[photo2, photo2Big, 'Example of a cover image for one of my articles on one of my websites.'], [photo3, photo3Big, 'I compiled information for most common chemicals used in baby wipes for one of my websites.'], [photo4, photo4Big, 'I got really good at making cookies...'], [photo5, photo5Big, '..but ultimately finalized only three recipes.'], [photo6, photo6Big, 'Landing page.'], [photo7, photo7Big, 'Label I designed on Illustrator.']]}>
            <ProjectDescription>
                <p>
                    I discovered WordPress in 2019. I had heard of it before, but had not the slightest idea of what it was.

                    Over a period of two years, I started about eight websites covering everything from finance to travel to parenting (even though I am not a parent myself.. it seemed like a fun project during lockdown). 
                </p>
                <p>    
                    Since I did everything myself (writing, designing, etc), I couldn't produce enough high-quality articles to garner sufficient web traffic.
                </p>
                <p>
                    None of these websites are online anymore, mostly because I couldn't afford the web hosting. I still have backups for each.

                    Experimenting with WordPress was not super fulfilling, but I learned a lot of worthwhile information. I read countless books on marketing, time management, productivity, business management, and others. I also gained a deep understanding of the operations side of the modern internet.
                </p>
                <p>
                    A few of the things I learned over the two years were:
                </p>
                <ul>
                    <li>Content writing and editing</li>
                    <li>How to create decent web graphics using Adobe products</li>
                    <li>Basic project management</li>
                    <li>How to organize large amounts of information.</li>
                    <li>Legal topics (e.g., copyrights, privacy)</li>
                    <li>Web security (e.g., firewalls, Cloudflare, TLS)</li>
                    <li>Web performance (e.g., CDNs, caching)</li>
                    <li>UX/UI</li>
                    <li>Search engine optimization and marketing</li>
                    <li>Web analytics</li>
                </ul>
                <p>
                    My final WordPress project was Omaha Cookie Co., an online-only cookie shop specializing in premium cookies. I learned a lot about food chemistry and the like. I probably baked over a thousand cookies to test recipes, most of which I sent to my best friend by mail.
                </p>
                <p>
                    For Omaha Cookie Co., I created an ingredient-management and costing system to perfectly account for per-cookie and per-product costs. I also made a nutrition facts system to generate accurate labels using my recipes.
                </p>
            </ProjectDescription>
        </Project>
    )
}