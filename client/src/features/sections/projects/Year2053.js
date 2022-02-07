import { Project } from "../../components/project/Project"
import { ProjectDescription } from "../../components/project/ProjectDescription"
import photo1 from '../../../images/year-2053/Phone-Screenshot-1-169x300.png'
import photo1Big from '../../../images/year-2053/Phone-Screenshot-1.png'
import photo2 from '../../../images/year-2053/Phone-Screenshot-2-169x300.png'
import photo2Big from '../../../images/year-2053/Phone-Screenshot-2.png'
import photo3 from '../../../images/year-2053/Phone-Screenshot-4-169x300.png'
import photo3Big from '../../../images/year-2053/Phone-Screenshot-4.png'
import photo4 from '../../../images/year-2053/Screenshot_2017-12-24-04-59-07-169x300.png'
import photo4Big from '../../../images/year-2053/Screenshot_2017-12-24-04-59-07-576x1024.png' 
import photo5 from '../../../images/year-2053/Year-2053-Screenshot-1-169x300.png'
import photo5Big from '../../../images/year-2053/Year-2053-Screenshot-1-576x1024.png'
import photo6 from '../../../images/year-2053/Year-2053-Logo-Revised-2-300x300.png'

export const Year2053 = () => {
    return (
        <Project
        title="Year 2053"
        period="Sept 2016 to Jan 2018"
        tech="Java, SQLite, Android Studio, Audacity, Photoshop"
        images={[[photo1, photo1Big], [photo2, photo2Big], [photo3, photo3Big], [photo4, photo4Big], [photo5, photo5Big], [photo6, photo6]]}>
            <ProjectDescription>
                <p>
                    Year 2053 was a text-based choose-your-own-adventure-type text game complete with background sound effects and voice acting (myself doing all the voices). Every choice the app user makes in the game affects the story. It seemed like a fun-ish project to work on.

                    This was my one and only foray into Android development.
                </p>
                <p>
                    There were so many challenging components to this project that I had to solve. I had to figure out how to program the evolving nature of the story, especially with the algorithmic diverging and intersecting of storylines. I programmed the game to dynamically and seamlessly connect over a hundred audio files in different orders and patterns depending on choices made in the past. I made huge online diagrams to help me connect all the pieces.
                </p>
                <p>
                    One interesting challenge was developing the functions that enabled the audio and text to sync up perfectly.
                </p>
                <p>
                    With this project, I gained experience with:
                </p>
                <ul>
                    <li>Performance testing and analysis</li>
                    <li>Android development tools</li>
                    <li>Java programming and multithreading</li>
                    <li>Audio recording and editing</li>
                    <li>I also learned how to create basic graphics</li>
                </ul>
                <p> 
                    I recorded the audio in a freezing-cold car (through the Indiana wintertime), which was the closest thing I had to a studio.
                </p>
            </ProjectDescription>
        </Project>
    )
}