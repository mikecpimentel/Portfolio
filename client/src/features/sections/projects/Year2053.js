import { Project } from "../../components/project/Project"
import { ProjectDescription } from "../../components/project/ProjectDescription"

export const Year2053 = () => {
    return (
        <Project
        title="Year 2053"
        period="Sept 2016 to Jan 2018"
        tech="Java, SQLite, Android Studio, Audacity, Photoshop">
            <ProjectDescription>
                <p>
                    Year 2053 was a text-based choose-your-own-adventure-type text game complete with background sound effects and voice acting (myself doing all the voice acting). Every single choice the user makes in the game affects the story. It seemed like a fun-ish project to work on.

                    This was my one and only foray into Android development.

                    There were so many challenging components to this project that I had to overcome.
                <p>

                </p>
                <p>

                </p>
                <p>
                    With this project, I gained experience with:
                </p>
                <ul>
                    <li>Performance testing and analysis</li>
                    <li>Android development tools (likely now obsolete)</li>
                    <li>Audio recording and editing</li>
                </ul>

                    My favorite part of this project was figuring out how to program the evolving nature of the story, especially with the dynamically diverging and intersecting storylines. I had to dynamically and seamlessly connect over a hundred audio files in different orders and patterns depending on choices made in the past.

                    I made huge online diagrams to help me connect all the pieces.

                    One interesting challenge was developing the functions that enabled the audio and text to sync up perfectly.

                    I recorded the audio in a freezing-cold car (through the Indiana wintertime), which was the closest thing to a studio I could find without having to spend money.
                </p>
            </ProjectDescription>
        </Project>
    )
}